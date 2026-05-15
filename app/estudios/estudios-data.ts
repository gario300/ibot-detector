export const stats = [
  { value: "562", label: "Cuentas analizadas" },
  { value: "25", label: "Cuentas semilla" },
  { value: "42", label: "Análisis LLM completo" },
  { value: "43.3", label: "Puntaje máximo" },
];

export const patterns = [
  {
    num: 1,
    title: "Bio vacía o sin información verificable",
    desc: "Sin ubicación, sin intereses, sin datos personales. 91 cuentas presentan esta señal.",
  },
  {
    num: 2,
    title: "Monotemáticas — hablan de un solo tema",
    desc: "El 100% de sus tweets giran alrededor de lo mismo. Accidente, política, un artista, un link repetido.",
  },
  {
    num: 3,
    title: "Estructura idéntica entre tweets",
    desc: "Misma longitud, mismo formato, mismas palabras de apertura. El LLM lo detectó como \"estructura perfecta\".",
  },
  {
    num: 4,
    title: "Actividad nocturna concentrada",
    desc: "Más del 35% de sus publicaciones ocurren entre las 2 y las 5 de la madrugada. 61 cuentas lo hacen.",
  },
  {
    num: 5,
    title: "Publicación en ráfagas, luego silencio",
    desc: "Varios tweets en minutos y después desaparecen por horas o días. Sin ritmo natural.",
  },
  {
    num: 6,
    title: "Cero interacción humana",
    desc: "Nadie les responde. 0% de conexiones mutuas. Son cuentas aisladas que publican sin recibir respuesta.",
  },
  {
    num: 7,
    title: "Sin errores ortográficos ni gramaticales",
    desc: "Cero faltas en todo el timeline. Una persona siempre se equivoca de vez en cuando.",
  },
];

export const profileSignals = [
  { name: "Bio vacía o casi vacía", count: 91 },
  { name: "Username con dígitos", count: 48 },
  { name: "Display name anómalo", count: 34 },
  { name: "Username con prefijo numérico", count: 28 },
  { name: "Foto de perfil por defecto", count: 13 },
];

export const temporalSignals = [
  { name: "Actividad esporádica", count: 79 },
  { name: "Tweets/día alto", count: 72 },
  { name: "Actividad nocturna (2-5 AM)", count: 61 },
  { name: "Ráfagas de actividad", count: 40 },
  { name: "Distribución horaria plana", count: 18 },
  { name: "Silencios largos", count: 13 },
];

export const contentSignals = [
  { name: "Estructura narrativa repetitiva", note: "42/42" },
  { name: "Sin experiencia personal real", note: "42/42" },
  { name: "Expresión emocional plana", note: "40/42" },
  { name: "Fijación léxica (una palabra predomina)", note: "26/42" },
];

export const networkSignals = [
  { name: "0% conexiones mutuas (aislamiento)", note: "18/42" },
  { name: "Amplificación mutua entre pares", note: "19/42" },
];

export const scoreDistribution = [
  { range: "0 – 9", count: 418, pct: 74 },
  { range: "10 – 19", count: 122, pct: 22 },
  { range: "30 – 39", count: 16, pct: 3 },
  { range: "40 – 44", count: 4, pct: 1 },
];

export const llmMonotopicAccounts = [
  { username: "diariodeac", score: "43.33", topic: "Accidentes automovilísticos", fixation: "100%" },
  { username: "RoxyRubio89", score: "40.88", topic: "Coordinación y campañas", fixation: "100%" },
  { username: "Damaris2036022", score: "40.22", topic: "TikTok / Usuarios", fixation: "90%" },
  { username: "PRISCIL02797675", score: "40.10", topic: "San Juan del Sur", fixation: "100%" },
  { username: "EthanLevins2", score: "39.93", topic: "Relaciones internacionales", fixation: "95%" },
  { username: "BTS_ARMY", score: "39.00", topic: "FIFA 2026 / Educación", fixation: "98%" },
  { username: "Neli1076571", score: "38.84", topic: "Christian Nodal / Conciertos", fixation: "95%" },
  { username: "Sandra28154087", score: "38.66", topic: "Política mexicana", fixation: "90%" },
  { username: "rox031119", score: "38.21", topic: "Ángela Aguilar", fixation: "95%" },
  { username: "spacecxlorena", score: "37.08", topic: "Tecnología / Espacio", fixation: "100%" },
  { username: "MariaMrtx38", score: "36.29", topic: "Entretenimiento", fixation: "90%" },
  { username: "rororo_1980", score: "36.18", topic: "Vida laboral / Diseño", fixation: "95%" },
  { username: "Cuauhtemoc_1521", score: "34.42", topic: "Historia de México", fixation: "90%" },
  { username: "yatoedity", score: "34.05", topic: "Farming de seguidores", fixation: "95%" },
];

