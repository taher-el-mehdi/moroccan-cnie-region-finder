/*
code	region
A, AA, AC, AJ	Rabat
AB, AE, AY, AS	Salé
AD	Témara
B, BA, BB, BE, BH, BJ, BK, BL, BM, BF, BV, BW	Casablanca
BX, DF, PK, PP, PS, PK, PH	Moroccans residing abroad (MRE)[21]
C, CC, CD	Fez
CB	Sefrou
CN	Boulemane
D, DN	Meknes
DA	Azrou
DB	Ifrane
DC	Moulay Idriss Zerhoun
DJ	Ain Taoujdate
DN	El Hajeb
DO	Ouislane
E, EE	Marrakesh
EA	Ben Guerir
F	Oujda
FA	Berkane
FB	Taourirt
FC	El Aioun Sidi Mellouk
FD	Ain Bni Mathar
FE	Saïdia
FG	Figuig
FH	Jerada
FJ	Ahfir
FK	Touissit
FL	Bouarfa
G	Kenitra, Sidi Yahya El Gharb
GA	Sidi Slimane, Sidi Yahya El Gharb
GB	Souk El Arbaa
GK	Sidi Kacem
GM	Ouazzane
GN	Mechra Bel Ksiri
GJ	Jorf El Melha
H, HH	Safi
HA	Youssoufia
I	Beni Mellal
IA	Kasba Tadla
IB	Fquih Ben Saleh
IC	Azilal
ID	Souk Sebt Ould Nemma
IE	Demnate
J, JK	Agadir
JA	Guelmim
JB	Inezgane, Dcheira El Jihadia
JC	Taroudant
JD	Sidi Ifni
JE	Tiznit
JF	Tan-Tan
JH	Chtouka Aït Baha
JM	Aït Melloul, Temsia, Lqliâa, Oulad Dahou
JT	Oulad Teima
JY	Tata
JZ	Assa-Zag
K, KB	Tangier
KA	Asilah
L	Tétouan
LA	Larache
LB	Ksar el-Kebir
LC	Chefchaouen
LE	Martil
LF	Fnideq
LG	M'diq
M	El Jadida
MA	Azemmour
MC	Sidi Bennour
MD	Zemamra
N	Essaouira
O, OD	Dakhla
P	Ouarzazate
PA	Tinghir
PB	Zagora
Q	Khouribga
QA	Oued Zem
R	Al Hoceima
RB	Imzouren
RC	Targuist
RX	Bni Bouayach
S, SA	Nador
SH	Laayoune
SJ	Smara
SK	Tarfaya
SL	Boujdour
T	Mohammedia
TA, TK	Benslimane
U	Errachida
UA	Goulmima
UB	Er-Rich
UC	Erfoud
UD	Rissani
V	Khenifra
VA	Midelt, Itzer
VM	M'rirt
W	Settat
WA	Berrechid
WB	Ben Ahmed
X	Khemisset
XA	Tifelt
Y	Kalaat Sraghna
Z	Taza
ZG	Guercif
ZH	Karia Ba Mohamed
ZT	Taounate
source: https://en.wikipedia.org/wiki/National_identity_card_(Morocco)
*/

