// ===============================
// ELEMENTOS
// ===============================

const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");

const destinationScreen =
document.getElementById("destinationScreen");

const memorySection =
document.getElementById("memorySection");

const memoryImage =
document.getElementById("memoryImage");

const memoryTitle =
document.getElementById("memoryTitle");

const memoryText =
document.getElementById("memoryText");

const prevMemory =
document.getElementById("prevMemory");

const nextMemory =
document.getElementById("nextMemory");

const finalScreen =
document.getElementById("finalScreen");

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

const loveMessage =
document.getElementById("loveMessage");

const music =
document.getElementById("music");

const counter =
document.getElementById("counter");
const memoryBar =
document.getElementById("memoryBar");

const memoryProgress =
document.getElementById("memoryProgress");

// ===============================
// CONTADOR
// ===============================

function updateCounter() {

    const startDate = new Date(2025, 11, 14, 0, 0, 0);
    const now = new Date();

    let months =
        (now.getFullYear() - startDate.getFullYear()) * 12 +
        (now.getMonth() - startDate.getMonth());

    let comparisonDate = new Date(startDate);

    comparisonDate.setMonth(
        comparisonDate.getMonth() + months
    );

    if (comparisonDate > now) {
        months--;

        comparisonDate = new Date(startDate);

        comparisonDate.setMonth(
            comparisonDate.getMonth() + months
        );
    }

    let remaining =
        now - comparisonDate;

    const days =
        Math.floor(
            remaining /
            (1000 * 60 * 60 * 24)
        );

    remaining -=
        days *
        1000 *
        60 *
        60 *
        24;

    const hours =
        Math.floor(
            remaining /
            (1000 * 60 * 60)
        );

    remaining -=
        hours *
        1000 *
        60 *
        60;

    const minutes =
        Math.floor(
            remaining /
            (1000 * 60)
        );

    remaining -=
        minutes *
        1000 *
        60;

    const seconds =
        Math.floor(
            remaining /
            1000
        );

  counter.innerHTML = `

<div class="counter-box">
    <span>${months}</span>
    <small>Meses</small>
</div>

<div class="counter-box">
    <span>${days}</span>
    <small>Dias</small>
</div>

<div class="counter-box">
    <span>${hours}</span>
    <small>Horas</small>
</div>

<div class="counter-box">
    <span>${minutes}</span>
    <small>Min</small>
</div>

<div class="counter-box">
    <span>${seconds}</span>
    <small>Seg</small>
</div>

`;
}
updateCounter();
setInterval(updateCounter, 1000);
// ===============================
// MEMÓRIAS
// ===============================

const memories = [

{
title:"Como nos conhecemos",
text:"Sem perceber, no meu lugar favorito eu estava conhecendo a mulher da minha vida",
image:"img/foto1.jpeg"
},

{
title:"Como nos conhecemos",
text:"Vale lembrar que antes de tudo eu te desmaiei😊😉",
image:"img/foto2.jpeg"
},

{
title:"Primeira cartinha",
text:"Fiquei tão feliz quando ganhei, fiquei lendo por vários dias seguidos e até hoje eu fico vendo, faz mais mor, por favorzinho",
image:"img/foto3.jpeg"
},

{
title:"Cartinha",
text:"Faz maiiiisssssssssssss😔😔😔😔😔",
image:"img/foto4.jpeg"
},

{
title:"Pedido de namoro",
text:"Escolhendo as alianças e encomendando as flores, escolhi rosa porque você gosta 😉😉",
image:"img/foto5.jpeg"
},

{
title:"Pedido de namoro",
text:"O tão esperado dia do pedido, tava tremendo mais que vara verde, mas deu bom, agora só sai de namorada pra esposa",
image:"img/fotos.jpeg"
},

{
title:"Pedido de namoro",
text:"Foto logo depois do pedido, avisando a rapaziadinha que deu tudo certo",
image:"img/foto6.jpeg"
},
{
title:"Agora as minhas fotos favoritas",
text:"Algumas não tem motivo, só gosto mesmo",
image:"img/fotoss.jpeg"
},
{
title:"Olha essa perfeição",
text:"Meu pai amado, que coisa mais linda, um pitélzinho",
image:"img/foto7.jpeg"
},

{
title:"👍👍",
text:"Vela pra flor",
image:"img/foto8.jpeg"
},

{
title:"👣👣",
text:"Pé lindo",
image:"img/foto9.jpeg"
},

{
title:"É os D",
text:"Aqui você tava começando a manjar nos grau",
image:"img/foto10.jpeg"
},

{
title:"😛😛",
text:"Jogador caro não olha pra foto",
image:"img/foto11.jpeg"
},

{
title:"💏😘",
text:"",
image:"img/foto12.jpeg"
},

{
title:"Naquele naipão cabuloso",
text:"",
image:"img/foto13.jpeg"
},

{
title:"Sorvetinho😋",
text:"",
image:"img/foto14.jpeg"
},

{
title:"Que feio ❌❌",
text:"Mostrando o dedo",
image:"img/foto15.jpeg"
},

{
title:"🤔",
text:"Meio doidinha minha princesa",
image:"img/foto16.jpeg"
},

{
title:"Soninho",
text:"Tão bom espreguiçar",
image:"img/foto17.jpeg"
},

{
title:"Melzinha",
text:"",
image:"img/foto18.jpeg"
},

{
title:"Minha nossa💪",
text:"",
image:"img/foto19.jpeg"
},

{
title:"Que gatinha",
text:"Acabou😔",
image:"img/foto20.jpeg"
},

];

