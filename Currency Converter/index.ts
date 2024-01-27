
import inquirer , {QuestionCollection,Answers} from'inquirer'

let currencies:string[] = ["U.S. Dollar", "Euro", "U.K. Pound Sterling", "Japanese Yen", "Australian Dollar", "Swiss Franc", "Canadian Dollar", "Serbian Dinar", "New Zealand Dollar", "Turkish Lira", "Nigerian Naira", "Argentine Peso", "Norwegian Krone", "Qatari Rial", "Czech Koruna", "Belarussian Ruble", "Costa Rican Colón", "Venezuelan Bolivar", "Bangladeshi taka", "Romanian New Leu", "Moldova Lei", "Paraguayan Guaraní", "U.A.E Dirham", "Indonesian Rupiah", "Mexican Peso", "Armenia Dram", "Brazilian Real", "Indian Rupee", "Nepalese Rupee", "Central African CFA Franc", "Kyrgyzstan Som", "New Turkmenistan Manat", "Danish Krone", "Sri Lanka Rupee", "Tunisian Dinar", "Vietnamese Dong", "Georgian lari", "Bulgarian Lev", "Russian Rouble", "Colombian Peso", "Saudi Riyal", "Polish Zloty", "Kazakhstani Tenge", "Panamanian Balboa", "Bahrain Dinar", "Egyptian Pound", "South Korean Won", "Algerian Dinar", "Bolivian Boliviano", "Hong Kong Dollar", "Moroccan Dirham", "South African Rand", "Iraqi dinar", "Uzbekistan Sum", "Kuwaiti Dinar", "Thai Baht", "New Taiwan Dollar ", "Tajikistan Ruble", "Omani Rial", "Israeli New Sheqel", "Peruvian Nuevo Sol", "Chilean Peso", "Swedish Krona", "Singapore Dollar", "Hungarian Forint", "Ukrainian Hryvnia", "Haitian gourde", "Dominican Peso", "Chinese Yuan", "Icelandic Krona", "Azerbaijan Manat", "Uruguayan Peso", "Neth. Antillean Guilder", "Lebanese Pound", "Malaysian Ringgit", "Iranian rial", "Libyan Dinar", "Jordanian Dinar","Philippine Peso","West African CFA Franc"]
let currenciesRate:{[key:string]:number} ={
     "U.S. Dollar": 0.0035656734258869,
    "Euro": 0.003280499181356,
    "U.K. Pound Sterling": 0.0028022929885954,
    "Japanese Yen": 0.52660911168624,
    "Australian Dollar": 0.0054079502522692,
    "Swiss Franc": 0.0030797737234493,
    "Canadian Dollar": 0.0047980368878503,
    "Serbian Dinar": 0.37739655439312,
    "New Zealand Dollar": 0.0058351063938592,
    "Turkish Lira": 0.10794164888346,
    "Nigerian Naira": 3.16235404304,
    "Argentine Peso": 2.9364369389656,
    "Norwegian Krone": 0.037126181733888,
    "Qatari Rial": 0.013000436530465,
    "Czech Koruna": 0.081207104198837,
    "Belarussian Ruble": 0.011668978033578,
    "Costa Rican Colón": 1.8319788334332,
    "Venezuelan Bolivar": 0.12863246872254,
    "Bangladeshi taka": 0.39031257203151,
    "Romanian New Leu": 0.016327165572602,
    "Moldova Lei": 0.063177023732675,
    "Paraguayan Guaraní": 26.021829469769,
    "U.A.E Dirham": 0.013048544680761,
    "Indonesian Rupiah": 56.320806350369,
    "Mexican Peso": 0.061187538123364,
    "Armenia Dram": 1.4349555742991,
    "Brazilian Real": 0.017462479107534,
    "Indian Rupee": 0.29642226552981,
    "Nepalese Rupee": 0.47518852859,
    "Central African CFA Franc": 2.1469575983611,
    "Kyrgyzstan Som": 0.31580257928355,
    "New Turkmenistan Manat": 0.012407329754071,
    "Danish Krone": 0.024455397648132,
    "Sri Lanka Rupee": 1.1550232796563,
    "Tunisian Dinar": 0.01092371515116,
    "Vietnamese Dong": 87.20083246766,
    "Georgian lari": 0.0095270301387365,
    "Bulgarian Lev": 0.0064166935621616,
    "Russian Rouble": 0.32014153969808,
    "Colombian Peso": 13.977439829476,
    "Saudi Riyal": 0.013350753194671,
    "Polish Zloty": 0.014362855383006,
    "Kazakhstani Tenge": 1.605260474384,
    "Panamanian Balboa": 0.0035656734258869,
    "Bahrain Dinar": 0.001340982027681,
    "Egyptian Pound": 0.11015867654602,
    "South Korean Won": 4.762185135365,
    "Algerian Dinar": 0.47604730466322,
    "Bolivian Boliviano": 0.024460519701583,
    "Hong Kong Dollar": 0.027865012624704,
    "Moroccan Dirham": 0.034989643314225,
    "South African Rand": 0.067002456157242,
    "Iraqi dinar": 4.6439058316651,
    "Uzbekistan Sum": 43.916891367816,
    "Kuwaiti Dinar": 0.0010960338145929,
    "Thai Baht": 0.1261410718327,
    "New Taiwan Dollar ": 0.11095171496375,
    "Tajikistan Ruble": 0.038833976440119,
    "Omani Rial": 0.0013718921292449,
    "Israeli New Sheqel": 0.013140643967387,
    "Peruvian Nuevo Sol": 0.013506492819018,
    "Chilean Peso": 3.2687352306016,
    "Swedish Krona": 0.037164374563016,
    "Singapore Dollar": 0.0047777321672967,
    "Hungarian Forint": 1.2692445428784,
    "Ukrainian Hryvnia": 0.13474230283442,
    "Haitian gourde": 0.46895168139538,
    "Dominican Peso": 0.20652896751185,
    "Chinese Yuan": 0.025568291204878,
    "Icelandic Krona": 0.48647173565015,
    "Azerbaijan Manat": 0.0060580674933906,
    "Uruguayan Peso": 0.13909877567008,
    "Neth. Antillean Guilder": 0.0063825589962969,
    "Lebanese Pound": 53.204438772746,
    "Malaysian Ringgit": 0.016764009880281,
    "Iranian rial": 148.88768279614,
    "Libyan Dinar": 0.016893442048402,
    "Jordanian Dinar": 0.0025286640817718,
    "Philippine Peso": 0.20077881151686,
    "West African CFA Franc": 2.1469575983611
  } 
let questions:QuestionCollection = [{
    name:'Currency',
    type: 'list',
    message: 'Enter the currency to which you want to convert',
    choices: currencies
},
{name:'amount',
type:'number',
message:'Enter the amount'}]

let answers : Answers = await inquirer.prompt(questions)

const Converter=(currency:string,amount:number)=>{
let converted:number = amount*currenciesRate[answers.Currency]
return Number(converted.toFixed(3))
}

let convertedValue =Converter(answers.Currency,answers.amount)
console.log(`${answers.amount} RS >>>>>> ${convertedValue} ${answers.Currency}`);