function findRegion() {
    const regions_code =
    {
        'Rabat': ['A', 'AA', 'AC', 'AJ'],
        'Salé': ['AB', 'AE', 'AY', 'AS'],
        'Témara': ['AD'],
        'Casablanca': ['B', 'BA', 'BB', 'BE', 'BH', 'BJ', 'BK', 'BL', 'BM', 'BF', 'BV', 'BW'],
        'Fez': ['C', 'CC', 'CD'],
        'Sefrou': ['CB'],
        'Boulemane': ['CN'],
        'Meknes': ['D', 'DN'],
        'Azrou': ['DA'],
        'Ifrane': ['DB'],
        'Moulay Idriss Zerhoun': ['DC'],
        'Ain Taoujdate': ['DJ'],
        'El Hajeb': ['DN'],
        'Ouislane': ['DO'],
        'Marrakesh': ['E', 'EE'],
        'Ben Guerir': ['EA'],
        'Oujda': ['F'],
        'Berkane': ['FA'],
        'Taourirt': ['FB'],
        'El Aioun Sidi Mellouk': ['FC'],
        'Ain Bni Mathar': ['FD'],
        'Saïdia': ['FE'],
        'Figuig': ['FG'],
        'Jerada': ['FH'],
        'Ahfir': ['FJ'],
        'Touissit': ['FK'],
        'Bouarfa': ['FL'],
        'Kenitra': ['G'],
        'Sidi Yahya El Gharb': ['G'],
        'Sidi Slimane': ['GA'],
        'Sidi Yahya El Gharb': ['GA'],
        'Souk El Arbaa': ['GB'],
        'Sidi Kacem': ['GK'],
        'Ouazzane': ['GM'],
        'Mechra Bel Ksiri': ['GN'],
        'Jorf El Melha': ['GJ'],
        'Safi': ['H', 'HH'],
        'Youssoufia': ['HA'],
        'Beni Mellal': ['I'],
        'Kasba Tadla': ['IA'],
        'Fquih Ben Saleh': ['IB'],
        'Azilal': ['IC'],
        'Souk Sebt Ould Nemma': ['ID'],
        'Demnate': ['IE'],
        'Agadir': ['J', 'JK'],
        'Guelmim': ['JA'],
        'Inezgane': ['JB'],
        'Dcheira El Jihadia': ['JB'],
        'Taroudant': ['JC'],
        'Sidi Ifni': ['JD'],
        'Tiznit': ['JE'],
        'Tan-Tan': ['JF'],
        'Chtouka Aït Baha': ['JH'],
        'Aït Melloul': ['JM'],
        'Temsia': ['JM'],
        'Lqliâa': ['JM'],
        'Oulad Dahou': ['JM'],
        'Oulad Teima': ['JT'],
        'Tata': ['JY'],
        'Assa-Zag': ['JZ'],
        'Tangier': ['K', 'KB'],
        'Asilah': ['KA'],
        'Tétouan': ['L'],
        'Larache': ['LA'],
        'Ksar el-Kebir': ['LB'],
        'Chefchaouen': ['LC'],
        'Martil': ['LE'],
        'Fnideq': ['LF'],
        'Mdiq': ['LG'],
        'El Jadida': ['M'],
        'Azemmour': ['MA'],
        'Sidi Bennour': ['MC'],
        'Zemamra': ['MD'],
        'Essaouira': ['N'],
        'Dakhla': ['O', 'OD'],
        'Ouarzazate': ['P'],
        'Tinghir': ['PA'],
        'Zagora': ['PB'],
        'Khouribga': ['Q'],
        'Oued Zem': ['QA'],
        'Al Hoceima': ['R'],
        'Imzouren': ['RB'],
        'Targuist': ['RC'],
        'Bni Bouayach': ['RX'],
        'Nador': ['S', 'SA'],
        'Laayoune': ['SH'],
        'Smara': ['SJ'],
        'Tarfaya': ['SK'],
        'Boujdour': ['SL'],
        'Mohammedia': ['T'],
        'Benslimane': ['TA', 'TK'],
        'Errachida': ['U'],
        'Goulmima': ['UA'],
        'Er-Rich': ['UB'],
        'Erfoud': ['UC'],
        'Rissani': ['UD'],
        'Khenifra': ['V'],
        'Midelt': ['VA'],
        'Itzer': ['VA'],
        'Mrirt': ['VM'],
        'Settat': ['W'],
        'Berrechid': ['WA'],
        'Ben Ahmed': ['WB'],
        'Khemisset': ['X'],
        'Tifelt': ['XA'],
        'Kalaat Sraghna': ['Y'],
        'Taza': ['Z'],
        'Guercif': ['ZG'],
        'Karia Ba Mohamed': ['ZH'],
        'Taounate': ['ZT'],
        'Moroccans residing abroad (MRE)': ['BX', 'DF', 'PK', 'PP', 'PS', 'PK', 'PH']
    }

    // Get input value
    const cnie = document.getElementById('cnie').value.trim();
    const resultDiv = document.getElementById('result');

    // TODO: Validate input
    // if (.test(cnie)) {
    //     resultDiv.textContent = 'Please enter a valid Moroccan CNIE.';
    //     resultDiv.style.color = 'red';
    //     return;
    // }

    // Extract the first 2 digits
    const prefix = cnie.substring(0, 2).toUpperCase();

    let regionFound = 'Unknown region';
    for (const [region, prefixes_codes] of Object.entries(regions_code)) {
        for (const prefixe_code of prefixes_codes) {
            if (prefixe_code.length == 2) {
                if (prefix == prefixe_code) {
                    regionFound = region;
                    break;
                }
            }else if(prefixe_code.length == 1){
                if (prefix.substring(0,1) == prefixe_code) {
                    regionFound = region;
                    break;
                }
            }
    }
}
// Display result
resultDiv.textContent = `Region: ${regionFound}`;
resultDiv.style.color = regionFound === 'Unknown region' ? 'red' : 'green';
}