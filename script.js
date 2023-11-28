function pisahSukuKataKalimat(kalimat) {
    var kataArray = kalimat.split(" ");
    var hasilPemisahan = [];

    kataArray.forEach(function (kata) {
        var sukuKata = pisahSukuKata(kata);
        hasilPemisahan.push(sukuKata.join(" "));
    });

    return hasilPemisahan.join(" ");
}

function pisahSukuKata(kata) {
    var sukuKata = [];
    var i = 0;

    while (i < kata.length) {
        var hurufPertama = kata[i];
        var hurufKedua = kata[i + 1];

        if (isKonsonan(hurufPertama) && isVokal(hurufKedua)) {
            sukuKata.push(hurufPertama + hurufKedua);
            i += 2;
        } else if (isKonsonan(hurufPertama) && isKonsonan(hurufKedua)) {
            if (hurufPertama + hurufKedua === 'ng') {
                sukuKata.push('ng');
                i += 2;
            } else {
                sukuKata.push(hurufPertama);
                i++;
            }
        } else {
            sukuKata.push(hurufPertama);
            i++;
        }
    }

    return sukuKata;
}

function isKonsonan(huruf) {
    var konsonan = 'bcdfghjklmnpqrstvwxyz';
    return konsonan.includes(huruf);
}

function isVokal(huruf) {
    var vokal = 'aeiou';
    return vokal.includes(huruf);
}

function tambahkanKata(kata) {
    var sukuKataAkhir = kata.slice(-1);

    switch (sukuKataAkhir) {
                    case 'a':
                        return kata + 'iden';
                    case 'i':
                        return kata + 'pri';
                    case 'e':
                        return kata + 'pre';
                    case 'u':
                        return kata + 'pru';
                    case 'o':
                        return kata + 'pro';
                    case 'g':
                        if (kata.slice(-2) === 'ng') {
                            return 'strengen';
                        }
                        break;
                    case 'b':
                    case 'c':
                    case 'd':
                    case 'f':
                    case 'h':
                    case 'j':
                    case 'k':
                    case 'l':
                    case 'm':
                    case 'n':
                    case 'p':
                    case 'q':
                    case 'r':
                    case 's':
                    case 't':
                    case 'v':
                    case 'w':
                    case 'x':
                    case 'y':
                    case 'z':
                        return kata + 'es';
                    default:
                        return kata;
                }
    return kata;
}

function indoumandana(kalimat) {
    var kataArray = kalimat.split(" ");
    var hasilModifikasi = [];

    kataArray.forEach(function (kata) {
        var sukuKata = pisahSukuKata(kata);
        var sukuKataModifikasi = sukuKata.map(function (suku) {
            return tambahkanKata(suku);
        });

        hasilModifikasi.push(sukuKataModifikasi.join(" "));
    });

    var kalimatHasil = hasilModifikasi.join(" ");
    return kalimatHasil;
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