export const contentExampleTweets = [
  {
    username: "@diariodeac",
    text: '"Accidente sobre ruedas", "Bombazo", "Fatal", "Brutal", "Impactante"',
    note: "Mismas palabras, misma estructura, sin variación.",
  },
  {
    username: "@PRISCIL02797675",
    text: "repetición de texto idéntico",
    note: "Mismo tweet publicado múltiples veces.",
  },
  {
    username: "@rororo_1980",
    text: '"Staring at eeeach other / With laser beeeams of our gazes"',
    note: "Mismo texto exacto repetido varias veces.",
  },
  {
    username: "@yatoedity",
    text: '"Say Hi", "Let\'s grow big", "Let\'s follow you"',
    note: "Farming de seguidores. Frases en inglés en cuenta hispana. Contenido 98/100.",
  },
  {
    username: "@Cuauhtemoc_1521",
    text: '"Sabías que", "Comparativa de", "Recuerdas la frase"',
    note: "Fórmulas fijas de apertura. Estructura de bot educacional automatizado.",
  },
];

export const behaviorExampleReplies = [
  {
    username: "@BTS_ARMY",
    text: '"¡No podemos esperar!" — misma respuesta en múltiples hilos',
  },
  {
    username: "@Damaris2036022",
    text: '"¡Echa un vistazo a la Story de migente!" — link a TikTok, siempre el mismo formato',
  },
  {
    username: "@yatoedity",
    text: '"Say Hi / Let\'s grow big / Let\'s follow you" — farming automatizado, comportamiento 98/100',
  },
];

export const personaFrequencies = [
  { signal: "Estructura perfecta", freq: "35/42" },
  { signal: "Sin errores ortográficos", freq: "30/42" },
  { signal: "Tweets repetitivos", freq: "19/42" },
  { signal: "Sin intereses humanos reales", freq: "42/42" },
  { signal: "Sin señales de ubicación real", freq: "36/42" },
];

export const hubs = [
  { name: "@Marisol23393000", candidates: 54 },
  { name: "@B_Day85_20_10", candidates: 53 },
  { name: "@edgarpeinado_", candidates: 45, maxScore: "34.56" },
  { name: "@DNXAldo", candidates: 41, maxScore: "40.10" },
  { name: "@Miya1153897", candidates: 41, maxScore: "38.21" },
  { name: "@RoxyRubio89", candidates: 39, maxScore: "40.88" },
  { name: "@ShinyAmber321", candidates: 39, maxScore: "39.00" },
  { name: "@GorditaCat80", candidates: 38, maxScore: "43.33" },
  { name: "@xsam74", candidates: 32 },
  { name: "@coffee86460", candidates: 28 },
  { name: "@cherryklauklau", candidates: 25, maxScore: "39.93" },
  { name: "@LaComentologa", candidates: "~", isNew: true },
  { name: "@unleguleyodijo", candidates: "~", isNew: true },
];

export const aggravationFactors = [
  "Coordinación entre cuentas: múltiples cuentas del mismo cluster comparten patrones de publicación idénticos.",
  "Misma semilla, mismo patrón: las cuentas que cuelgan del mismo hub repiten los mismos genericPatterns.",
  "Amplificación cruzada: cuentas dentro del mismo cluster se retuitean entre sí sin interacción externa.",
  "Cuentas con largos periodos de inactividad: años de antigüedad pero apenas docenas de tweets, como si se activaran para campañas específicas.",
  "Propagación profunda (hop=2): las semillas nuevas confirmaron que los mismos 7 patrones aparecen a 2 grados de separación.",
];

export const sources = [
  { title: "The Rise of Social Bots", author: "Ferrara, Varol, Davis, Menczer, Flammini (2016)", journal: "CACM 59(7):96-104", url: "https://arxiv.org/abs/1407.5225" },
  { title: "Detecting Automation of Twitter Accounts", author: "Chu, Gianvecchio, Wang, Jajodia (2012)", journal: "IEEE TDSC 9(6):811-824", url: "https://doi.org/10.1109/TDSC.2012.75" },
  { title: "RTbust: Temporal Patterns for Botnet Detection", author: "Mazza, Cresci et al. (2019)", journal: "WebSci '19. F1=0.87", url: "https://arxiv.org/abs/1902.04506" },
  { title: "Unpacking the Social Media Bot: A Typology", author: "Gorwa, Guilbeault (2018)", journal: "Policy & Internet", url: "https://arxiv.org/abs/1801.06863" },
  { title: "Spread of Low-Credibility Content by Social Bots", author: "Shao, Ciampaglia et al. (2018)", journal: "Nature Communications 9:4787", url: "https://arxiv.org/abs/1707.07592" },
  { title: "BotOrNot: A System to Evaluate Social Bots", author: "Davis, Varol, Ferrara et al. (2016)", journal: "WWW Developers Day", url: "https://arxiv.org/abs/1602.00975" },
  { title: "Botometer", author: "OSoMe / Indiana University", journal: "Herramienta pública 1,200+ features", url: "https://botometer.osome.iu.edu/" },
  { title: "Online Human-Bot Interactions", author: "Varol, Ferrara et al. (2017)", journal: "ICWSM. ~15% de Twitter son bots", url: "https://aaai.org/ocs/index.php/ICWSM/ICWSM17/paper/view/15587" },
  { title: "tweetbotornot2", author: "Kearney (2020)", journal: "Clasificador XGBoost", url: "https://github.com/mkearney/tweetbotornot2" },
  { title: "Ephemeral Astroturfing Attacks", author: "Elmas, Overdorf et al. (2021)", journal: "IEEE EuroS&P", url: "https://arxiv.org/abs/1910.07783" },
  { title: "Benford's Law for Bot Detection", author: "Mbona, Eloff (2022)", journal: "Information Sciences 582:369-381", url: "https://doi.org/10.1016/j.ins.2021.09.038" },
  { title: "Social Bot — Wikipedia", author: "Overview general", journal: "Señales clásicas de detección", url: "https://en.wikipedia.org/wiki/Social_bot" },
];

