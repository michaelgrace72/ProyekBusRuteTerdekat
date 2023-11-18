function redirectToResultPage(event) {
    event.preventDefault();
    // Retrieve the values from the input fields
    var startHalte = document.getElementById("email").value;
    var endHalte = document.getElementById("password").value;

    if (!startHalte || !endHalte) {
        return;
    }

	const coordinates = {
		'KENPARK': (-7.252142512750137, 112.79309517743755),
		'Superindo': (-7.252132841519823, 112.79192966882685),
		'RSIA 2': (-7.250944353459557, 112.78404985079571),
		'Kalijudan 2': (-7.255726608821219, 112.78241495934768),
		'Mulyorejo 2': (-7.264091965636884, 112.78317636604903),
		'UNAIR 2': (-7.269013995300934, 112.78248495635364),
		'Galaxy 2': (-7.275649123296138, 112.7815753209705),
		'Kertajaya Indah': (-7.28031744003063, 112.78199946307426),
		'ITS': (-7.279522100625141, 112.79004073186363),
		'Manyar Kerta Adi': (-7.280560005159858, 112.78230841637989),
		'RS Haji 2': (-7.282357652128604, 112.78100592475887),
		'Kopertis': (-7.288499130900624, 112.78080890409694),
		'Universitas Kristen': (-7.291555499903702, 112.78082472169493),
		'Semolowaru 2': (-7.30170625215685, 112.78181343227203),
		'Semampir': (-7.307687396953636, 112.7806365087045),
		'STIKOM': (-7.311995499929741, 112.78081493243076),
		'Pandugo 2': (-7.3217131638510144, 112.78118060281263),
		'Penjaringan Asri': (-7.327533489598181, 112.78159833248188),
		'Rungkut Madya 2': (-7.330309889807667, 112.781396583324),
		'Gunung Anyar Lor 2': (-7.334424433169985, 112.78172442566911),
		'Gunung Anyar Timur 2': (-7.339476890278313, 112.78483892854986),
		'Gunung Anyar Timur 1': (-7.339714504418418, 112.7844858675236),
		'Gunung Anyar Lor 1': (-7.334036742243966, 112.78130831795058),
		'Rungkut Madya 1': (-7.3310477591099135, 112.7809552569243),
		'Pandugo 1': (-7.321529163836458, 112.78090765570087),
		'Sentra UKM MERR': (-7.308272740336138, 112.78032189098712),
		'Semolowaru 1': (-7.300550135454408, 112.78160569191775),
		'ITATS': (-7.2914087230380655, 112.78050250175609),
		'MERR SMP 19': (-7.2886295027108305, 112.78054068082405),
		'RS Haji 1': (-7.284239695090772, 112.78074176584376),
		'Koni MERR': (-7.279642555514309, 112.78075221178834),
		'Galaxy 1': (-7.276216655399377, 112.78107827389071),
		'UNAIR 1': (-7.269118093219415, 112.7821994373319),
		'Kalijudan 1': (-7.25449672368238, 112.78240266034511),
		'RSIA 1': (-7.251104992478879, 112.78368458551469),
		'Kenjeran': (-7.250494216422868, 112.78735526478091),
		'Kejawan Putih Tambak': (-7.276404702853728, 112.80224777760291),
		'PENS1': (-7.275757768830899, 112.7933853186692),
		'Klampis': (-7.280673788384274, 112.77574611106995),
		'Gramedia': (-7.2797059310051555, 112.76356955198271),
		'Kertajaya': (-7.279061037412821, 112.75939621193987),
		'Gubeng Airlangga': (-7.273446574461628, 112.75622057612583),
		'Lapangan Hoki': (-7.2675163370157785, 112.75645003261043),
		'SMAN 4': (-7.265462506130688, 112.75548121387321),
		'Pemuda': (-7.265271974654745, 112.74766577880054),
		'Panglima Sudirman': (-7.266322142632284, 112.74506403139007),
		'Sono Kembang': (-7.269600510983121, 112.74384128827856),
		'Urip Sumaharjo 2': (-7.274065698143379, 112.74214400989585),
		'Pandegiling 2': (-7.278115146075594, 112.74128066727616),
		'Santa Maria': (-7.283557741475701, 112.7403070443513),
		'Darmo': (-7.28919505303565, 112.73923865616128),
		'Kutai 1': (-7.291256015539563, 112.7346285414622),
		'KPU': (-7.292639084373062, 112.72882094568517),
		'Mayjend Sungkono': (-7.292025470275527, 112.72098893826555),
		'Darmo Park 2': (-7.291668976384293, 112.71744962441622),
		'Makam Pahlawan 1': (-7.289766379220189, 112.7111249564253),
		'Putat Gede': (-7.286019285400918, 112.69886627293975),
		'Patung Kuda 1': (-7.283016162751322, 112.68627944122983),
		'Jono Soewojo 2': (-7.284856788676262, 112.68141190792375),
		'PTC B': (-7.288824943048162, 112.67761174467125),
		'Bundaran UNESA': (-7.298160879160954, 112.67571231361508),
		'SMPN 28 A': (-7.307005319026293, 112.66585390574343),
		'SMPN 28 B': (-7.306866976828216, 112.66573052413924),
		'Villa Bukit Mas': (-7.308277939371988, 112.67174292326477),
		'UNESA': (-7.298248047435846, 112.67536390537656),
		'PTC A': (-7.288296798711856, 112.67722910937185),
		'Jono Soewojo 1': (-7.2844643947173795, 112.68138467326901),
		'Patung Kuda 2': (-7.281857955196695, 112.68533586500293),
		'Makam Pahlawan 2': (-7.288525003281263, 112.70832642212955),
		'Darmo Park 1': (-7.29137581764286, 112.71753177613958),
		'Gedung Juang 45': (-7.291789178161281, 112.72124220408485),
		'Indragiri': (-7.29242700380502, 112.72911070466972),
		'Kutai 2': (-7.2911272379054735, 112.73449642112024),
		'RS Darmo': (-7.286974006555554, 112.7393905404291),
		'Pandegiling 1': (-7.277861967049884, 112.74107531065229),
		'Urip Sumaharjo 1': (-7.274004499446216, 112.74193150540157),
		'Basuki Rahmat': (-7.271790824154194, 112.74156693220544),
		'Kaliasin': (-7.264788086257948, 112.74093721484648),
		'Simpang Dukuh': (-7.262903136548448, 112.74184864768421),
		'Gubernur Suryo': (-7.263719583745742, 112.74403608706425),
		'Balai Kota': (-7.260951176778742, 112.74790351365652),
		'Moestopo': (-7.264391687689435, 112.75411092287389),
		'RSUD dr. Soetomo': (-7.269276148088171, 112.75656087271979),
		'UNAIR': (-7.27366051103262, 112.75643583395687),
		'Samsat Manyar': (-7.279447841635969, 112.76398848885918),
		'Koni': (-7.280375015039837, 112.77690688676991),
		'PENS2': (-7.275601771163525, 112.79317590702696),
		'Terminal Purabaya': (-7.351108402153054, 112.72455506909716),
		'Dukuh Menanggal': (-7.343401448621502, 112.72891894210301),
		'Siwalankerto 1': (-7.336679463829906, 112.72903309534225),
		'Taman Pelangi': (-7.329278014493352, 112.73085206136514),
		'RS Bhayangkara': (-7.3247830154138684, 112.7317937313321),
		'UBHARA': (-7.321449962324114, 112.73256732093087),
		'PUSVETMA': (-7.315929761583499, 112.73368451089186),
		'Ketintang': (-7.309981095468552, 112.73492800900374),
		'Joyoboyo': (-7.299025509350174, 112.73740099026004),
		'Museum BI': (-7.294336653698143, 112.73900858473966),
		'RS Darmo': (-7.286974893138722, 112.73936527186352),
		'Embong Malang': (-7.260439268358867, 112.7374946920152),
		'Blauran': (-7.25518210810278, 112.734058376173),
		'Pirngadi': (-7.252576944744878, 112.73494952284378),
		'Pasar Turi': (-7.246181794940262, 112.73699106130418),
		'Masjid Kemayoran': (-7.243481154080413, 112.73519592559454),
		'Indrapura': (-7.24083936705333, 112.73212490815415),
		'Jembatan Merah': (-7.235662494898486, 112.73555371685124),
		'Veteran': (-7.240711279272516, 112.73776364056654),
		'Tugu Pahlawan': (-7.244053256164702, 112.73846101494873),
		'Alun Alun Contong': (-7.251854938267725, 112.73681185814549),
		'Siola': (-7.257250708070092, 112.73781461699086),
		'Tunjungan': (-7.2597852894216945, 112.73924619264668),
		'Joyoboyo 2': (-7.298889846884299, 112.73780531104308),
		'RSAL': (-7.308180770959224, 112.73608763000452),
		'Wonocolo': (-7.318011207911818, 112.73397247122944),
		'UIN': (-7.321786570221589, 112.73313582298526),
		'Jemur Ngawinan': (-7.328681939986757, 112.73171672506375),
		'Siwalankerto 2': (-7.336922545896506, 112.72961081430302),
		'Kerto Menanggal': (-7.34039031929524, 112.72942695636176)
	};

	const graph = {
		'R1': {
			'KENPARK': {'Superindo': 500},    
			'Superindo': {'RSIA 2': 1000, 'Kenjeran': 50},
			'RSIA 2': {'Kalijudan 2': 1600, 'RSIA 1': 50},
			'Kalijudan 2': {'Mulyorejo 2': 950, 'Kalijudan 1': 50},
			'Mulyorejo 2': {'UNAIR 2': 550},
			'UNAIR 2': {'Galaxy 2': 750, 'UNAIR 1': 50},
			'Galaxy 2': {'Kertajaya Indah': 650, 'Galaxy 1': 50},
			'Kertajaya Indah': {'ITS': 850},
			'ITS': {'Manyar Kerta Adi': 850},
			'Manyar Kerta Adi': {'RS Haji 2': 350, 'Koni MERR': 650},
			'RS Haji 2': {'Kopertis': 700, 'RS Haji 1': 50},
			'Kopertis': {'Universitas Kristen': 350, 'MERR SMP 19': 50},
			'Universitas Kristen': {'Semolowaru 2': 1200, 'ITATS': 50},
			'Semolowaru 2': {'Semampir': 700, 'Semolowaru 1': 50},
			'Semampir': {'STIKOM': 500, 'Sentra UKM MERR': 50},
			'STIKOM': {'Pandugo 2': 1100},
			'Pandugo 2': {'Penjaringan Asri': 650, 'Pandugo 1': 50}, 
			'Penjaringan Asri': {'Rungkut Madya 2': 300},
			'Rungkut Madya 2': {'Gunung Anyar Lor 2': 450, 'Rungkut Madya 1': 50},
			'Gunung Anyar Lor 2': {'Gunung Anyar Timur 2': 650, 'Gunung Anyar Lor 1': 50},
			'Gunung Anyar Timur 2': {'Gunung Anyar Lor 2': 650, 'Gunung Anyar Timur 1': 50},

			'Gunung Anyar Timur 1': {'Gunung Anyar Lor 1': 750, 'Gunung Anyar Timur 2': 50 },
			'Gunung Anyar Lor 1': {'Rungkut Madya 1': 350, 'Gunung Anyar Lor 1': 50 },
			'Rungkut Madya 1': {'Pandugo 1': 1100, 'Rungkut Madya 2': 50},
			'Pandugo 1': {'Sentra UKM MERR': 1600, 'Pandugo 2': 50},
			'Sentra UKM MERR': {'Semolowaru 1': 800, 'Semampir': 50},
			'Semolowaru 1': {'ITATS': 1000, 'Semolowaru 2': 50},
			'ITATS': {'MERR SMP 19': 300, 'Universitas Kristen': 50},
			'MERR SMP 19': {'RS Haji 1': 600, 'Kopertis': 50},
			'RS Haji 1': {'Kertajaya Indah': 700, 'RS Haji 2': 50},
			// #Kertajaya Indah
			// #ITS
			// #Manyar Kerta Adi
			'Koni MERR': {'Galaxy 1': 400},
			'Galaxy 1': {'UNAIR 1': 800, 'Galaxy 2': 50},
			'UNAIR 1': {'Kalijudan 1': 1600, 'UNAIR 2': 50},
			'Kalijudan 1': {'RSIA 1': 400, 'Kalijudan 2': 50},
			'RSIA 1': {'Kenjeran': 1600, 'RSIA 2': 50},
			'Kenjeran': {'KENPARK': 450},
			// #KENPARK
		},

		'R2': {
			'Kejawan Putih Tambak': {'PENS1': 1200},
			'PENS1': {'ITS': 800, 'PENS2': 50},
			'ITS': {'Manyar Kerta Adi': 850},
			'Manyar Kerta Adi': {'Klampis': 700},
			'Klampis': {'Gramedia': 1300, 'Koni': 50},
			'Gramedia': {'Kertajaya': 450, 'Samsat Manyar': 50},
			'Kertajaya': {'Gubeng Airlangga': 1000},
			'Gubeng Airlangga': {'Lapangan Hoki': 1300, 'UNAIR': 50},
			'Lapangan Hoki': {'SMAN 4': 300, 'RSUD dr. Soetomo': 50},
			'SMAN 4': {'Pemuda': 1100, 'Moestopo': 50},
			'Pemuda': {'Panglima Sudirman': 450},
			'Panglima Sudirman': {'Sono Kembang': 400},
			'Sono Kembang': {'Urip Sumaharjo 2': 550},
			'Urip Sumaharjo 2': {'Pandegiling 2': 500, 'Urip Sumaharjo 1': 50},
			'Pandegiling 2': {'Santa Maria': 650, 'Pandegiling 1': 50},
			'Santa Maria': {'Darmo': 650},
			'Darmo': {'Kutai 1': 600, 'RS Darmo': 50},
			'Kutai 1': {'KPU': 850, 'Kutai 2': 50},
			'KPU': {'Mayjend Sungkono': 850, 'Indragiri': 100},
			'Mayjend Sungkono': {'Darmo Park 2': 400, 'Gedung Juang 45': 50},
			'Darmo Park 2': {'Makam Pahlawan 1': 1100, 'Darmo Park 1': 50},
			'Makam Pahlawan 1': {'Putat Gede': 1100, 'Makam Pahlawan 2': 50},
			'Putat Gede': {'Patung Kuda 1': 1400},
			'Patung Kuda 1': {'Jono Soewojo 2': 700, 'Patung Kuda 2': 50},
			'Jono Soewojo 2': {'PTC B': 600, 'Jono Soewojo 1': 50},
			'PTC B': {'Bundaran UNESA': 1100, 'PTC A': 50},
			'Bundaran UNESA': {'SMPN 28 A': 2200, 'UNESA': 50},
			'SMPN 28 A': {'SMPN 28 B': 50},
			
			
			'SMPN 28 B': {'Villa Bukit Mas': 650, 'SMPN 28 A': 50},
			'Villa Bukit Mas': {'UNESA': 1500},
			'UNESA': {'PTC A': 1000, 'Bundaran UNESA': 50},
			'PTC A': {'Jono Soewojo 1': 700, 'PTC B': 50 },
			'Jono Soewojo 1': {'Patung Kuda 2': 650, 'Jono Soewojo 2': 50},
			'Patung Kuda 2': {'Makam Pahlawan 2': 2700, 'Patung Kuda 1': 50 },
			'Makam Pahlawan 2': {'Darmo Park 1': 1100, 'Makam Pahlawan 1': 50},
			'Darmo Park 1': {'Gedung Juang 45': 400, 'Darmo Park 2': 50},
			'Gedung Juang 45': {'Indragiri': 850, 'Mayjend Sungkono': 50},
			'Indragiri': {'Kutai 2': 850, 'KPU': 50},
			'Kutai 2': {'RS Darmo': 400, 'Kutai 1': 50},
			'RS Darmo': {'Pandegiling 1': 1100, 'Darmo': 50},
			'Pandegiling 1': {'Urip Sumaharjo 1': 450},
			'Urip Sumaharjo 1': {'Urip Sumaharjo 2': 50},
			'Basuki Rahmat': {'Kaliasin': 800},
			'Kaliasin': {'Simpang Dukuh': 450},
			'Simpang Dukuh': {'Gubernur Suryo': 300},
			'Gubernur Suryo': {'Balai Kota': 800},
			'Balai Kota': {'Moestopo': 850},
			'Moestopo': {'RSUD dr. Soetomo': 850},
			'RSUD dr. Soetomo': {'UNAIR': 500},
			'UNAIR': {'Samsat Manyar': 1400, 'Gubeng Airlangga': 50},
			'Samsat Manyar': {'Koni': 1300, 'Gramedia': 50},
			'Koni': {'Kertajaya Indah': 550, 'Klampis': 50},
			'Kertajaya Indah': {'PENS2': 1600},
			'PENS2': {'Kejawan Putih Tambak': 1200},
		},

		'R3': {
			'Terminal Purabaya': {'Dukuh Menanggal': 1500},
			'Dukuh Menanggal': {'Siwalankerto 1': 800, 'Kerto Menanggal': 50},
			'Siwalankerto 1': {'Taman Pelangi': 850, 'Siwalankerto 2': 50},
			'Taman Pelangi': {'RS Bhayangkara': 550, 'Jemur Ngawinan': 50},
			'RS Bhayangkara': {'UBHARA': 500},
			'UBHARA': {'PUSVETMA': 650, 'UIN': 50},
			'PUSVETMA': {'Ketintang': 1000, 'Wonocolo': 50},
			'Ketintang': {'Joyoboyo': 1500, 'RSAL': 50},
			'Joyoboyo': {'Museum BI': 600, 'Joyoboyo 2': 50},
			'Museum BI': {'RS Darmo': 800},
			'RS Darmo': {'Pandegiling 1': 1100},
			'Pandegiling 1': {'Urip Sumaharjo 1': 450},
			'Urip Sumaharjo 1': {'Basuki Rahmat': 260},
			'Basuki Rahmat': {'Kaliasin': 800},
			'Kaliasin': {'Embong Malang': 800},
			'Embong Malang': {'Blauran': 900},
			'Blauran': {'Pirngadi': 350},
			'Pirngadi': {'Pasar Turi': 850},
			'Pasar Turi': {'Masjid Kemayoran': 500},
			'Masjid Kemayoran': {'Indrapura': 500},
			'Indrapura': {'Jembatan Merah': 1300},
			'Jembatan Merah': {'Veteran': 750},
			'Veteran': {'Tugu Pahlawan': 400},
			'Tugu Pahlawan': {'Alun Alun Contong': 600},
			'Alun Alun Contong': {'Siola': 1000},
			'Siola': {'Tunjungan': 300},
			'Tunjungan': {'Simpang Dukuh': 500},
			'Simpang Dukuh': {'Gubernur Suryo': 300},
			'Gubernur Suryo': {'Panglima Sudirman': 700},
			'Panglima Sudirman': {'Sono Kembang': 400},
			'Sono Kembang': {'Urip Sumaharjo 2': 550},
			'Urip Sumaharjo 2': {'Pandegiling 2': 500, 'Urip Sumaharjo 1': 50},
			'Pandegiling 2': {'Santa Maria': 650, 'Pandegiling 1': 50},
			'Santa Maria': {'Darmo': 650},
			'Darmo': {'Joyoboyo 2': 1200, 'RS Darmo': 50},
			'Joyoboyo 2': {'RSAL': 1100, 'Joyoboyo': 50},
			'RSAL': {'Wonocolo': 1100, 'Ketintang': 50},
			'Wonocolo': {'UIN': 450, 'PUSVETMA': 50},
			'UIN': {'Jemur Ngawinan': 800, 'UBHARA': 50},
			'Jemur Ngawinan': {'Siwalankerto 2': 1000, 'Taman Pelangi': 50},
			'Siwalankerto 2': {'Kerto Menanggal': 400, 'Siwalankerto 1': 50},
			'Kerto Menanggal': {'Terminal Purabaya': 1600, 'Dukuh Menanggal': 50}
		},
	};

	const transitDict = {
		'R1_R2': 'ITS',
		'R1_R2': 'Manyar Kerta Adi',
		'R1_R2': 'Kertajaya Indah',
		'R2_R1': 'ITS',
		'R2_R1': 'Manyar Kerta Adi',
		'R2_R1': 'Kertajaya Indah',

		'R3_R2': 'Panglima Sudirman',
		'R3_R2': 'Sono Kembang',
		'R3_R2': 'Urip Sumaharjo 2',
		'R3_R2': 'Pandegiling 2',
		'R3_R2': 'Santa Maria',
		'R3_R2': 'Pandegiling 2',
		'R3_R2': 'Darmo',
		'R2_R3': 'Panglima Sudirman',
		'R2_R3': 'Sono Kembang',
		'R2_R3': 'Urip Sumaharjo 2',
		'R2_R3': 'Pandegiling 2',
		'R2_R3': 'Santa Maria',
		'R2_R3': 'Pandegiling 2',
		'R2_R3': 'Darmo',

		'R3_R2': 'RS Darmo',
		'R3_R2': 'Pandegiling 1',
		'R3_R2': 'Basuki Rahmat',
		'R3_R2': 'Kaliasin',
		'R3_R2': 'Simpang Dukuh',
		'R3_R2': 'Gubernur Suryo'
	};

	function heuristic(node, goal) {
		return geolib.getDistance(coordinates[node], coordinates[goal]);
	}
	
	function calculateAllHeuristics(goal) {
		const allHeuristics = {};
		for (const node in coordinates) {
			allHeuristics[node] = heuristic(node, goal);
		}
		return allHeuristics;
	}

	
	function astar(graph, start, goal, allHeuristics) {
		const openSet = [{ score: allHeuristics[start], node: start }];
		const cameFrom = {};
		const gScore = { [start]: 0 };
		
		while (openSet.length > 0) {
			openSet.sort((a, b) => a.score - b.score);
			const { node: currentNode } = openSet.shift();

			if (currentNode === goal) {
				const path = reconstructPath(cameFrom, goal);
				return path;
			}

			for (const [neighbor, distance] of Object.entries(graph[currentNode])) {
				const tentativeGScore = gScore[currentNode] + distance;
				if (!(neighbor in gScore) || tentativeGScore < gScore[neighbor]) {
					gScore[neighbor] = tentativeGScore;
					const fScore = tentativeGScore + allHeuristics[neighbor];
					openSet.push({ score: fScore, node: neighbor });
					cameFrom[neighbor] = currentNode;
				}
			}
		}

		return null;
	}

	function reconstructPath(cameFrom, goal) {
		const path = [goal];
		while (goal in cameFrom) {
			goal = cameFrom[goal];
			path.push(goal);
		}
		return path.reverse();
	}

	function findRoute(startRute, endRute, startHalte, endHalte) {
		let currentRute = startRute;
		let currentHalte = startHalte;

		var goalRute = endRute;
		var goalHalte = endHalte;
		var allHeuristics = calculateAllHeuristics(goalHalte);
		
		var resultPaths = [];
	
		function appendPath(routeNumber, path) {
			resultPaths.push([routeNumber, ...path]);
		}
	
		if (startRute === goalRute) {
			var pathToGoal = astar(graph[currentRute], startHalte, endHalte, allHeuristics);
			if (pathToGoal) {
				appendPath(currentRute, pathToGoal);
			}
		} else {
			var transitKey = [currentRute, goalRute].toString();
			if (transitKey in transitDict) {
				var transitHalte = transitDict[transitKey];
	
				var pathToTransit = astar(graph[startRute], startHalte, transitHalte, allHeuristics);
				if (pathToTransit) {
					appendPath(currentRute, pathToTransit);
				}
	
				currentRute = goalRute;
				currentHalte = transitHalte;
	
				var pathToGoal = astar(graph[currentRute], transitHalte, goalHalte, allHeuristics);
				if (pathToGoal) {
					appendPath(currentRute, pathToGoal);
				}
			} else {
				if (currentRute === "R1") {
					var transit1 = 'Manyar Kerta Adi';
					var nextRute = "R2";
					allHeuristics = calculateAllHeuristics(transit1);
					var pathToTransit = astar(graph[startRute], startHalte, transit1, allHeuristics);
					if (pathToTransit) {
						appendPath(currentRute, pathToTransit);
					}
	
					currentRute = nextRute;
					startHalte = transit1;
					resultPaths.push(...findRoute(currentRute, endRute, startHalte, endHalte));
				}
	
				if (currentRute === "R3") {
					var transit2 = 'Kaliasin';
					var nextRute = "R2";
					allHeuristics = calculateAllHeuristics(transit2);
					var pathToTransit = astar(graph[startRute], startHalte, transit2, allHeuristics);
					if (pathToTransit) {
						appendPath(currentRute, pathToTransit);
					}
	
					currentRute = nextRute;
					startHalte = transit2;
					resultPaths.push(...findRoute(currentRute, endRute, startHalte, endHalte));
				}
			}
		}
		
		return resultPaths;
	}
	
	var startRute = null;
var endRute = null;

for (const [rute, haltesObj] of Object.entries(graph)) {
    let haltes = Object.keys(haltesObj);

    if (haltes.includes(startHalte)) {
        startRute = rute;
    }
    if (haltes.includes(endHalte)) {
        endRute = rute;
	}
}

	
	// Additional route assignment logic
	if (endRute === 'R1' && (startHalte === 'Kertajaya Indah' || startHalte === "ITS" || startHalte === "Manyar Kerta Adi")) {
		startRute = "R1";
	}
	
	if ((startRute === 'R1' && endRute === 'R3') || (startRute === 'R2' && endRute === 'R3')) {
		const validEndHaltes = ['Panglima Sudirman', 'Sono Kembang', 'Urip Sumaharjo 2', 'Pandegiling 2', 'Santa Maria'];
		if (validEndHaltes.includes(endHalte)) {
			endRute = "R2";
		}
	}
	var shortestPath = findRoute(startRute, endRute, startHalte, endHalte);
	
	let outputArray = [];

	shortestPath.forEach(([routeNumber, ...path]) => {
		outputArray.push(routeNumber, ...path);
	});

	console.log(outputArray);


	localStorage.setItem('startHalte', startHalte);
	localStorage.setItem('endHalte', endHalte);


    // Convert the array of shortestPath to a string
    var shortestPathString = outputArray.join('->');
	localStorage.setItem('shortestPathString', shortestPathString);
	localStorage.setItem('goal', endHalte);
    // Construct the URL for the result page with query parameters

    // Redirect the user to the result page
    window.location.href = "result.html";
}




