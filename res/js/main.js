const cookie = document.getElementById('Cookie');
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');
const count_text = document.getElementById('count_text');
const farm1img = document.getElementById('farm1img');
const farm2img = document.getElementById('farm2img');
const farm3img = document.getElementById('farm3img');

let cookie_data = 0;
let cookieEarn = 1;
let clickPrice = 100;
let farm1 = 500;
let farm2 = 2000;
let farm3 = 5000;

let farm1Earn = 0;
let farm2Earn = 0;
let farm3Earn = 0;

let farm1auto;
let farm2auto;
let farm3auto;


cookie.onclick = () =>{
    cookie_data += cookieEarn;
    count_text.innerText = "Cookies: " +cookie_data;
}

btn1.onclick = () =>{
    if(cookie_data>=clickPrice){
        cookie_data -= clickPrice;
        count_text.innerText = "Cookies: " +cookie_data;
        cookieEarn += 2;
        clickPrice += 150;
        btn1.innerHTML = "Clicker upgrade<br>" +clickPrice;
    }
}

btn2.onclick = () =>{
    if(cookie_data>=farm1){
        cookie_data -= farm1;
        count_text.innerText = "Cookies: " +cookie_data;
        farm1Earn += 50;
        clearInterval(farm1auto);
        farm1auto = setInterval(() => {
            cookie_data += farm1Earn;
            count_text.innerText = "Cookies: " +cookie_data;
        }, 2000);
        farm1 += 500;
        btn2.innerHTML = "Louka upgrade<br>" +farm1;
        farm1img.style.opacity = "1";
    }
}

btn3.onclick = () =>{
    if(cookie_data>=farm2){
        cookie_data -= farm2;
        count_text.innerText = "Cookies: " +cookie_data;
        farm2Earn += 500;
        clearInterval(farm2auto);
        farm2auto = setInterval(() => {
            cookie_data += farm2Earn;
            count_text.innerText = "Cookies: " +cookie_data;
        }, 2000);
        farm2 += 5000;
        btn3.innerHTML = "Babiččino království upgrade<br>" +farm2;
        farm2img.style.opacity = "1";
    }
}

btn4.onclick = () =>{
    if(cookie_data>=farm3){
        cookie_data -= farm3;
        count_text.innerText = "Cookies: " +cookie_data;
        farm3Earn += 1000;
        clearInterval(farm3auto);
        farm3auto = setInterval(() => {
            cookie_data += farm3Earn;
            count_text.innerText = "Cookies: " +cookie_data;
        }, 2000);
        farm3 += 9000;
        btn4.innerHTML = "Důl otroků upgrade<br>" +farm3;
        farm3img.style.opacity = "1";
    }
}

function cheats(){
    cookie_data += 10000;
    count_text.innerText = "Cookies: " +cookie_data;
}

cheats()