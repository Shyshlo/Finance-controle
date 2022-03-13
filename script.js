

let text = "Let's calculate your dream salary?";
let i = 0;
let speed = 150;

function letters() {
    if (i < text.length) {
        document.querySelector('.page1title').textContent += text.charAt(i);
        i++;
        setTimeout(letters, speed);
    }
}
letters();

//Далее создаем ф-ю которая делает видимой страницу 2, т.к. в css display none
const page2 = document.querySelector('.pagetwo');
const btnpage1 = document.querySelector('.btnpage1');
btnpage1.addEventListener('click', counter);

function counter (){
    page2.style.display = 'block';
};
//Далее по нажатию на кнопку менялся фон - картинка, в css создаем класс changeimage 
btnpage1.addEventListener('click', function(){
    document.body.classList.add('changeimage');
});

//Далее создаем ф-ю, чтобы вопрос и кнопка исчезали
const stars = document.querySelector('.stars');
const page1 = document.querySelector('.page1');
btnpage1.addEventListener('click', disappeartitle);


function disappeartitle (){
    page1.style.display = 'none';
    btnpage1.style.display = 'none';
    stars.style.display = 'none';
};




//Далее пишем функцию, к-я посчитает введенные в input данные
const button = document.querySelector('#Calculate');
button.addEventListener('click', calculateAmount);


function calculateAmount(e){
e.preventDefault();
const house = document.querySelector('#house').value;
//perseInt - переводит строку в целое число = получилось сложение далее
const food = document.querySelector('#food').value;
const education = document.querySelector('#education').value;
const health =  document.querySelector('#health').value;
const auto = document.querySelector('#auto').value;
const shopping = document.querySelector('#shopping').value;
const relax = document.querySelector('#relax').value;
const trips = document.querySelector('#trips').value;

const knowledge =  document.querySelector('#knowledge').value;

//????????????????Почему  не работате if не выдае ошибку

if (house == "" || food == "" || education == "" || health == "" || trips == "" || auto == "" || shopping == "" || relax == "") {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter  your amount!'
      })
}
//для того, чтобы не было конкатенации, нужно записать формулы с делением!!
let percentknowledge = (house/1 + food/1 + health/1 + auto/1 + shopping/1 + relax/1 + trips/1) * knowledge;
let amountPerDay = (house/1 + food/1 + education/1 + health/1 + auto/1 + shopping/1 + relax/1 + trips/1) + percentknowledge;
let amountPerWeek = amountPerDay * 7;
let amountPerMonth = amountPerDay * 30;

//форматирует число до цеорго с неск знаками после запятой
amountPerDay = amountPerDay.toFixed(2);
amountPerWeek = amountPerWeek.toFixed(2);
amountPerMonth = amountPerMonth.toFixed(2);



document.querySelector('#perDay').textContent = amountPerDay;
document.querySelector('#perWeek').textContent = amountPerWeek;
document.querySelector('#perMonth').textContent = amountPerMonth;
}
const audio = document.querySelector('.myAudio');
button.addEventListener('click', playMusic);
function playMusic(){
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }
}
//Далее показываем выпадающий список
const buttonknowledge = document.querySelector('#addKnowledge');
buttonknowledge.addEventListener('click', showKnowledge);
 function showKnowledge(e) {
     e.preventDefault();
     knowledge.style.display = 'block';
 }

// по клику на gif появляется картинка
const dreams = document.querySelector('.dreams ');
 const lastpicture = document.querySelector('.lastpicture');
lastpicture.addEventListener('click',function(){
document.body.classList.add('dreams');
})



//делаем невидимым container с формой
const container = document.querySelector('.container');
lastpicture.addEventListener('click',function(){
    container.style.display = 'none';
})