let locations = ["Purabaya", "Dukuh Menanggal", "Siwalankerto", "Taman Pelagi", "RS Bhayangkara", "UBHARA", "PUSVETMA", "Wonokromo",
	"Joyoboyo", "Museum	 BI", "Rumah Sakit Darmo", "Pandegiling", "Basra", "Kaliasin", "Embong Malang", "Blauran", "Pringadi", "Pasar Turi",
	"Masjid Kemayoran", "Indrapura", "Rajawali", "Jembatan Merah", "Veteran", "Tugu Pahlawan", "Alun Alun Contong", "Siola", "Tunjungan",
	"Simpang Dukuh", "Gubernur Suryo", "Pangsud", "Sono Kembang", "Urip Sumoharjo", "Santa Maria", "RSAL", "Margorejo", "UIN",
	"Jemur Ngawinan", "Kerto Menanggal", "Terminal Purabaya", "Ketintang", "Mayjen Yono Suwoyo", "Ir Muhammad", "Mayjen Sungkono",
	"Adityawarman", "Kutai", "Bengawan", "Raya Darmo", "Urip Sumohario", "Embong Malang", "Praban", "Tunjungan", "Gubenur Suryo",
	"Yos Sudarso", "Walikota Mustajab", "Prof Dr Moestopo", "Jalam Dramawangsa", "Kertajaya", "Manyar Kortoarjo", "Kertajaya Indah",
	"Bundaran ITS", "Gubeng Pojok", "Pemuda", "Panglima Sudirman", "HR Muhammad"];
