window.onload = () => newPoem();

function animateImage(answer) {
    if (!answer) {
        document.getElementById('fuckIt').classList.remove('hidden');
    }

    document.getElementById('buttons').remove();
    document.getElementById('flower').classList.add('blooming');
    document.getElementById('flowerBody').setAttribute('d', 'M 2000 2500 C 2000 500, 2000 500, 2000 500');
    setTimeout(() => document.getElementById('flowerHead').classList.add('rotate'), 3000);
}

function newPoem() {
    switch (getQueryParam('lady')) {
        case 'anyu':
            setPoem('Kicsiny falumban jártam.', 'A világ legcsodálatosabb virágszálát láttam.', 'Igazából tökre rendben volt,', 'De attól szabad-e locsolni?');
            break;
        case 'szilvike':
            setPoem('Kicsiny falumban jártam.', 'A legeslegnagyobb kincset és anyukáját láttam.', 'A pöttöm kincset még nem, de az anyukáját', 'Szabad-e locsolni?');
            break;
        case 'anna':
            setPoem('Zöld erdőben jártam.', 'Vörös rózsát láttam.', 'Évek óta nem akart hervadni,', 'De attól még szabad-e locsolni?');
            break;
        case 'nori':
            setPoem('Karanténban jártam.', 'A világ legpompázatosabb káláját már ezer éve nem láttam.', 'Azóta csak nem kezdett el hervadni.', 'Szabad-e locsolni?');
            break;
        case 'barbi':
            setPoem('Remek a hangulatod -tom -tom -torotom -tom', 'Ma van a <a href="https://www.youtube.com/watch?v=rHh6qI-S_Ww">szülinapod</a> -pom -pom -porpom -pom', 'Karanténban mulatozol -tom -tom -torotom -tom', 'Szabad-e locsolni?');
            break;
        case 'vivien':
        case 'patricia':
            setPoem('A Roncsbárban jártam.', 'A Kiss család szebbik lányát láttam (Ezt el ne mondd tesódnak!).', 'Mindig is gyönyörűen virágzott,', 'De attól szabad-e locsolni?');
            break;
        case 'quarantine':
            setPoem('Wuhan tartományban jártam.', 'Koronavírust láttam.', 'Meg akart fertőzni', 'Szabad-e tisztítószerrel locsolni?');
            break;
        default: setPoem('Zöld erdőben jártam.', 'Kék ibolyát láttam.', 'El akart hervadni.', 'Szabad-e locsolni?');
    }
}

function getQueryParam(key) {
    const reg = new RegExp(`[?&]${key}=([^&#]*)`, 'i');
    const queryString = reg.exec(window.location.search);
    return queryString ? queryString[1] : null;
}

function setPoem(...rows) {
    const poem = document.getElementById('poem');
    poem.innerHTML = rows.join('<br>');
}
