function hitung() {

    let operasi = document.getElementById("operasi").value;

    try {

        let hasil = eval(operasi);

        document.getElementById("hasil").innerHTML =
            "Hasil = " + hasil;

    }

    catch (error) {

        document.getElementById("hasil").innerHTML =
            "Terjadi kesalahan input!";

    }

}