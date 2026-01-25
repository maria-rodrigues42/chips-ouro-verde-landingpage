/*global l, lojas*/

//1 configuracao do mapa
var map = L.map('map', { zoomControl: false }).setView([-23.49, -46.55], 11);

//2 tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 19
}).addTo(map);

//3 icone personalizado
var greenIcon = L.divIcon({
    className: 'custom-pin',
    html: '<div style="background-color:#169152; width:15px; height:15px; border-radius:50%; border:2px solid white; box-shadow:0 2px 5px rgba(0,0,0,0.3);"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

//4 carregar lojas do arquivo lojas js
if (typeof lojas !== 'undefined') {
    lojas.forEach(loja => {
        if (loja.latitude && loja.longitude) {
            L.marker([loja.latitude, loja.longitude], { icon: greenIcon }).addTo(map)
                .bindPopup(`<b>${loja.nome}</b><br>${loja.end || loja.endereco}`);
        }
    });
} else {
    console.error("ERRO: Arquivo lojas.js não carregado!");
}

//5 localizacao do usuario
let userLat = null;
let userLon = null;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            userLat = pos.coords.latitude;
            userLon = pos.coords.longitude;
        },
        (err) => console.log("Localização padrão usada.")
    );
}

//6 funcao de busca botao lupa
document.getElementById('btn-buscar').addEventListener('click', buscarLoja);

async function buscarLoja() {
    var input = document.getElementById('endereco').value;
    var card = document.getElementById('result-card');
    document.getElementById('lista-sugestoes').style.display = 'none';

    //aviso visual pedir endereco
    if(!input) {
        card.style.display = 'block';
        //mensagem pede endereco
        card.innerHTML = '<span style="color:#FFC301; font-weight:600;"><i class="fas fa-exclamation-circle"></i> Por favor, digite um endereço.</span>';
        
        //efeito toast some depois de 3s
        setTimeout(() => {
            card.style.display = 'none';
        }, 3000);
        
        return; //para a funcao aqui
    }
    //card.style.display block
    card.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Buscando...';

    try {
        let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}&countrycodes=br&limit=1`;
        
        if(userLat && userLon) {
            let viewbox = `${userLon-0.5},${userLat+0.5},${userLon+0.5},${userLat-0.5}`;
            url += `&viewbox=${viewbox}&bounded=0`;
        }

        var response = await fetch(url);
        var data = await response.json();

        if(data.length === 0) {
            card.innerHTML = "Endereço não encontrado.";
            return;
        }

        var lat = parseFloat(data[0].lat);
        var lon = parseFloat(data[0].lon);

        map.eachLayer((layer) => {
            if(layer.options.color === '#FFC301') map.removeLayer(layer);
        });

        L.circleMarker([lat, lon], { color: '#FFC301', radius: 8, fillOpacity: 1 }).addTo(map)
            .bindPopup("Endereço Buscado").openPopup();

        map.setView([lat, lon], 14);

        var maisPerto = null;
        var menorDist = Infinity;

        lojas.forEach(loja => {
            if(loja.latitude && loja.longitude) {
                var dist = map.distance([lat, lon], [loja.latitude, loja.longitude]);
                if(dist < menorDist) {
                    menorDist = dist;
                    maisPerto = loja;
                }
            }
        });

        if(maisPerto) {
            var km = (menorDist / 1000).toFixed(1);
            var linkMaps = `https://www.google.com/maps/dir/?api=1&destination=${maisPerto.latitude},${maisPerto.longitude}`;
            
            card.innerHTML = `
                <div style="font-size:12px; color:#888;">LOJA MAIS PRÓXIMA</div>
                <strong style="color:#169152; font-size:18px;">${maisPerto.nome}</strong>
                <div style="margin:5px 0;">📍 ${km} km de distância</div>
                <a href="${linkMaps}" target="_blank" style="background:var(--cor-destaque); color:black; padding:5px 15px; border-radius:15px; font-size:12px; font-weight:bold; display:inline-block; text-decoration:none;">Como Chegar</a>
            `;
        }
    } catch (err) {
        console.error(err);
        card.innerHTML = "Erro na busca.";
    }
}

//7 autocomplete inteligente
let timeoutSugestao = null;
const inputEndereco = document.getElementById('endereco');
const listaSugestoes = document.getElementById('lista-sugestoes');

function formatarEndereco(item) {
    let parts = [];
    let address = item.address;

    let rua = address.road || address.pedestrian || address.street || item.name;
    if (rua) {
        if (address.house_number) rua += `, ${address.house_number}`;
        parts.push(rua);
    }

    if (address.suburb || address.neighbourhood) parts.push(address.suburb || address.neighbourhood);
    if (address.city || address.town || address.municipality) parts.push(address.city || address.town || address.municipality);
    if (address.state) parts.push(address.state);

    if (parts.length === 0) return item.display_name.replace(", Brasil", "");

    return parts.join(", ");
}

inputEndereco.addEventListener('input', function() {
    const texto = this.value;
    clearTimeout(timeoutSugestao);

    if(texto.length < 3) {
        listaSugestoes.style.display = 'none';
        return;
    }

    timeoutSugestao = setTimeout(async () => {
        try {
            let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(texto)}&limit=8&addressdetails=1&countrycodes=br`;
            if(userLat && userLon) {
                let viewbox = `${userLon-1},${userLat+1},${userLon+1},${userLat-1}`;
                url += `&viewbox=${viewbox}&bounded=0`;
            }

            const resp = await fetch(url);
            const resultados = await resp.json();

            listaSugestoes.innerHTML = '';
            const enderecosUnicos = new Set();

            if(resultados.length > 0) {
                let itensAdicionados = 0;
                resultados.forEach(item => {
                    if (itensAdicionados >= 5) return;
                    const textoLimpo = formatarEndereco(item);

                    if (enderecosUnicos.has(textoLimpo)) return;
                    enderecosUnicos.add(textoLimpo);
                    itensAdicionados++;

                    const li = document.createElement('li');
                    li.textContent = textoLimpo;
                    li.onclick = () => {
                        inputEndereco.value = textoLimpo;
                        listaSugestoes.style.display = 'none';
                        buscarLoja();
                    };
                    listaSugestoes.appendChild(li);
                });
                listaSugestoes.style.display = itensAdicionados > 0 ? 'block' : 'none';
            } else {
                listaSugestoes.style.display = 'none';
            }
        } catch (e) {
            console.error(e);
        }
    }, 400); 
});

document.addEventListener('click', function(e) {
    if (e.target !== inputEndereco && e.target !== listaSugestoes) {
        listaSugestoes.style.display = 'none';
    }
});