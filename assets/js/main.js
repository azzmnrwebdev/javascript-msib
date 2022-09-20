// deklarasi id tbody
let dataBody = document.getElementById("dataGempa");

// class gempa
class Gempa {
    // membuat variable lokasi dan skala
    constructor(lokasi, skala) {
        this.lokasi = lokasi;
        this.skala = skala;
    }

    // membuat function dampak nya sesuai besaran skala nya
    dampak() {
        if (this.skala > 0 && this.skala <= 2) return "tidak terasa";
        else if (this.skala > 2 && this.skala <= 4) return "bangunan retak - retak";
        else if (this.skala > 4 && this.skala <= 6) return "bangunan roboh";
        else if (this.skala > 6) return "bangunan roboh dan berpotensi tsunami";
    }
}

// membuat 10 object gempa
const g1 = new Gempa('Bandung', 6.5); 
const g2 = new Gempa('Surabaya', 1);
const g3 = new Gempa('Bogor', 2.6);
const g4 = new Gempa('Bekasi', 5.4);
const g5 = new Gempa('Cikarang', 2);
const g6 = new Gempa('Sukabumi', 7.2);
const g7 = new Gempa('Lombok', 3.2);
const g8 = new Gempa('Pengandaran', 1.7); 
const g9 = new Gempa('Bali', 2.4);
const g10 = new Gempa('Solo', 4.2);

// menyimpan object gempa ke dalam array
const arrGempa = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

// melakukan looping for of pada array 
let number = 1;
for (const data of arrGempa) {
    dataBody.innerHTML += `
        <tr>
            <td>${number++}</td>
            <td>${data.lokasi}</td>
            <td>${data.skala}</td>
            <td>${data.dampak()}</td>
        </tr>`;
}