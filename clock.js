let myName = document.querySelector('#myName')

myName.innerHTML = prompt("Lütfen İsminizi Giriniz.")



function saatGuncelle() {
    var guncel = document.querySelector('#myClock'); 
    var tarih = new Date();

    var saat = tarih.getHours(); 
    var dakika = tarih.getMinutes(); 
    var saniye = tarih.getSeconds(); 

    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    
    var gun = gunler[tarih.getDay()];

    var zaman = `${saat}:${dakika}:${saniye}, ${gun}`;

    guncel.innerHTML = zaman;

    setTimeout(saatGuncelle, 1000); 
}
saatGuncelle(); 