///////////////////
//               //
// GABRIELLÁNAK! //
//               //
///////////////////

// Szia Gabi!
//
// Tudtam, hogy meg akarod majd nézni, hogy mit írok a többieknek, ezért sajnos enkriptálnom kellett az üzeneteket.
// Ne haragudj! Cserébe itt egy hangulatjavító zene, amit te is szeretsz: https://www.youtube.com/watch?v=dQw4w9WgXcQ
//
// <pizza>

let user = null;
const users = [
    {
        id: 'AN',
        message: '',
        name: 'Áj Nikolett',
        nickname: 'Niki',
        question: ''
    },
    {
        id: 'BZ',
        message: '',
        name: 'Beke Zoltán',
        nickname: 'Zozó',
        question: ''
    },
    {
        id: 'CSG',
        message: '',
        name: 'Csuka Gabriella',
        nickname: 'Gabi',
        question: 'Melyik gyerekmese szereplőiről neveztük el egymást? (magyar cím)'
    },
    {
        id: 'ANYU',
        message:
            '¨³Éĭ«Ł­k£ĳÁ¹²Âaĸ³º°À·ķ¬kª¶´xi¼ª¹¤Åo­»À¢k´Ìłxi¶°²ºr¼±·¼º´³·o´ĪºĢ¾aÈ°³Â½¬k¯·º±­n®´¯¶°ÆĲÀµwa³¼µ½nĪ½µ·¼l½³' +
            'µ¿Ī¾o±°ķ´ÅaĻ»±½³¥­¦À}lń´ÅķÀŅ¹i¯»¿mr°¹²Âa°¥¶¸³i¹¢»µ³¼xiķ´k¬ňÂÆĿ¼ķ¸a³ÉÀun¢¸ªÆo¹Ĳµa°»ÇÃĭ·n§º¨Áºl´¯±¹ªo' +
            'Ĳµa¬¬½¾¾i·´waº°l¶į³k³Ļ¶l¯³­¹ƒÆÃ±¶za¯¦r¼ĵ°n®´¯¶¸³iň¨Äa½´Æ®º´Åmr¼µ·Âa°¨Ëo³Â³³°¬·Ãzi¦k¯·¼l«¯«wa·½º®¹aĸ¨Ëo' +
            '·®º­k­·½º²³bk³¶Å¸¼a¾»·Á±½º¦¶a¶Áĭ°¯a¬¯ËÄ·Ī»b',
        name: 'Hadas Antalné',
        nickname: 'Anyu',
        question: 'Mi a 2. vezetékneved?'
    },
    {
        id: 'JA',
        message: '',
        name: 'Jámbor Anna',
        nickname: 'Nagyszemű',
        question: ''
    },
    {
        id: 'KE',
        message: '',
        name: 'Kerezsi Eleonóra',
        nickname: 'Nóri',
        question: ''
    },
    {
        id: 'KK',
        message: '',
        name: 'Koselák Katalin',
        nickname: 'Mosolygós',
        question: 'Melyik mai napig imádott magyar zeneszámot fedeztük fel együtt?'
    },
    {
        id: 'PM',
        message: '',
        name: 'Porcs Mária',
        nickname: 'Angyalka',
        question: ''
    },
    {
        id: 'SA',
        message: '',
        name: 'Skórán Anna',
        nickname: 'Anna',
        question: 'Mi volt a teljes neve annak a barátnőmnek, akivel még te is jóban voltál?'
    },
    {
        id: 'SJ',
        message: '',
        name: 'Sechna János',
        nickname: 'Jancsicskó',
        question: ''
    },
    {
        id: 'TA',
        message: '',
        name: 'Tándor Ágnes',
        nickname: 'Göndi',
        question: ''
    }
];

window.onload = () => newScreen(userSelectorScreen());

function encode(code, message) {
    const {length} = code;
    code = code.toUpperCase();

    return [...message].map((c, i) => String.fromCharCode(code.charCodeAt(i % length) + c.charCodeAt(0))).join('');
}

function decode(code, message) {
    const {length} = code;
    code = code.toUpperCase();

    return [...message].map((c, i) => String.fromCharCode(c.charCodeAt(0) - code.charCodeAt(i % length))).join('');
}

function messageScreen(code) {
    return `
        <span id="info3">Amennyiben jól adtad meg a választ, úgy itt egy értelmes szövegnek kell megjelennie.</span>
        <span id="message">${decode(code, user.message)}</span>`;
}

function newScreen(template) {
    document.body.innerHTML = `<div id="screen" class="${user ? user.id : ''}">${template}</div>`;
}

function questionScreen() {
    return `
        <span id="welcome">Szia ${user.nickname}! Jó látni!</span>
        <span id="info1">Mielőtt továbbmennénk, kérlek válaszolj a következő kérdésre!</span>
        <span id="question">${user.question}</span>
        <div id="answerBlock">
            <input id="answer"
                   autocomplete="off"
                   placeholder="Válasz">
            <button id="send"
                    onclick="sendAnswer()">
                Válasz elküldése
            </button>
            <span id="info2">Kérlek a válaszodat ékezet nélkül add meg!</span>
        </div>`;
}

function selectUser() {
    const userID = document.getElementById('userSelect').value;
    user = users.find(({id}) => userID === id);

    newScreen(questionScreen());
}

function sendAnswer() {
    const {value} = document.getElementById('answer');

    if (value) {
        newScreen(messageScreen(value));
    }
}

function userOption({id, name}) {
    return `
        <option value="${id}">
            ${name}
        </option>`;
}

function userSelectorScreen() {
    return `
        <label id="whoAreYou"
               for="userSelect">
            Ki vagy te?
        </label>
        <select id="userSelect"
                onchange="selectUser()">
            <option selected>Kérlek válassz!</option>
            ${users.map(userOption)}
        </select>`;
}
