const pembeli = document.getElementById("namaPembeli");
const barang = document.getElementById("namaBarang");
const hargaBrg = document.getElementById("hargaBarang") ;
const jumlhBrg = document.getElementById("jumlahBarang");
const valuta = document.getElementById('valas');

document.getElementById("formKonversi").addEventListener("input", () => {
    if (pembeli.value !== "" && barang.value !== "" && hargaBrg.value !== "" && jumlhBrg.value !== "") valuta.removeAttribute("disabled");
    else valuta.setAttribute("disabled", "");
});

valuta.addEventListener("change", () => {
    const result = hargaBrg.value / (valuta.value * jumlhBrg.value);

    document.getElementById("hasil").innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-text">
                    <b>Data Pembelian</b>
                    <br />Nama Pembeli: ${pembeli.value}
                    <br />Nama Barang: ${barang.value}
                    <br />Harga Barang: Rp. ${hargaBrg.value}
                    <br />Jumlah Barang: ${jumlhBrg.value}
                    <br />Valuta Asing: ${valuta.value}
                    <br />Total Bayar: ${result}
                </p>
            </div>
        </div>
    `;
});