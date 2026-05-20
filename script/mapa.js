/*global L, lojas*/

// 1. Configuração do mapa
var map = L.map('map', { zoomControl: false }).setView([-23.49, -46.55], 11);

// 2. Tile Layer (O desenho do mapa)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 19
}).addTo(map);

// 3. Ícone Personalizado (Pin Verde da Loja)
var greenIcon = L.divIcon({
    className: 'custom-pin',
    html: '<div style="background-color:#169152; width:15px; height:15px; border-radius:50%; border:2px solid white; box-shadow:0 2px 5px rgba(0,0,0,0.3);"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

// Variável para guardar o desenho da rota (para poder apagar depois)
var rotaAtual = null;

// 4. Carregar lojas do arquivo lojas.js
function coordValida(lat, lon) {
    return typeof lat === 'number' && typeof lon === 'number' &&
           isFinite(lat) && isFinite(lon) &&
           lat !== 0 && lon !== 0 &&
           lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
}

if (typeof lojas !== 'undefined') {
    lojas.forEach(loja => {
        if (!coordValida(loja.latitude, loja.longitude)) return;
        try {
            const nome = loja.nome || 'Loja';
            const end = loja.end || loja.endereco || 'Endereço não disponível';
            L.marker([loja.latitude, loja.longitude], { icon: greenIcon }).addTo(map)
                .bindPopup(`<b>${nome}</b><br>${end}`);
        } catch(e) { /* ignora entrada inválida */ }
    });
} else {
    console.error("ERRO: Arquivo lojas.js não carregado!");
}

// 5. Localização do usuário (GPS)
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

// 6. Função de Busca (Onde a mágica acontece)
document.getElementById('btn-buscar').addEventListener('click', buscarLoja);

async function buscarLoja() {
    var input = document.getElementById('endereco').value;
    var card = document.getElementById('result-card');
    document.getElementById('lista-sugestoes').style.display = 'none';

    // Validação
    if(!input) {
        card.style.display = 'block';
        card.innerHTML = '<span style="color:#FFC301; font-weight:600;"><i class="fas fa-exclamation-circle"></i> Por favor, digite um endereço.</span>';
        setTimeout(() => { card.style.display = 'none'; }, 3000);
        return;
    }

    card.style.display = 'block';
    card.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Buscando...';

    try {
        // Busca o endereço digitado (Geocoding)
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

        // Limpa busca anterior (círculo amarelo antigo)
        map.eachLayer((layer) => {
            if(layer.options.color === '#FFC301' && !layer._route) map.removeLayer(layer);
        });

        // Adiciona o ponto do usuário (Bolinha Amarela)
        L.circleMarker([lat, lon], { color: '#FFC301', radius: 8, fillOpacity: 1 }).addTo(map)
            .bindPopup("Você está aqui").openPopup();

        // Encontra a loja mais próxima
        var maisPerto = null;
        var menorDist = Infinity;

        lojas.forEach(loja => {
            if(!coordValida(loja.latitude, loja.longitude)) return;
            var dist = map.distance([lat, lon], [loja.latitude, loja.longitude]);
            if(dist < menorDist) {
                menorDist = dist;
                maisPerto = loja;
            }
        });

        if(maisPerto) {
            var km = (menorDist / 1000).toFixed(1);
            var linkMaps = `https://www.google.com/maps/dir/?api=1&destination=${maisPerto.latitude},${maisPerto.longitude}`;
            
            // Atualiza o cartão com o resultado
            card.innerHTML = `
                <div style="font-size:12px; color:#888;">LOJA MAIS PRÓXIMA</div>
                <strong style="color:#169152; font-size:18px;">${maisPerto.nome}</strong>
                <div style="margin:5px 0;">📍 ${km} km de distância</div>
                <a href="${linkMaps}" target="_blank" style="background:var(--cor-destaque); color:black; padding:5px 15px; border-radius:15px; font-size:12px; font-weight:bold; display:inline-block; text-decoration:none;">Abrir no GPS</a>
            `;

            // CHAMA A FUNÇÃO DE TRAÇAR A ROTA AMARELA
            tracarRota(lat, lon, maisPerto.latitude, maisPerto.longitude);
        }

    } catch (err) {
        console.error(err);
        card.innerHTML = "Erro na busca.";
    }
}

// Função nova para desenhar o rastro amarelo
async function tracarRota(startLat, startLon, endLat, endLon) {
    // Se já tiver uma rota desenhada, apaga ela
    if (rotaAtual) {
        map.removeLayer(rotaAtual);
    }

    // Serviço OSRM (Gratuito e Aberto)
    const urlRota = `https://router.project-osrm.org/route/v1/driving/${startLon},${startLat};${endLon},${endLat}?overview=full&geometries=geojson`;

    try {
        const resp = await fetch(urlRota);
        const json = await resp.json();

        if (json.routes && json.routes.length > 0) {
            const caminho = json.routes[0].geometry;

            // Desenha a linha amarela no mapa
            rotaAtual = L.geoJSON(caminho, {
                style: {
                    color: '#FFC301', // Amarelo da marca
                    weight: 6,        // Grossura da linha
                    opacity: 0.8,     // Levemente transparente
                    lineCap: 'round'  // Pontas arredondadas
                }
            }).addTo(map);

            // Ajusta o zoom para mostrar TUDO (Cliente + Rota + Loja)
            map.fitBounds(rotaAtual.getBounds(), { padding: [50, 50] });
        }
    } catch (e) {
        console.log("Erro ao traçar rota visual:", e);
        // Se der erro, foca apenas na loja e no cliente sem rota
        var group = new L.featureGroup([
            L.marker([startLat, startLon]),
            L.marker([endLat, endLon])
        ]);
        map.fitBounds(group.getBounds(), { padding: [50, 50] });
    }
}

// 7. Autocomplete Inteligente
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
            let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(texto)}&limit=5&addressdetails=1&countrycodes=br`;
            if(userLat && userLon) {
                let viewbox = `${userLon-1},${userLat+1},${userLon+1},${userLat-1}`;
                url += `&viewbox=${viewbox}&bounded=0`;
            }

            const resp = await fetch(url);
            const resultados = await resp.json();

            listaSugestoes.innerHTML = '';
            
            if(resultados.length > 0) {
                resultados.forEach(item => {
                    const textoLimpo = formatarEndereco(item);
                    const li = document.createElement('li');
                    li.textContent = textoLimpo;
                    li.onclick = () => {
                        inputEndereco.value = textoLimpo;
                        listaSugestoes.style.display = 'none';
                        buscarLoja();
                    };
                    listaSugestoes.appendChild(li);
                });
                listaSugestoes.style.display = 'block';
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