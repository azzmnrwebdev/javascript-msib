
function getValueInputCalcForm() {
    let calcForm = {};
    calcForm["form"] = document.getElementById('calcForm');
    calcForm["angkaSatu"] = parseFloat(document.getElementById("angka1").value);
    calcForm["angkaDua"] = parseFloat(document.getElementById("angka2").value);
    
    return calcForm;
}

function tambah() {
    let { form, angkaSatu, angkaDua } = getValueInputCalcForm();
    let total;
    if (isNaN(angkaSatu) || isNaN(angkaDua)) alert("Harap masukkan angka!!");
    else total  = angkaSatu + angkaDua;
    form.hasil.value = total;
}

function kurang() {
    let { form, angkaSatu, angkaDua } = getValueInputCalcForm();
    let total;
    if (isNaN(angkaSatu) || isNaN(angkaDua)) alert("Harap masukkan angka!!");
    else total  = angkaSatu - angkaDua;
    form.hasil.value = total;
}

function kali() {
    let { form, angkaSatu, angkaDua } = getValueInputCalcForm();
    let total;
    if (isNaN(angkaSatu) || isNaN(angkaDua)) alert("Harap masukkan angka!!");
    else total  = angkaSatu * angkaDua;
    form.hasil.value = total;
}

function bagi() {
    let { form, angkaSatu, angkaDua } = getValueInputCalcForm();
    let total;
    if (isNaN(angkaSatu) || isNaN(angkaDua)) alert("Harap masukkan angka!!");
    else total  = angkaSatu / angkaDua;
    form.hasil.value = total;
}

function pangkat() {
    let { form, angkaSatu, angkaDua } = getValueInputCalcForm();
    let total;
    if (isNaN(angkaSatu) || isNaN(angkaDua)) alert("Harap masukkan angka!!");
    else total  = Math.pow(angkaSatu, angkaDua);
    form.hasil.value = total;
}