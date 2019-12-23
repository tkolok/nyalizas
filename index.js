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
        message:
            '®Å¸¥m®Ĵbªµ¢Èİ­ŃµzÁª»¤Æ@¯ªÂaĻÁ¹¿¶s»¯Ìµ»½³nĸ¾pªÈÁº¶aÀ°¥³¯¼´·p­Ã¶´Ķ³Ç®¦¹a»İ½p¶¿ºmm©Â»a»ĢÀo¹µ¶z¼´mµ' +
            'È±®n·¯½xµiÇļ¨{aĜb¢n­³¶¾Ê®¼µa²£µ°a¯»n´²Ĺ¼Ôµ¦»ms±¨Ça»¸¹´²Ás£²£¼±¯ÇĮÂ¾¯|iÂÂ¨ÆaÉ°a»ªķÁ¿p¿Ļ¿­¼¯s§³³¨³' +
            'Ã¹µ¶zÇĪ´¦·Nb·¦ºƠ¿Äi»Íµm©¼°Ī²mn·º·Âz»ª¯ĢÇ£¯¼¢¹o¿±µĻ¿­®¬@§­n¬³»·p¼ÔÂ®¼³ŀµ¢º¢¹}k°¿ÁªÀa¼b·¯¯¼°¶p±ÃµĢ' +
            '¶¥@¦¦n¢È¾¶p¼Ô¼¯Á¦s«·ķµ³»k¾ĲÆ¾Ľ¹a¼ģ¥¼ªÄ°·ŃªÅaħ¨Ì±¨Ça¯o³¹«Ļ¼¥±¢¿@§¨ÇĽÂÃkÆªÁÌaÁķ¾ĉ®¦Â¦Á}k®zÉĢ¹µÂ¼a»' +
            '¦µo¾¿±»t',
        name: 'Csuka Gabriella',
        nickname: 'Gabi',
        question: 'Melyik gyerekmese szereplőiről neveztük el egymást? (magyar cím)'
    },
    {
        id: 'ANYU',
        message:
            '¨³Éĭ«Ł­k£ĳÁ¹²Âaĸ³º°À·ķ¬kª¶´xi¼ª¹¤Åo­»À¢k´Ìłxi¶°²ºr¼±·¼º´³·o´ĪºĢ¾aÈ°³Â½¬k¯·º±­n®´¯¶°ÆĲÀµwa³¼µ½nĪ½µ·¼l½³' +
            'µ¿Ī¾o±°ķ´ÅaĻ»±½³¥­¦À}lń´ÅķÀŅ¹i¯»¿mr°¹²Âa°¥¶¸³i¹¢»µ³¼xiķ´k¬ňÂÆĿ¼ķ¸a³ÉÀun¢¸ªÆo¹Ĳµa°»ÇÃĭ·n§º¨Áºl´¯±¹ªoĲ' +
            'µa¬¬½¾¾i·´waº°l¶į³k³Ļ¶l¯³­¹ƒÆÃ±¶za¯¦r¼ĵ°n®´¯¶¸³iň¨Äa½´Æ®º´Åmr¼µ·Âa°¨Ëo³Â³³°¬·Ãzi¦k¯·¼l«¯«wa·½º®¹aĸ¨Ëo·' +
            '®º­k­·½º²³bk³¶Å¸¼a¾»·Á±½º¦¶a¶Áĭ°¯a¬¯ËÄ·Ī»b',
        name: 'Hadas Antalné',
        nickname: 'Anyu',
        question: 'Mi a második keresztneved?'
    },
    {
        id: 'JA',
        message:
            '³º²¥lµ¦¨³»ƞ´ÆĿ³a¯o¯ªÆª­®¯³®µl¼»¦À´Á¯ĵ¶a®³¶¸ķ¿Ãķ¯¼¸ya¹®³µn´¹aº®®a¶¸À»±­ma¶¾´ºl®»a»¸¹º±·a´½º®µl³¦­³½Áaº®' +
            '¬¦»}m³Â¢¯½»Æ¢ºi§°¼Ã¼´l»Ī´È´m­±½µĪºo®»lĲ­¦Â´º¯±´ma»¸»µlĲ¯a¯oÁª±­¯¦¹}m»¿Ģ£°Á®aµ¼a¦µÈm¯­°º´È´¿Ʋxi°¬½Âyaĵ' +
            '»µ¦º¼²´xi«Ĵº´¹¬ƽuaķÁÂÇ¦À®µµn»Į¯Å·¢¬nÃ®³Àª­¢¹}mė¾Ņ­ķ¹{m©»°ºa¼´ºa±°ºaÁ°¯­»·°´n»Į¯Åi·¢µÈya­´ªµn±Į³¹®­º·ºm±' +
            '»µ¤°¼oº¦³i­¦¶´ÁaÀª­Ģº½¶ol¦a¯o¹¦³³°£°°»a­·¯¢¹oŃ³ňµ¯Ī¹{m©­iµ¦º¹²´±·aµ·ÂÇµĭ«¢¯n»²¯ºĲ­a¯ÉÇ¢¸ua©½¶Æa¹®¯¯Ç¸¿' +
            '¦lĲ³µķº²´l¿¢¨Ç}mĊ¿i¯¦»oĶ³°®¬¦ºo®a®¾»ªÁİ´°°woonµ¼¨­­¥a³»ya´¸¨ºn¹²­±·­¦µo²¨Åi£°»±®¯Ɲi·¢µÈn',
        name: 'Jámbor Anna',
        nickname: 'Nagyszemű',
        question: 'Szerinted Hadas micsoda az emberek között? Milyen "becenevet" adtál neki?'
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
        message:
            'Ä¶º¼t·»¶»oÆ°oÁ¹¼lÅ£¶Ëk¾¿Í°ºo®İÀÄ{sµºµoµÉ·½´ÇÂĸl°¼oň¸»¸Â¶ĵÂ¶{r°ÉļÆÃl²µ°½k¼¼Â¸¹İ®¸Å¬Ãs¿°¼Â¼}r´sÊ°³Èb°Ì' +
            'k°Ít´¹±§Á~k°¾½±±½b°r·´ºÈŅ®±µÉň½o¶Ç°¸ł¦Ã³¸oÃÃÉµÃįÅ³¹}s¦ŅÂ¸¦´Àk´ºÍoĵÁ¶ĸ½°Âs¹¼®´´½·¶oÇµÁÀ°®°½yoŇ{l¹ĵ{r¬±µ' +
            'µ·­¶»Ã³¸{sÁ´³È§ºr±´¿¿ŅÀŅ¯o¿¬¶´Á}',
        name: 'Koselák Katalin',
        nickname: 'Mosolygós',
        question: 'Melyik mai napig imádott magyar zeneszámot fedeztük fel együtt?'
    },
    {
        id: 'PM',
        message: '',
        name: 'Porcs Mária',
        nickname: 'Angyalka',
        question: 'Mi volt az, amin sokat vitatkoztunk, mert rossz méretben vettél?'
    },
    {
        id: 'SA',
        message:
            'ª½saÁÈĢ±·½¢wiÁ¸¸¾a»­Æa¸¸Á·´Î¯ķ¯r®Ĵ°sm´Ãa¼¥Âª²i¸ºsÃ¨¯¾»a¹ƚÁ¸sÎ¢À¸³­¬´s¾ÃaÂ¹¶«¬iÀ¼sÄ¦º©Àµk·ƤÁ¾z' +
            '­³²Àªyi ´sÈ¢¾­¹a¬ÃÇsĴÎ°»dÄ¢µ½´·LsÂ°µ½r¬´½´Åņ»¯n§Åª¹Ī¿ÆsÇª¼¨·¯¿us´¼Îa¹©¾­yi ´sÈ¢¾­¹a¹®ÀsŉÌµķ°r®°°' +
            'sÆ»¬n±·¨¿¸ÅÃÁÎĢºdÀĪ³ªs»É¯¼¥Àa¸²Á·ºz§³°ĳ­·½Ĵ¿Nsģ´n±³ªk·´Ãºz¯³±r®À½´Ç´¾a°©r¯°´¸À@¡É³°­Æoywss»aº' +
            'ĭÀº°°sÂÁºn·Ì¦½²ÁÇÀz¯³±r·ĬµÇÂÇĻ­n·Á¬¬½s´s¿­»ľ¾µkĲÉ¸µ¿¯zd¶¦k½¸sÂÈµnı¹ºk¿´ºsÄĴoÅ±¬·¨a¾rķ¾¼Í¸' +
            'sÐ°º¸r­¬´ņÇāÅÍ¢»d³»¿iÀÂ·Î¢zdº°²ÂsÇsÐ¢µ½r¢kµ¸ºÍ¿£°d¾Ģ¹Âs´@ÉÉ­Âd¾¢¶ļÇĴÆ»ª»d½ķÅŅ¿\\Í±¯²',
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