// Sort locations in ascending order
let sortedLocations = locations.sort();

// Reference the input fields with ids "email" and "password"
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

// Execute function on keyup for the email input
emailInput.addEventListener("input", () => {
	handleAutocomplete(emailInput);
});

// Execute function on keyup for the password input
passwordInput.addEventListener("input", () => {
	handleAutocomplete(passwordInput);
});

function handleAutocomplete(input) {
	// Create or get the autocomplete list for the specific input field
	let list = getOrCreateAutocompleteList(input);

	// Clear previous suggestions
	removeElements(list);

	// Loop through the array of locations
	for (let loc of sortedLocations) {
		// Convert input to lowercase and compare with each location
		if (
			loc.toLowerCase().startsWith(input.value.toLowerCase()) &&
			input.value != ""
		) {
			// Create li element
			let listItem = document.createElement("li");
			// One common class name
			listItem.classList.add("list-items");
			listItem.style.cursor = "pointer";
			listItem.setAttribute("onclick", `displayLocation('${loc}', '${input.id}')`);
			// Display matched part in bold
			let word = "<b>" + loc.substr(0, input.value.length) + "</b>";
			word += loc.substr(input.value.length);
			// Display the value in the array
			listItem.innerHTML = word;
			list.appendChild(listItem);
		}
	}
}

