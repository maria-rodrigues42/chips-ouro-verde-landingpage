
//arquivo lojas js
//dados das lojas, facil de atualizar depois

const lojas = [
        {
        "nome": "L. CAMARGO DE ALCANTARA - São Paulo",
        "latitude": -23.605753957429265,
        "longitude": -46.62287324548451,
        "end": "Vigário Albernaz, 530 - Vila Gumercindo, São Paulo - SP, 04134-021"
    },
    {
        "nome": "BRULE INDUSTRIA DE ALIMENTOS LTDA - São José do Rio Preto",
        "latitude": -20.810760032259306,
        "longitude": -49.38717110511266,
        "end": "RUA BOA VISTA, 1130 - BOA VISTA, São José do Rio Preto - SP, 15025-010"
    },
    {
        "nome": "EMPORIO TANGERINA. - São Vicente",
        "latitude": -23.94871797505274,
        "longitude": -46.3972426780003,
        "end": "Senador Salgado Filho, 280 - Parque São Vicente, São Vicente - SP, 11360-200"
    },
    {
        "nome": "EMPORIO NATURAL COMERCIO DE ALIMENTOS LTDA - Curitiba",
        "latitude": -25.46861246882889,
        "longitude": -49.29377578450675,
        "end": "AV REPUBLICA ARGENTINA, 2591 - PORTAO, Curitiba - PR, 80610-260"
    },
    {
        "nome": "CIA DA SAUDE PORTO ALEGRE PRODUTOS NATURAIS - Porto Alegre",
        "latitude": -30.06120637168777,
        "longitude": -51.165652693249314,
        "end": "RUA ALBION, 111 - PARTENON, Porto Alegre - RS, 91530-010"
    },
    {
        "nome": "Almazen e Produtos Organicos - Campinas",
        "latitude": -22.900478436727685,
        "longitude": -47.05937126441803,
        "end": "Barreto Leme, 1259 - Centro, Campinas - SP, 13010-201"
    },
    {
        "nome": "RODOLFO CARVALHO DE OLIVEIRA - Alumínio",
        "latitude": -23.531303320654875,
        "longitude": -47.254823450926324,
        "end": "JOSE CERIONE, 201 - VILA SANTA LUZIA, Alumínio - SP, 18125-000"
    },
    {
        "nome": "ANA MARIA DA SILVA FERNANDES - São Paulo",
        "latitude": 0.0,
        "longitude": 0.0,
        "end": "MATILDA CAMPOS MACHADO, 772 - SUL DO RIO, São Paulo - SP, 08814-000"
    },
    {
        "nome": "Sacolão Central - Unaí",
        "latitude": -16.38035923956082,
        "longitude": -46.88513282023761,
        "end": "ITAOCA, 107 - BELA VISTA UNAÌ, Unaí - MG, 38613-668"
    },
    {
        "nome": "VIA NATURAL - Ubatuba",
        "latitude": -23.432037575014142,
        "longitude": -45.073481677909776,
        "end": "RUA HANS STADEN, 250 - CENTRO, Ubatuba - SP, 11690-021"
    },
    {
        "nome": "TERRA DOS TEMPEROS EMPORIO - São Paulo",
        "latitude": -23.73640043263608,
        "longitude": -46.695325922090234,
        "end": "RUA FRANCESCO GEMINIANI, 1 - PARQUE BRASIL, São Paulo - SP, 04843-010"
    },
    {
        "nome": "CASA DELA - São Paulo",
        "latitude": -23.59164202904971,
        "longitude": -46.73573534907368,
        "end": "Heitor dos Prazeres, 100 - VL SONIA, São Paulo - SP, 05522-000"
    },
    {
        "nome": "Saborio Alimentos - Uberlândia",
        "latitude": -18.944485741622533,
        "longitude": -48.24228086256541,
        "end": "Erotildes Ferreira Santos, 227 - Granada, Uberlândia - MG, 38410-076"
    },
    {
        "nome": "Empório Alpha Nutri - São Paulo",
        "latitude": -23.539368543214167,
        "longitude": -46.75751002209022,
        "end": "ANTONIO DE SOUZA NOSCHESE, 900 - PARQUE CONTINENTAL, São Paulo - SP, 05328-000"
    },
    {
        "nome": "TERRANA INDUSTRIA TEMPEROS e CD - Nova Odessa",
        "latitude": -22.769370603572284,
        "longitude": -47.25112515092632,
        "end": "AVENIDA JAIME RODRIGUES AZENHA, 995 - JARDIM INDUSTRIAL DANTE SIANI, Nova Odessa - SP, 13388-102"
    },
    {
        "nome": "SAHIARAS EMPORIO NORDESTINO - Guarulhos",
        "latitude": -23.452248051441973,
        "longitude": -46.41591919510675,
        "end": "ESTRADA do Moinho Velho, 255 - Jardim Angelica, Guarulhos - SP, 07260-430"
    },
    {
        "nome": "J.G ALIMENTOS NATURAIS - Maringá",
        "latitude": 0.0,
        "longitude": 0.0,
        "end": "AV PALMEIRAS DAS, 1103 - PARQUE DAS PALMEIRAS, Maringá - PR, 87023-160"
    },
    {
        "nome": "TM JUNIOR PRODUTOS NATURAIS LTDA - Palmas",
        "latitude": -10.20588133986401,
        "longitude": -48.33070974645634,
        "end": "QD ACSU SE 40 AVENIDA LO 11 (402 SUL), SN - Plano Diretor Sul, Palmas - TO, 77021-623"
    },
    {
        "nome": "Vida Saudavel Produtos Naturais - Suzano",
        "latitude": -23.538431986148172,
        "longitude": -46.30887109325413,
        "end": "RUA MIRAMBAVA, 511 - CENTRO, Suzano - SP, 08674-130"
    },
    {
        "nome": "ATACADAO DO NATURAL - São Paulo",
        "latitude": -23.549441794313903,
        "longitude": -46.571194706745864,
        "end": "RUA AZEVEDO SOARES, 553 - VILA GOMES CARDIM, São Paulo - SP, 03322-000"
    },
    {
        "nome": "Revita Produtos Naturais - São José do Rio Preto",
        "latitude": -20.811488079530264,
        "longitude": -49.38889953558196,
        "end": "RUA LUIZ ANTONIO DA SILVEIRA, 1413 - BOA VISTA, São José do Rio Preto - SP, 15025-020"
    },
    {
        "nome": "Bll Comercio de Produtos Naturaisltda - São Paulo",
        "latitude": -23.511827423809905,
        "longitude": -46.67300443372932,
        "end": "PROF CELESTINO BOURROUL, 151 - LIMAO, São Paulo - SP, 02710-000"
    },
    {
        "nome": "JU SALADISSIMO - São Paulo",
        "latitude": -23.50257933036954,
        "longitude": -46.50065880859849,
        "end": "Henry Célia, 31 - Jardim Penha, São Paulo - SP, 03758-050"
    },
    {
        "nome": "BENDITO GRAO - Olímpia",
        "latitude": 0.0,
        "longitude": 0.0,
        "end": "RUA DOUTOR ANTONIO OLIMPIO, 589 - PATRIMONIO DE SAO JOAO BATISTA, Olímpia - SP, 15400-067"
    },
    {
        "nome": "TERRA MEL FRUTAS COMERCIO DE HORT. LTDA - Campinas",
        "latitude": -22.843616641796267,
        "longitude": -47.10028025092632,
        "end": "RODOVIA DOM PEDRO I - KM 140, S/N - JARDIM SANTA MONICA, Campinas - SP, 13082-902"
    },
    {
        "nome": "BLL COMERCIO DE PRODUTOS NATURAIS LTDA - São Bernardo do Campo",
        "latitude": -23.72306275500761,
        "longitude": -46.54849630674587,
        "end": "RUA MARECHAL DEODORO, 2785 - CENTRO, São Bernardo do Campo - SP, 09710-193"
    },
    {
        "nome": "ATACADÃO DO NATURAL - Guarulhos",
        "latitude": -23.46838569885789,
        "longitude": -46.52642500489323,
        "end": "Luiz Faccini, 127 - Centro, Guarulhos - SP, 07110-000"
    },
    {
        "nome": "MAQUINA SATO - Fernandópolis",
        "latitude": -20.27887009218069,
        "longitude": -50.24972164722105,
        "end": "DOS ARNALDOS, 810 - CENTRO, Fernandópolis - SP, 15600-028"
    },
    {
        "nome": "POMARE EMPORIO - Foz do Iguaçu",
        "latitude": -25.53719486035156,
        "longitude": -54.5811940797624,
        "end": "Xavier da Silva, 1222 - Centro, Foz do Iguaçu - PR, 85851-180"
    },
    {
        "nome": "MUNDO CEREALISTA - São Paulo",
        "latitude": -23.496771904629284,
        "longitude": -46.58614334907367,
        "end": "Padre Sabóia de Medeiros, 577 - Vila Maria Alta, São Paulo - SP, 02134-000"
    },
    {
        "nome": "BELA SAUDE - São Paulo",
        "latitude": -23.5891558891806,
        "longitude": -46.57641530859849,
        "end": "MANAIAS, 264 - PARQUE DA VILA PRUDENTE, São Paulo - SP, 03140-040"
    },
    {
        "nome": "Moinho Central - Ananindeua",
        "latitude": -1.3638234098740936,
        "longitude": -48.40593150674586,
        "end": "We-25, 1 - Cidade Nova, Ananindeua - PA, 67130-530"
    },
    {
        "nome": "Magna Vita - São Paulo",
        "latitude": -23.574113930962156,
        "longitude": -46.6883973797624,
        "end": "AVENIDA BRIG FARIA LIMA, 1975 - JARDIM PAULISTANO, São Paulo - SP, 01452-001"
    },
    {
        "nome": "Magna Vita - São Paulo",
        "latitude": -23.539993816163506,
        "longitude": -46.718079335581955,
        "end": "AVENIDA DIOGENES RIBEIRO DE LIMA, 2282 - ALTO DE PINHEIROS, São Paulo - SP, 05458-001"
    },
    {
        "nome": "NUTRISFERA - São Paulo",
        "latitude": -23.58510930020049,
        "longitude": -46.778975928171434,
        "end": "RAPOSO TAVARES, 7201 - JARDIM CAMBARA, São Paulo - SP, 05577-901"
    },
    {
        "nome": "Emporio Aurea PINHEIROS - São Paulo",
        "latitude": -23.5676315841505,
        "longitude": -46.691572295106766,
        "end": "RUA DOS PINHEIROS, 1428 - PINHEIROS, São Paulo - SP, 05422-002"
    },
    {
        "nome": "Emporio Aurea CENTRO - São Paulo",
        "latitude": -23.544420444196735,
        "longitude": -46.63948752023761,
        "end": "Vinte e Quatro de Maio, 77 - República, São Paulo - SP, 01041-001"
    },
    {
        "nome": "ARMAZEM CP.ALEMAES - São Paulo",
        "latitude": -23.64370589458174,
        "longitude": -46.779676406745864,
        "end": "AV CARLOS LACERDA, 1424 - , São Paulo - SP, 08121-530"
    },
    {
        "nome": "WORD FITNESS ACADEMIA LTDA - São Paulo",
        "latitude": -23.50166038955275,
        "longitude": -46.380254030221195,
        "end": "FERNANDO PACHECO JORDAO, 1053 - JARDIM SAO LUIS (ZONA LESTE), São Paulo - SP, 08121-510"
    },
    {
        "nome": "ACACIO EDUARDO ROZON 27154455802 - Campinas",
        "latitude": -22.928915296243332,
        "longitude": -47.09749987976241,
        "end": "RUA SILVIO RIZZARDO, 161 - JARDIM ANCHIETA, Campinas - SP, 13060-871"
    },
    {
        "nome": "NAKKARI PRODUTOS ORIENTAIS - São Paulo",
        "latitude": -23.63878834257099,
        "longitude": -46.640625593254136,
        "end": "LEONARDO DA VINCI, 1069 - VL GUARANI, São Paulo - SP, 04313-000"
    },
    {
        "nome": "MIL ERVAS PRODUTOS NATURAIS (MIL FOLHAS NOVA) - Santo André",
        "latitude": -23.65812935729814,
        "longitude": -46.52733406441804,
        "end": "Coronel Oliveira Lima, 470 - Centro, Santo André - SP, 09010-000"
    },
    {
        "nome": "Empório Primícias - Guarulhos",
        "latitude": -23.4362375815824,
        "longitude": -46.5525698085985,
        "end": "Vinte e Cinco, 26 - Parque Continental I, Guarulhos - SP, 07077-400"
    },
    {
        "nome": "EMPORIO E MERCEARIA ELITE LTDA - São Paulo",
        "latitude": -23.492874788777932,
        "longitude": -46.44063569325412,
        "end": "MAL TITO, 567 - SAO MIGUEL PAULISTA, São Paulo - SP, 08010-090"
    },
    {
        "nome": "ANA MARIA DO PERPETUO SOCORRO CELESTRINO - Campinas",
        "latitude": -22.9378276317989,
        "longitude": -47.064270850926306,
        "end": "AVENIDA BADEN POWELL, 467 - JARDIM NOVA EUROPA, Campinas - SP, 13040-093"
    },
    {
        "nome": "Villa Natu Produtos Naturais - Hortolândia",
        "latitude": -22.855320178293447,
        "longitude": -47.21626243558196,
        "end": "Anhanguera, 449 - Vila Real Continuação, Hortolândia - SP, 13183-224"
    },
    {
        "nome": "Emporio Natural Sbc 2 - São Bernardo do Campo",
        "latitude": -23.667966881857815,
        "longitude": -46.58806567790976,
        "end": "RUA M.M.D.C., 371 - PAULICEIA, São Bernardo do Campo - SP, 09690-000"
    },
    {
        "nome": "+ SAUDAVEL PRODUTOS NATURAIS E SUPLEMENTOS - São Paulo",
        "latitude": -23.52315800604236,
        "longitude": -46.53389766441804,
        "end": "AMADOR BUENO DA VEIGA, 1142 - PENHA DE FRANCA, São Paulo - SP, 03636-000"
    },
    {
        "nome": "EMPORIO SAUDE E VIDA - Rio Claro",
        "latitude": 0.0,
        "longitude": 0.0,
        "end": "1, 560 - ZONA CENTRAL, Rio Claro - SP, 13500-401"
    },
    {
        "nome": "COMERCIO RODRIGUES - São Paulo",
        "latitude": -23.542506548142708,
        "longitude": -46.6266572202376,
        "end": "MERCURIO, 234 - BRAS, São Paulo - SP, 03007-000"
    },
    {
        "nome": "RDO SUPLEMENTOS E CEREAIS - São Paulo",
        "latitude": -23.542382076340044,
        "longitude": -46.57524702394286,
        "end": "TUIUTI, 1940 - TATUAPE, São Paulo - SP, 03307-005"
    },
    {
        "nome": "Nutri Bem. - Montanha",
        "latitude": -18.12724278063626,
        "longitude": -40.36360522023759,
        "end": "ITALO BENSO, 44 - CENTRO, Montanha - ES, 29890-000"
    },
    {
        "nome": "Harmony Empório Natural. - Ferraz de Vasconcelos",
        "latitude": -23.5409688507619,
        "longitude": -46.36962443583269,
        "end": "GODOFREDO OSORIO NOVAES, 152 - VILA CENTRAL, Ferraz de Vasconcelos - SP, 08531-170"
    },
    {
        "nome": "Terra dos Temperos Empório. - São Paulo",
        "latitude": -23.654673887794814,
        "longitude": -46.70190683558196,
        "end": "BR DE DUPRAT, 367 - SANTO AMARO, São Paulo - SP, 04743-060"
    },
    {
        "nome": "Ervas Milenares - São Paulo",
        "latitude": -23.609548376651016,
        "longitude": -46.47682339325459,
        "end": "MATEO BEI, 3361 - SAO MATEUS, São Paulo - SP, 03949-013"
    },
    {
        "nome": "EXPLODE SUPLEMENTOS LTDA - São Paulo",
        "latitude": -23.536142765608073,
        "longitude": -46.4685516355818,
        "end": "CAMPANELLA, 636 - JD ITAPEMIRIM, São Paulo - SP, 08220-830"
    },
    {
        "nome": "ANDERSON ROBERTO CASANOVA SAO JUDAS TADEU - Santo André",
        "latitude": -23.63180833045301,
        "longitude": -46.53039533372699,
        "end": "Vieira de Carvalho, 414 - Santa Terezinha, Santo André - SP, 09210-630"
    },
    {
        "nome": "Cerealista Sabará - São Paulo",
        "latitude": -23.68306321903156,
        "longitude": -46.682021252782185,
        "end": "NSRA DE SABARA, 3370 - VILA EMIR, São Paulo - SP, 04447-010"
    },
    {
        "nome": "FOLHA DE LOURO. - São Paulo",
        "latitude": -23.65274435934144,
        "longitude": -46.7048781644182,
        "end": "RUA MANUEL BORBA, 222 - SANTO AMARO, São Paulo - SP, 04743-010"
    },
    {
        "nome": "Empório Damasco. - São Paulo",
        "latitude": -23.651209308671127,
        "longitude": -46.70604782023618,
        "end": "RUA VOL DELMIRO SAMPAIO, 102 - SANTO AMARO, São Paulo - SP, 04754-000"
    },
    {
        "nome": "Academia New Force - São Paulo",
        "latitude": -23.54037978862452,
        "longitude": -46.3942850644182,
        "end": "JOAO DE SIQUEIRA AFONSO, 608 - LAJEADO, São Paulo - SP, 08452-105"
    },
    {
        "nome": "Nishitani Produtos Naturais - São Paulo",
        "latitude": -23.598740478656243,
        "longitude": -46.517497366273,
        "end": "SAPOPEMBA, 8596 - JARDIM PLANALTO, São Paulo - SP, 03988-000"
    },
    {
        "nome": "NUTRIMATTI ALIMENTOS SAUDAVEIS - Piracicaba",
        "latitude": -22.725758838862205,
        "longitude": -47.64309167854941,
        "end": "PRUDENTE DE MORAES, 617 - CENTRO, Piracicaba - SP, 13400-315"
    },
    {
        "nome": "West Market. - São Paulo",
        "latitude": -23.55200809290259,
        "longitude": -46.6808546490726,
        "end": "AMALIA DE NORONHA, 325 - PINHEIROS, São Paulo - SP, 05410-010"
    },
    {
        "nome": "Empório Vilucca. - São Paulo",
        "latitude": -23.62510348927401,
        "longitude": -46.69916469325461,
        "end": "RUA OSCAR RODRIGUES CAJADO FILHO, 34 - SANTO AMARO, São Paulo - SP, 04710-190"
    },
    {
        "nome": "Ali Cosméticos. - São Paulo",
        "latitude": -23.6502682406294,
        "longitude": -46.707166277909,
        "end": "AVENIDA MARIO LOPES LEAO, 147 - SANTO AMARO, São Paulo - SP, 04754-010"
    },
    {
        "nome": "Jdg Comercial. - São Paulo",
        "latitude": -23.570513293257818,
        "longitude": -46.62252272209099,
        "end": "Lins de Vasconcelos, 838 - Cambuci, São Paulo - SP, 01538-000"
    },
    {
        "nome": "Santissimo Emporio - São Paulo",
        "latitude": -23.502251822594893,
        "longitude": -46.63671839046178,
        "end": "Doutor César, 1137 - Santana, São Paulo - SP, 02013-004"
    },
    {
        "nome": "Nutrisfera - São Paulo",
        "latitude": -23.58503063920666,
        "longitude": -46.778975928162644,
        "end": "Raposo Tavares, 7201 - Jardim Cambara, São Paulo - SP, 05577-901"
    },
    {
        "nome": "Nutrisfera - Osasco",
        "latitude": -23.539395851343343,
        "longitude": -46.7685245355818,
        "end": "DOS AUTONOMISTAS, 1542 - VL YARA, Osasco - SP, 06020-010"
    },
    {
        "nome": "BLL COMERCIO DE PRODUTOS NATURAIS LTDA - São Paulo",
        "latitude": -23.486741351889854,
        "longitude": -46.719489419417876,
        "end": "Benedito Andrade, 71 - Vila Pereira Barreto, São Paulo - SP, 02936-000"
    },
    {
        "nome": "Bll Comercio de Produtos Naturaisltda - Mauá",
        "latitude": -23.676647885138447,
        "longitude": -46.45691683372701,
        "end": "da Saudade, 405 - Vila Nossa Senhora das Vitórias, Mauá - SP, 09360-000"
    },
    {
        "nome": "Cerealista Express - São Paulo",
        "latitude": -23.540970618692707,
        "longitude": -46.62646740667871,
        "end": "PROFESSOR EURIPEDES SIMÕES DE PAULA, 182 - BRAS, São Paulo - SP, 03006-010"
    },
    {
        "nome": "COTOVIA - São Paulo",
        "latitude": -23.49208180858412,
        "longitude": -46.617632537436585,
        "end": "Leôncio de Magalhães, 1004 - Jardim São Paulo(Zona Norte), São Paulo - SP, 02042-001"
    },
    {
        "nome": "Emporio Nordestino Agape - Itaquaquecetuba",
        "latitude": -23.474264318428492,
        "longitude": -46.35037205092738,
        "end": "da Liberdade, 58 - Centro, Itaquaquecetuba - SP, 08570-170"
    },
    {
        "nome": "Empório Dois Irmãos - São Paulo",
        "latitude": -23.644548768987118,
        "longitude": -46.6354635357794,
        "end": "OURICANA, 251 - VL GUARANI, São Paulo - SP, 04317-240"
    },
    {
        "nome": "Emporio Santa Castanha - São Paulo",
        "latitude": -23.541548478047062,
        "longitude": -46.629399061196686,
        "end": "da Cantareira, 306 - Centro, São Paulo - SP, 01024-000"
    },
    {
        "nome": "GNW ATACADISTA DE PRODUTOS NATURAIS LTDA - São Paulo",
        "latitude": -23.493847314070756,
        "longitude": -46.443331664411765,
        "end": "NORDESTINA, 65 - VL AMERICANA, São Paulo - SP, 08011-000"
    },
    {
        "nome": "MORIAH - São Paulo",
        "latitude": -23.649488044314023,
        "longitude": -46.70615934907367,
        "end": "Vera Cruz, 40 - Santo Amaro, São Paulo - SP, 04750-020"
    },
    {
        "nome": "EMPORIO ELLI - São Paulo",
        "latitude": -23.541756131870514,
        "longitude": -46.62938427790977,
        "end": "DA CANTAREIRA, 306 - CENTRO, São Paulo - SP, 01024-900"
    },
    {
        "nome": "FOLHA DE LOURO - São Bernardo do Campo",
        "latitude": -23.708978293987794,
        "longitude": -46.551293420237585,
        "end": "Doutor Flaquer, 189 - Centro, São Bernardo do Campo - SP, 09710-180"
    },
    {
        "nome": "NATURAL MAIS COM. DE PRODUTOS NATURAIS LTDA. - São Paulo",
        "latitude": -23.5291457375481,
        "longitude": -46.63608976256541,
        "end": "3 RIOS, 208 - BOM RETIRO, São Paulo - SP, 01123-000"
    },
    {
        "nome": "Fazenda Paulista Grãos & Cereais - São Paulo",
        "latitude": -23.567060816950217,
        "longitude": -46.64852662023759,
        "end": "BRG LUIS ANTONIO, 2209 - BELA VISTA, São Paulo - SP, 01317-002"
    },
    {
        "nome": "EMPORIO NATU - Caraguatatuba",
        "latitude": -23.620972061335568,
        "longitude": -45.41102474907368,
        "end": "Sebastião Mariano Nepomuceno, 299 - Centro, Caraguatatuba - SP, 11660-130"
    },
    {
        "nome": "NOVA TERRA COMERCIO DE PRODUTOS NATURAIS EIRELLI - São Paulo",
        "latitude": -23.584444214069116,
        "longitude": -46.64198444722104,
        "end": "Humberto I, 521 - Vila Mariana, São Paulo - SP, 04018-031"
    },
    {
        "nome": "Leve Granel Produtos Naturais - Campinas",
        "latitude": -22.97894635323247,
        "longitude": -47.147600006745854,
        "end": "ARYMANA, 1395 - Parque Dom Pedro II, Campinas - SP, 13056-440"
    },
    {
        "nome": "ROSANA DOCES - São Paulo",
        "latitude": -23.614790361842534,
        "longitude": -46.62805292209023,
        "end": "Professor Abraão de Morais, 1500 - Saúde, São Paulo - SP, 04123-011"
    },
    {
        "nome": "DUDU EMPORIO - São Paulo",
        "latitude": -23.53518754567885,
        "longitude": -46.454990622090214,
        "end": "Doutor Aureliano Barreiros, 40 - Itaquera, São Paulo - SP, 08210-450"
    },
    {
        "nome": "DOCES GRETA - São Paulo",
        "latitude": -23.604405063621638,
        "longitude": -46.614909164418044,
        "end": "Paulo de Anhaia, 34 - Vila Brasílio Machado, São Paulo - SP, 04289-170"
    },
    {
        "nome": "SABOR & SAUDE - Londrina",
        "latitude": -23.334620128100006,
        "longitude": -51.16917837790978,
        "end": "LA PAZ, 460 - PARQUE GUANABARA, Londrina - PR, 86050-140"
    },
    {
        "nome": "EMPORIO NORDESTINO DO COSTA - Arujá",
        "latitude": 0.0,
        "longitude": 0.0,
        "end": "ANTONIO AFONSO DE LIMA, 422 - CENTRO, Arujá - SP, 07400-560"
    },
    {
        "nome": "LUIS ROBERTO COMERCIO DE LATICINIOS LTDA (FURACÃO) - São Paulo",
        "latitude": -23.524868023560863,
        "longitude": -46.627661493254124,
        "end": "PEDRO VICENTE, 137, 181 - LUZ, São Paulo - SP, 01109-010"
    },
    {
        "nome": "NUTRIBEM - Pinheiros",
        "latitude": -23.39432859058787,
        "longitude": -46.677737129519244,
        "end": "BAIANA, 101 - CENTRO, Pinheiros - ES, 29980-000"
    },
    {
        "nome": "DAMASCO - Santo André",
        "latitude": -23.65780972106839,
        "longitude": -46.52794552023759,
        "end": "Dona Elisa Fláquer, 279 - Centro, Santo André - SP, 09020-160"
    },
    {
        "nome": "TERRA CEREALISTA - São Paulo",
        "latitude": -23.476376707355197,
        "longitude": -46.6459327202376,
        "end": "Adolfo Coelho, 1007 - Lauzane Paulista, São Paulo - SP, 02443-000"
    },
    {
        "nome": "FOLHA DE LOURO - Santo André",
        "latitude": -23.654926333561516,
        "longitude": -46.528068220237586,
        "end": "Campos Sales, 43 - Centro, Santo André - SP, 09015-200"
    },
    {
        "nome": "Jaba Brasil - São Paulo",
        "latitude": -23.494717576332246,
        "longitude": -46.43644837790978,
        "end": "MAL TITO, 965 - S MIGUEL PAULISTA, São Paulo - SP, 08010-090"
    },
    {
        "nome": "FABIO HENRIQUE SOARES - São Bernardo do Campo",
        "latitude": -23.65648310932849,
        "longitude": -46.60318317790975,
        "end": "EUGENIA S VITALE, 161 - TABOAO, São Bernardo do Campo - SP, 09665-900"
    },
    {
        "nome": "ATACADAO DO NATURAL - São Paulo",
        "latitude": -23.543290877903452,
        "longitude": -46.62651706441804,
        "end": "MERCURIO, 140 - Brás, São Paulo - SP, 03007-000"
    },
    {
        "nome": "TERRA & SOL - São José",
        "latitude": -27.54232501570769,
        "longitude": -48.622584222090225,
        "end": "MARIA OLIVEIRA, 80 - SERRARIA, São José - SC, 88115-163"
    },
    {
        "nome": "EMPORIO BEM ESTAR BRASIL - Caraguatatuba",
        "latitude": -23.620684610947357,
        "longitude": -45.409246449073684,
        "end": "R MAJOR AYRES, 164 - CENTRO, Caraguatatuba - SP, 11660-220"
    },
    {
        "nome": "MARLEY SAMPAIO SILVA (NATURAL BRASIL) - São Paulo",
        "latitude": -23.478821986038575,
        "longitude": -46.58370912209023,
        "end": "AV JULIO BUONO, 2790 - VILA CONSTANCA, São Paulo - SP, 02201-003"
    },
    {
        "nome": "Maxxi Produtos Naturais e Organicos - São Paulo",
        "latitude": -23.539584519461265,
        "longitude": -46.650584879762405,
        "end": "DONA VERIDIANA, 36 - HIGIENOPOLIS, São Paulo - SP, 01238-010"
    },
    {
        "nome": "MIL FOLHAS ERVAS NATURAIS LTDA SANTO ANDRE LJ 03 - Santo André",
        "latitude": -23.65791432126489,
        "longitude": -46.52835053558195,
        "end": "DONA ELISA FLAQUER, 228 - CENTRO, Santo André - SP, 09020-160"
    },
    {
        "nome": "REI DOS PERTENCES COMERCIO DE FRIOS LTDA - Osasco",
        "latitude": -23.530064561388116,
        "longitude": -46.775490864418046,
        "end": "R PRIMITIVA VIANCO, 249 - CENTRO, Osasco - SP, 06010-000"
    },
    {
        "nome": "EMPORIO CRAVO & CANELA - São Caetano do Sul",
        "latitude": -23.61423181760548,
        "longitude": -46.572176764418046,
        "end": "R MANOEL COELHO, 571 - CENTRO, São Caetano do Sul - SP, 09510-111"
    },
    {
        "nome": "Emporio Nordestino do Costa (ou Empório do Costa) - Arujá",
        "latitude": -23.395930852232638,
        "longitude": -46.32156443558197,
        "end": "ANTONIO AFONSO DE LIMA, 641 - CENTRO, Arujá - SP, 07400-560"
    },
    {
        "nome": "REI DOS CEREAIS LTDA - São Paulo",
        "latitude": -23.59474405348221,
        "longitude": -46.67696687790977,
        "end": "CLODOMIRO AMAZONAS, 1210 - VILA NOVA CONCEICAO, São Paulo - SP, 04537-002"
    },
    {
        "nome": "Mundo Mais Natural Produtos Naturais - São Paulo",
        "latitude": -23.538836217782404,
        "longitude": -46.60846385092631,
        "end": "CELSO GARCIA, 409 - BRAS, São Paulo - SP, 03015-000"
    },
    {
        "nome": "SR. GRAOS - EIRELI - Mogi das Cruzes",
        "latitude": -23.5339755711788,
        "longitude": -46.199125435581955,
        "end": "AV HENRIQUE EROLES, 556 - ALTO IPIRANGA, Mogi das Cruzes - SP, 08730-590"
    },
    {
        "nome": "Mil Folhas Premium - Santo André",
        "latitude": -23.664931134447897,
        "longitude": -46.533937191401506,
        "end": "AV PORTUGAL, 1050 - CENTRO, Santo André - SP, 09040-001"
    },
    {
        "nome": "PETILA APARECIDA SILVA BASTOS (SAUDE IDEAL) - Guarulhos",
        "latitude": -23.462807197923038,
        "longitude": -46.532070406745845,
        "end": "Esperança, 282 - Centro, Guarulhos - SP, 07095-005"
    },
    {
        "nome": "EMPORIO VITA NATURALIS PRODUTOS NAT E INTEGRAIS LTDA - São Caetano do Sul",
        "latitude": -23.629818639266606,
        "longitude": -46.566698035581936,
        "end": "VISCONDE DE INHAUMA, 126 - OSVALDO CRUZ, São Caetano do Sul - SP, 09571-000"
    },
    {
        "nome": "MAICON FERNANDO LEMOS VENTURA PRODUTOS NATURAIS - São Paulo",
        "latitude": -23.54173110351862,
        "longitude": -46.575079593254124,
        "end": "TUIUTI, 1877 - TATUAPE, São Paulo - SP, 03307-005"
    },
    {
        "nome": "Via Natura - Suzano",
        "latitude": -23.53967823568425,
        "longitude": -46.310232833729316,
        "end": "R GENERAL FRANCISCO GLICERIO, 620 - CENTRO, Suzano - SP, 08674-000"
    },
    {
        "nome": "Via Naturale Produtos Naturais - Itaquaquecetuba",
        "latitude": 0.0,
        "longitude": 0.0,
        "end": "R BENEDITO FERNANDES CRUZ, 10 - CENTRO, Itaquaquecetuba - SP, 08570-004"
    },
    {
        "nome": "Maxxi Naturais & Cia - São Paulo",
        "latitude": -23.56318757790039,
        "longitude": -46.62009583558195,
        "end": "CLIMACO BARBOSA, 30 - CAMBUCI, São Paulo - SP, 01523-000"
    },
    {
        "nome": "MIL FOLHAS LABS COMERCIO DE PRODUTOS NATURAIS LJ10 - Guarulhos",
        "latitude": -23.469452103579254,
        "longitude": -46.527915762565414,
        "end": "Dom Pedro II, 267 - Centro, Guarulhos - SP, 07010-003"
    },
    {
        "nome": "BOA ESPERANCA - São Paulo",
        "latitude": -23.597075738823893,
        "longitude": -46.453424735581955,
        "end": "ANTONIO ASSUNCAO FERREIRA, 145 - PRQ BOA ESPERANCA, São Paulo - SP, 08341-360"
    }
    
];