export const top30Accounts = [
  { pos: 1, username: "diariodeac", score: "43.33", seed: "GorditaCat80", hop: 1, depth: "full" },
  { pos: 2, username: "RoxyRubio89", score: "40.88", seed: "RoxyRubio89", hop: 0, depth: "full" },
  { pos: 3, username: "Damaris2036022", score: "40.22", seed: "Marisol23393000", hop: 1, depth: "full" },
  { pos: 4, username: "PRISCIL02797675", score: "40.10", seed: "DNXAldo", hop: 1, depth: "full" },
  { pos: 5, username: "EthanLevins2", score: "39.93", seed: "cherryklauklau", hop: 1, depth: "full" },
  { pos: 6, username: "BTS_ARMY", score: "39.00", seed: "ShinyAmber321", hop: 1, depth: "full" },
  { pos: 7, username: "Neli1076571", score: "38.84", seed: "Marisol23393000", hop: 1, depth: "full" },
  { pos: 8, username: "Sandra28154087", score: "38.66", seed: "Marisol23393000", hop: 1, depth: "full" },
  { pos: 9, username: "rox031119", score: "38.21", seed: "Miya1153897", hop: 1, depth: "full" },
  { pos: 10, username: "spacecxlorena", score: "37.08", seed: "Marisol23393000", hop: 1, depth: "full" },
  { pos: 11, username: "MariaMrtx38", score: "36.29", seed: "Marisol23393000", hop: 1, depth: "full" },
  { pos: 12, username: "rororo_1980", score: "36.18", seed: "Miya1153897", hop: 1, depth: "full" },
  { pos: 13, username: "donko2307", score: "35.87", seed: "DNXAldo", hop: 1, depth: "full" },
  { pos: 14, username: "Samanth05632592", score: "35.64", seed: "Marisol23393000", hop: 1, depth: "full" },
  { pos: 15, username: "CESARZLUA", score: "34.56", seed: "edgarpeinado_", hop: 1, depth: "full" },
  { pos: 16, username: "QuirazcoChentin", score: "34.52", seed: "DNXAldo", hop: 1, depth: "full" },
  { pos: 17, username: "Cuauhtemoc_1521", score: "34.42", seed: "ShinyAmber321", hop: 2, depth: "full" },
  { pos: 18, username: "yatoedity", score: "34.05", seed: "RoxyRubio89", hop: 2, depth: "full" },
  { pos: 19, username: "SeguraAndr21375", score: "22.50", seed: "ShinyAmber321", hop: 2, depth: "quick" },
  { pos: 20, username: "AristeguiOnline", score: "18.50", seed: "xsam74", hop: 1, depth: "quick" },
  { pos: 21, username: "CarlosLoret", score: "18.50", seed: "xsam74", hop: 1, depth: "quick" },
  { pos: 22, username: "MrDoctorOficial", score: "18.50", seed: "edgarpeinado_", hop: 1, depth: "quick" },
  { pos: 23, username: "sol_A84", score: "18.50", seed: "Marisol23393000", hop: 1, depth: "quick" },
  { pos: 24, username: "josie57937455", score: "17.50", seed: "coffee86460", hop: 1, depth: "quick" },
  { pos: 25, username: "egunmisogino", score: "17.50", seed: "coffee86460", hop: 1, depth: "quick" },
  { pos: 26, username: "karma8901", score: "17.50", seed: "Marisol23393000", hop: 1, depth: "quick" },
  { pos: 27, username: "MarielenaD21667", score: "17.50", seed: "nelgaray20", hop: 1, depth: "quick" },
  { pos: 28, username: "pastorena", score: "17.50", seed: "Marisol23393000", hop: 1, depth: "quick" },
  { pos: 29, username: "Yamilethca69486", score: "17.50", seed: "Marisol23393000", hop: 1, depth: "quick" },
  { pos: 30, username: "Zoesp21", score: "17.50", seed: "B_Day85_20_10", hop: 1, depth: "quick" },
];