let currentMemory = 0;
let typingTimer;
function showMemory(index){

    // Cancela a animação anterior
    clearInterval(typingTimer);

    // Atualiza título
    memoryTitle.innerText = memories[index].title;

    // Limpa o texto
    memoryText.innerHTML = "";

    // Esconde a imagem
    memoryImage.style.opacity = "0";
    memoryImage.style.transform = "scale(.97)";

    setTimeout(()=>{

        memoryImage.src = memories[index].image;

        memoryImage.onload = ()=>{

            memoryImage.style.opacity = "1";
            memoryImage.style.transform = "scale(1)";

        };

    },200);

    // Escreve o texto
    typeWriter(memories[index].text, memoryText);

    // Barra de progresso
    const percent = ((index + 1) / memories.length) * 100;

    memoryBar.style.width = percent + "%";

    memoryProgress.innerHTML =
    `<strong>${index + 1}</strong> de <strong>${memories.length}</strong> memórias ❤️`;

    // Botão voltar
    prevMemory.style.display = index === 0 ? "none" : "flex";

}


// ===============================
// INÍCIO DA VIAGEM
// ===============================

startBtn.addEventListener("click",()=>{

music.play();

intro.classList.add("hidden");

destinationScreen.classList.remove("hidden");

setTimeout(()=>{

destinationScreen.classList.add("hidden");

memorySection.classList.remove("hidden");

showMemory(0);

},3000);

});

// ===============================
// PRÓXIMA MEMÓRIA
// ===============================

nextMemory.addEventListener("click",()=>{

    currentMemory++;

    if(currentMemory < memories.length){

        showMemory(currentMemory);

    }else{

   
      memorySection.classList.add("hidden");

destinationScreen.classList.remove("hidden");

destinationScreen.innerHTML=`

<div class="destinationCard">

<h2>Nossa viagem chegou ao fim...</h2>

</div>

`;

setTimeout(()=>{

destinationScreen.innerHTML=`

<div class="destinationCard">

<h2>Mas nossa história...</h2>

</div>

`;

},2000);

setTimeout(()=>{

destinationScreen.innerHTML=`

<div class="destinationCard">

<h2>...está só começando. ❤️</h2>

</div>

`;

},4000);

setTimeout(()=>{

destinationScreen.classList.add("hidden");

finalScreen.classList.remove("hidden");

},6000);

    }

});
prevMemory.addEventListener("click",()=>{

    if(currentMemory > 0){

        currentMemory--;

        showMemory(currentMemory);

    }

});

// ===============================
// BOTÃO SIM
// ===============================

yesBtn.addEventListener("click",()=>{

finalScreen.classList.add("hidden");

loveMessage.classList.remove("hidden");

hearts();
});

// ===============================
// BOTÃO NÃO FUGINDO
// ===============================

noBtn.addEventListener("mouseover",()=>{

const x =
Math.random()*300 - 150;

const y =
Math.random()*200 - 100;

noBtn.style.left =
x + "px";

noBtn.style.top =
y + "px";

});

// ===============================
// UNIVERSO
// ===============================

const canvas =
document.getElementById("space");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

let stars = [];

const starColors = [
"#ffffff",
"#ffd1ec",
"#79c9ff"
];

for(let i=0;i<900;i++){

stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

z:Math.random()*canvas.width,

color:
starColors[
Math.floor(
Math.random()*starColors.length
)
]

});

}

function drawNebula(){

const gradient =
ctx.createRadialGradient(

canvas.width*0.35,
canvas.height*0.35,
50,

canvas.width*0.35,
canvas.height*0.35,
800

);

gradient.addColorStop(
0,
"rgba(255,120,200,.15)"
);

gradient.addColorStop(
0.5,
"rgba(100,180,255,.08)"
);

gradient.addColorStop(
1,
"rgba(0,0,0,0)"
);

ctx.fillStyle = gradient;

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

}

function animate(){

ctx.fillStyle="black";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

drawNebula();

let cx =
canvas.width/2;

let cy =
canvas.height/2;

stars.forEach(star=>{

star.z -= 3;

if(star.z <= 0){

star.z =
canvas.width;

star.x =
Math.random()*canvas.width;

star.y =
Math.random()*canvas.height;

}

let sx =
(star.x-cx)*
(canvas.width/star.z)
+cx;

let sy =
(star.y-cy)*
(canvas.width/star.z)
+cy;

let size =
(1-star.z/canvas.width)
*2.5;

ctx.fillStyle =
star.color;

ctx.beginPath();

ctx.arc(
sx,
sy,
size,
0,
Math.PI*2
);

ctx.fill();

});

requestAnimationFrame(
animate
);

}

animate();

function typeWriter(text, element){

    clearInterval(typingTimer);

    element.innerHTML = "";

    let i = 0;

    typingTimer = setInterval(()=>{

        if(i >= text.length){
            clearInterval(typingTimer);
            return;
        }

        element.innerHTML += text.charAt(i);

        i++;

    },20);

}
function hearts(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.className="heartRain";

        heart.style.left=Math.random()*100+"vw";

        heart.style.animationDuration=
        (3+Math.random()*3)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },6000);

    }

}
// ===============================
// RESPONSIVO
// ===============================

window.addEventListener(
"resize",
()=>{

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}
);
