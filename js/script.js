// untuk awal masuk nama
let name = prompt ("Hai, dengan siapa ini?","");
document.getElementById("nametamu").innerText=name

// untuk banner slide

let slideIndex = 1;
showSlides(1);

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    const slides = document.getElementsByClassName("slidebanner");
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex].style.display = "block";  
}

// Untuk tabel dan isian
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Tabel input
    // input data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // tabel hasil
    // untuk waktu
    const currentTime = new Date().toLocaleString();

    // hasil inputan
    document.getElementById('currentTime').textContent = `Current time : ${currentTime}`;
    document.getElementById('outputName').textContent = `Nama : ${name}`;
    document.getElementById('outputemail').textContent = `Email : ${email}`;
    document.getElementById('outputphone').textContent = `Telepon/HP : ${phone}`;
    document.getElementById('outputMessage').textContent = `Pesan : ${message}`;
});

