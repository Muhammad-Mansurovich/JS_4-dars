/*
if, else if, else => (agar, yoki bo'lmasa, u holda)
*/
/*if ("salom" == "salom"){
    console.log("Ular teng!");
}
else{
    console.log("Ular teng emas!");
}*/
/*if (44 == 45){
    console.log("Sonlar teng!");
}
else{
    console.log("Sonlar teng emas!");
}*/
/*if (44==45){
    console.log("44ning teng soni bor");
}
else if(44>=43){
    console.log("44dan kichik son bor")
}
else{
    console.log("Biror shart bajarilmadi!")
}*/
/*let a = "45";
let b = 45;
if (a===b){
    console.log("Ular teng!")
}
else{
    console.log("Ular teng emas!")
}*/

/* JSda HTML teglar bilan ishlash */
/*
let headTag = document.head;
let bodyTag = document.body;
let havola = document.documentURI;
let formalar = document.forms;
let rasmlar = document.images;
let havolalar = document.links;
console.log(havolalar);
*/

/* Events in JS */
function battonniBos(){
    alert("Siz buttonni bosdingiz!");
}
function battonniIkkiMartaBos(){
    alert("Siz buttonni 2 marta bosdingiz!");
}
function tanlash(event){
    alert("Siz " + event.target.value + "ni tanladingiz!");
}
function inputgaBosish(){
    console.log("Inputga bosildi!");
}
function inputdanChiqish(){
    console.log("Inputdan chiqildi!");
}
function yozish(event){
    console.log(event.target.value);
}
/*document.querySelector(".text").addEventListener("copy",function (event){
    console.log("Diqqat! Sizdan " + event.target.value + " nomli fayl ko'chirilyapti!");
})*/
function harakatlanish(e){
    console.log(e.clientX,e.clientY);
}
function kirish(){
    alert("Hududga kirildi!");
}
function chiqish(){
    alert("Hududdan chiqildi!");
}





