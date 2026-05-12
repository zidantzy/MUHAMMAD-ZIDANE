const form = document.getElementById("formRegistrasi");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Data berhasil disimpan!");

});


// khusus NIK hanya angka
document.getElementById("nik").addEventListener("input", function(){

    this.value = this.value.replace(/[^0-9]/g, '');

});