function displayLocation(value, inputId) {
	// Display the selected value in the corresponding input field
	document.getElementById(inputId).value = value;

	// Clear the autocomplete list for the specific input field
	let list = getOrCreateAutocompleteList(document.getElementById(inputId));
	removeElements(list);
}

function removeElements(list) {
	// Clear all the items in the specified list
	let items = list.querySelectorAll(".list-items");
	items.forEach((item) => {
		item.remove();
	});
}

function getOrCreateAutocompleteList(input) {
	// Try to find an existing list associated with the input field
	let list = input.nextElementSibling;
	if (!list || !list.classList.contains("list")) {
		// If the list doesn't exist, create a new one
		list = document.createElement("ul");
		list.classList.add("list");
		input.parentNode.insertBefore(list, input.nextSibling);
	}
	return list;
}


'use strict';

$(function () {

	$("input[type='password'][data-eye]").each(function (i) {
		var $this = $(this),
			id = 'eye-password-' + i,
			el = $('#' + id);

		$this.wrap($("<div/>", {
			style: 'position:relative',
			id: id
		}));

		$this.css({
			paddingRight: 60
		});
		$this.after($("<div/>", {
			html: 'Show',
			class: 'btn btn-primary btn-sm',
			id: 'passeye-toggle-' + i,
		}).css({
			position: 'absolute',
			right: 10,
			top: ($this.outerHeight() / 2) - 12,
			padding: '2px 7px',
			fontSize: 12,
			cursor: 'pointer',
		}));

		$this.after($("<input/>", {
			type: 'hidden',
			id: 'passeye-' + i
		}));

		var invalid_feedback = $this.parent().parent().find('.invalid-feedback');

		if (invalid_feedback.length) {
			$this.after(invalid_feedback.clone());
		}

		$this.on("keyup paste", function () {
			$("#passeye-" + i).val($(this).val());
		});
		$("#passeye-toggle-" + i).on("click", function () {
			if ($this.hasClass("show")) {
				$this.attr('type', 'password');
				$this.removeClass("show");
				$(this).removeClass("btn-outline-primary");
			} else {
				$this.attr('type', 'text');
				$this.val($("#passeye-" + i).val());
				$this.addClass("show");
				$(this).addClass("btn-outline-primary");
			}
		});
	});

	$(".my-login-validation").submit(function () {
		var form = $(this);
		if (form[0].checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		form.addClass('was-validated');
	});
});
