function indoumandana(kalimat) {
    var kataArray = kalimat.split(" ");
    var hasilPecah = [];
    kataArray.forEach(function (kata) {
        var sukuKata = [];
        for (var i = 0; i < kata.length; i += 2) {
            var duaHuruf = kata.substr(i, 2);
            if (cekHurufKonsonanDanVokal(duaHuruf)) {
                sukuKata.push(duaHuruf);
            } else {
                sukuKata.push(duaHuruf[0] + duaHuruf[1]);
            }
        }
        
        for (var j = 0; j < sukuKata.length; j++) {
            if (sukuKata[j].endsWith("a")) {
                sukuKata[j] += "iden";
            } else if  (sukuKata[j].endsWith("i")) {
                sukuKata[j] += "pri";
            } else if  (sukuKata[j].endsWith("u")) {
                sukuKata[j] += "pru";
            } else if  (sukuKata[j].endsWith("e")) {
                sukuKata[j] += "pre";
            } else if  (sukuKata[j].endsWith("o")) {
                sukuKata[j] += "pro";
            } else if (sukuKata[j].endsWith("ng")) {
                sukuKata[j] = "strengen";
            } else if (['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'].some(char => sukuKata[j].endsWith(char))) {
                sukuKata[j] += "es";
            } else {
                sukuKata[j];
            }
        }
        var kataHasil = sukuKata.join(" ");
        hasilPecah.push(kataHasil);
    });

    var kalimatHasil = hasilPecah.join(" ");
    return kalimatHasil;
}

function cekHurufKonsonanDanVokal(duaHuruf) {
    var konsonan = "bcdfhjklmnpqrstvwxyz";
    var vokal = "aeiou";
    var cekNg = "ng";

    var hurufPertama = duaHuruf[0];
    var hurufKedua = duaHuruf[1];
    var hurufNg = duaHuruf[0] + duaHuruf[1];

    var isHurufPertamaKonsonan = konsonan.includes(hurufPertama);
    var isHurufPertamaVokal = vokal.includes(hurufPertama);
    var isHurufKeduaVokal = vokal.includes(hurufKedua);
    var isHurufNg = cekNg.includes(hurufNg);
    
    if(isHurufKeduaVokal == true || isHurufNg == true){
        return isHurufPertamaKonsonan && isHurufKeduaVokal;
    } else if (isHurufPertamaVokal == true){
        return isHurufPertamaVokal;  
    } else if (isHurufPertamaKonsonan == true && isHurufKeduaVokal == false){
        return isHurufPertamaKonsonan;  
    } else {
        return isHurufPertamaKonsonan;
    }
}

function umandanaindo(kalimatInput) {
    var kataArray = kalimatInput.split(" ");
    var kataHasil = kataArray.map(function (kata) {
        if (kata.length > 1) {
            if (kata.endsWith('es')) {
                return kata.slice(0, -2);
            } else if (kata.endsWith('pri') || kata.endsWith('pre') || kata.endsWith('pro') || kata.endsWith('pru')) {
                return kata.slice(0, -3);
            } else if (kata.endsWith('iden')) {
                return kata.slice(0, -4);
            } else if (kata.endsWith('strengen')) {
                return kata.slice(0, -8) + 'ng';
            }
        } else {
            return kata;
        }
    });
    var kalimatHasil = kataHasil.join(" ");
    return kalimatHasil;
}

function jalankanFungsi() {
    var kalimatInput = document.getElementById("kalimatInput").value;
    var indoumandanaRadio = document.querySelector('input[name="fav_language"][value="indoumandana"]');
    var umandanaindoRadio = document.querySelector('input[name="fav_language"][value="umandanaindo"]');
    var hasilTerjemahan;

    if (indoumandanaRadio.checked) {
        hasilTerjemahan = indoumandana(kalimatInput);
    } else if (umandanaindoRadio.checked) {
        hasilTerjemahan = umandanaindo(kalimatInput);
    } else {
        // Tidak ada radio button yang dipilih
        console.error("Pilih fungsi terlebih dahulu.");
        return;
    }
    document.getElementById("hasilTerjemahan").innerText = hasilTerjemahan;
}

function salinteks(){
    var copyText = document.getElementById("hasilTerjemahan");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Teks berhasil disalin: " + copyText.value);
}