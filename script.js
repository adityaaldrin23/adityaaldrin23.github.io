function updatePrice() {
    const price = parseInt(document.getElementById("size").value);

    document.getElementById("price").innerText =
        "Rp " + price.toLocaleString("id-ID");
}

function orderWA() {
    const variant = document.getElementById("variant").value;
    const sizeSelect = document.getElementById("size");

    const price = parseInt(sizeSelect.value);
    const sizeText = sizeSelect.options[sizeSelect.selectedIndex].text;

    const message =
`Halo admin
Saya mau order *Haimas Parfume*

Varian : ${variant}
Ukuran : ${sizeText}
Harga  : Rp ${price.toLocaleString("id-ID")}

Apakah masih tersedia?`;

    const phone = "6282310010314";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", updatePrice);
