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
        message:
            '¾¯º¨iµľ°uk³³°Äk±®¹¹½²½°d¼Å°¶®¿·©´wk¨®k¬¾½kÁ¥³º¹d½À¯³­x°pi³º«Âk¸­Ĳ½¿iÀ°i®·¥¼¾fªmµ´ļ·°°´Ƽkºª²Äx·' +
            '´·´´¹¨²²kª¸²¬°´ºÅ³µk¬d¼Å°¶®¿¿©²¯¯©µz°²°²«ÂĬ·¸ª·Ĭ²i¹°±iÁ¬«Âk°«Âk¾¥«·º²¸¾k©¶­°¶z·­·­¿¥«´·dĲ' +
            '½¿ĭ´½°²­°¯d¿¬¹x·´·´°¾¾Ĳ·³©½Ň¹¯i¬¶ĥ»¸´¶ƚ·k¥iÁ´°Ī²º²uk¸­i¬¶¯¸½k·®¸kª¸²À²´k¾©¶¸´¦®¹k·®¸k±®²°«Â°Å²²z°' +
            '²°²Ĕ·i¸Ĵ«i½°²°°¿©°k¸­·¯°²Ĳ½¿pi¯°d¶º¾¸i·°«Â°¹d®·Ĵ«i°¹²Â´sµ´xÀ·',
        name: 'Áj Nikolett',
        nickname: 'Niki',
        question: 'Amikor volt a lakásavatótok, akkor mit írtam a párnádba?'
    },
    {
        id: 'BZ',
        message:
            '©»±·»·µ»®lª¾¶°Ä¥À¦¿i®ķ³lµĳ»´Ð°¾qr­¦v®ĵ¬r¶ªÄ¥µ¬r³Ĵ»®®ªÄ·¦ÁaÀ¦Ä½¢Â¢·sr»»³µ³Æ®®v¢l¸ÌĶ·»¥l²»·¥¿¨l¦r±¦Âºĵ³r' +
            '¿¢ÄolÄƚ¥Ō¯l«·µĽÂaµ¸r¹³ŉ£ĭ±ÅÃaÃªº©»°aÉ¦³ĲÆ®¯¿a¹ĦÅ¸¬Ä¢·srĪ¾¢l¹Ōµ»ÅµÀ¦ÀiªÉa·ª¶¿¦ÉaÂ¦¹Âmv¥±eÇ°º»a±¿r®¨Ïa±' +
            '²´®³¼Ľ³¬ƣi¥Å­»¬~i©Å¨Åe½²¯»¬l²»i¢v´»°i»a±¿Ì®­v´±²¿²a¸¢¶eÀ²¯¹´xeÀ®aÌĢ¸¹ÁÃµ·´¿e¿ª¨·¥»³s',
        name: 'Beke Zoltán',
        nickname: 'Zozó',
        question: 'Mi a keresztneve annak a nőnek, akiről azt mondtam, hogy külsőre pont az esetem?'
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
        id: 'HA',
        message: '',
        name: 'Hadas Attila',
        nickname: 'Attila',
        question: ''
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
        message: '²¹¥·°kªÁi®´½­Ĭ­Âª¸a°®¹¯³­wa³Ã¿a¯i¿ķÀ®¿­³·k®³·°µ³µĴ´ÂwkÃ­º®zi³°µÂk¯ķ±¬aÂ®·«³¼°¯n®·¦µ®¯aÄª¹mn­°aºĪ' +
            '¾´Ã´k£³uk¢¹´º³n¼°®n¼Å°¹½Ĭ­n¶°¨įµ·¯·wkį¼¹¢¹i´´n¼Å°¹¸¿µn®·¦µ®k­³·¹ªzi¯¦nƚ¶a¯Ã¿Ģ¼i±¦ºi´´nª¯«į´yaÃ¿Ģ¼iºµÂ' +
            'iÁ¢¼i¬»nªk·ķ°¿¦º®¹a¹®¯·³¼¾Īµuk¢»²Á¦ºi¸ĢÁ¸¶a´®·Īn¯º³²¾·´ÈwkÈ½kªÁi¾°¹Ī´¨n½À¥¼Ī¸a²²®´ķ»¹ª|i¦nªÅĪÀ½k¢¼·¬¬' +
            'n²¾ań»Ň­¼Ĳ¶mn±¬aÄĲ²³³i­¦ºĪ¿¯į­wa¶¸²ºn¼ÅĪ¾i·Ģ¼Âk·¯°Äonğ½ĽºĿ¶mn±º¨ÇiÁ¢µÂk¯³´°®o¬a±µ¬´Ám¢pi³³³¯c¶½¿±Áz' +
            'pÅÀÂoÇ¸ÀµÃ«°o±¸¸pÅª¿¤¶Á~¥|t·~£® c´¬¯z¢',
        name: 'Kerezsi Eleonóra',
        nickname: 'Nóri',
        question: 'Mi a művészneve, annak a nőnek, akinek az egyik retro slágere nagy kedvenced volt régebben?'
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
        id: 'LSZ',
        message:
            '¶¾¹°n²ķ°j¶Â¹ºÀ¦n·¯Ât´´³·º®µuÈĴ¨²qn­¯uµÅaºĮµi¸Î½··ā¼»¯µĽt³°Çe³°Ãu¾ľ­º°ƿi¶ĶÂÄa¯¬Çwj£µ²º¼eń»ņÁŊ' +
            '¶m@¶´µÂjÂ¹²ª»ªÀ±¯ÉÈ°­¹qnĲ½uµ¹¯¹e»Ĳ±u¾º£¯³nĿ¼őÀŁ¬Ln­½°ÃuÈ°´ē»¦Âi¯¼ÍkªÇª¼i¸ÄÆ¸Ģ·¸nµīÃÂÄ¢n­½Ã¾¶tŁ´' +
            'ÈªnªjÈÃ½´NnÈ½jÅ¹¯ªn°ŊµŀÃt´®ā²´»i¬ºÂ¹¦ze¶¸±Ît´­³³n´³Èt®´À«³¼jÈÎĬ«Ěn±į·ÃuÊ¬¨|',
        name: 'Lakatos Szilvia',
        nickname: 'Szilvike',
        question: 'Hogy szólítod az anyós jelölted/anyósod?'
    },
    {
        id: 'PM',
        message:
            '¯´É°º¾¢{~}nÆ»²Â¸¼Ç¦ºp´ÈÍ¦¹p°Ès¦´ÉoÁÍĴÃ±»n¿¦m¹Ânŀ³Á±¼nÅĴ¹±³nÀª»´´¼Çom¾»Â­Æ±½n´»m±Én¸®¯µÁnÉ¢´É{n´¬¶Â´nÁ' +
            '¦ºpÃÃ·°¸pÁ½Æ´Ç±ÃnÀ°»´°¼¼om¶Çsª´±É·s¤À¿³¯s·®·Èn´»mĹ»³Ç¦º²´¼a£±¶Ç¼´{~}n´»mµ¶ķÆ»mÆ¸ºĴ¨»±ºn´»mÆ°µÌom´»sµ' +
            'Â´¾»s®Ķ·o»¼µm½¾¼·©®Ä½ķ¾om¦°µÌªÀpÃÃ·°º|o²¸a®¾½Ç¼aº¹½²¸¯ÁpÃÃ·¯Ķ»o»Â¯±±½·aµ¿¶Çsª»»İ°µa¯µ»³s´²pº³Í¥²»}n¨Æ' +
            'ÃÉ³ÅƲ²¾o±Æ¢¸pºńÆ»Ń¾Ņ¹s®¶¾³³ÁµypĸÁs¯®·È½Áa»±¶ÇÂ¯mÃÉ³Å¦Á¼´¹t',
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
            'ĭÀº°°sÂÁºn·Ì¦½²ÁÇÀz¯³±r·ĬµÇÂÇĻ­n·Á¬¬½s´s¿­»ľ¾µkĲÉ¸µ¿¯zd¶¦k½¸sÂÈµnı¹ºk¿´ºsÄĴoÅ±¬·s¶´Í´f³c¼' +
            'Zs»nĺÅ´Å®ÆsÂÆµn°³¬ľ½ĴÅ´Ça¯¾Æa¸¸Á·´a¶³¹ºk½¸s´Áºn¥r­°°ÆÍµ¼aºĥÀºkªsÉ¿Îaº¥½Ĵ¿ĪÅÆ¼Ça¹ĺÌĽ·wÃ»¯',
        name: 'Skórán Anna',
        nickname: 'Anna',
        question: 'Mi volt a teljes neve annak a barátnőmnek, akivel még te is jóban voltál?'
    },
    {
        id: 'SJ',
        message: '¸È@¬»o°¾º¥¼¦¼½Ľhĥµŋ¸ķ¿qh·Ã¼h¼¨¶µ´ÁªºÃ¹¨³{c¼±³Èe´´»¯ĩ±¥oÂ¢Âe­¶Í@Ľ²°¥±l¢À°··Ã¬»Ã¤o­»tĮ´´È°ª´' +
            '±{l¢¿®¾´À@«©oĹÂ¿»¹«½ÃÂ®hŉ·¹­ªÂ°toµ®·Ác¼±©¹¹ń½¿@¥ĩÁ«¾Â¢e¶Í@­Ļµ¨¹l¨Íªº´¿@¹©¶¼{l¬¹±´Ơt¼ľºĬÁ¿Ī»¬­»t¨¯' +
            'İ¯³Â¢eÉĽ·h¼¨¶l¬Ő±ľ½t¤¸Â½o±¨Íe¬¸·Ĭº´·´Àmt²­ÁÈ@¤ºÁ¤o´¢À¦¬oµcı»¨Ã±¥e©¼¹µ­o·´l´Îªº´ÈĬ¬}',
        name: 'Sechna János',
        nickname: 'Jancsicskó',
        question: 'Mit kértem a Winter Wonderlanden, amit a csaj nem bírt megérteni?'
    },
    {
        id: 'SZA',
        message:
            '¢¤Ģ¿b¬ĸ»²®a§»²´aī·²b¯§®m®Ģ¶µ®®¢­mm£µ¶Ĵ¹b®ī¨m¯ª°¥¶©a±µÁb­£±Â®´¼a®b´¼ĮÃ§®¤¦»pa¦m®Ģµ´Â­a¤¦yb¦¼aÁ§­¬¦À§¯b' +
            'Ī¿¶©§µƞpaª»¦ª©a¶µa§¨Æb«ĵ­²®¬Ƴa¹ģ¯»aÃ±­¶Ģ¹na£¬¶b´±¬®¶a¶ķ¿Ɠ¥«¬m£aµ»²´¦¶µ²«·§­ybĪµaµ£a§¨Æb¬«´mµ»§³²¶¦¶¦Áb' +
            '¬£±yb¢­¬¼´a£»Áb·«´Ç±¯±»Ç£a«´{b£­ŀµ»į¯ƾ®¦©a½±¯¶a²¼Ī´µm´¢©¢À¼¬±¥¼­aī¯m«´b©¼¼»ģ¥{b§®Ķ®¦¯mmª°©ºm¯ªª¢º£³££' +
            '¯b­ģµ»«a¨°´®¢­b',
        name: 'Szalontai Andrea',
        nickname: 'Andika',
        question: 'Milyen becenéven hívtalak régebben?'
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
    code = [...code.toUpperCase()].map(c => c.charCodeAt(0));

    return [...message].map((c, i) => String.fromCharCode(code[i % length] + c.charCodeAt(0))).join('');
}

function decode(code, message) {
    const {length} = code;
    code = [...code.toUpperCase()].map(c => c.charCodeAt(0));

    return [...message].map((c, i) => String.fromCharCode(c.charCodeAt(0) - code[i % length])).join('');
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
