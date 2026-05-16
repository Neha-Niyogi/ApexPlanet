/* ─────────── FULL QUESTIONS DATA ─────────── */

const ALL_QUESTIONS = {

general: [

{q:"What is the largest planet in our solar system?", opts:["Saturn","Jupiter","Neptune","Uranus"], ans:1, exp:"Jupiter is the largest planet."},

{q:"How many colors are in a rainbow?", opts:["5","6","7","8"], ans:2, exp:"A rainbow has 7 colors."},

{q:"What gas do plants absorb from atmosphere?", opts:["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"], ans:2, exp:"Plants absorb carbon dioxide."},

{q:"How many legs does a spider have?", opts:["6","8","10","12"], ans:1, exp:"Spiders have 8 legs."},

{q:"What is the hardest natural substance?", opts:["Gold","Iron","Diamond","Quartz"], ans:2, exp:"Diamond is the hardest natural material."},

{q:"Which is the longest river in the world?", opts:["Amazon","Congo","Nile","Yangtze"], ans:2, exp:"The Nile River is the longest river."},

{q:"How many continents are there?", opts:["5","6","7","8"], ans:2, exp:"There are 7 continents."},

{q:"What is the chemical symbol for water?", opts:["WA","H2O","HO","W2O"], ans:1, exp:"H₂O is water."},

{q:"Which animal is called King of Jungle?", opts:["Tiger","Elephant","Lion","Leopard"], ans:2, exp:"Lion is called the king of jungle."},

{q:"How many hours are in a week?", opts:["168","144","196","172"], ans:0, exp:"7 × 24 = 168 hours."},

{q:"Which planet is known as the Red Planet?", opts:["Earth","Mars","Venus","Mercury"], ans:1, exp:"Mars is called the Red Planet."},

{q:"Which ocean is largest?", opts:["Atlantic","Indian","Arctic","Pacific"], ans:3, exp:"Pacific Ocean is largest."},

{q:"Which bird is symbol of peace?", opts:["Crow","Dove","Sparrow","Eagle"], ans:1, exp:"Dove symbolizes peace."},

{q:"How many days are in leap year?", opts:["364","365","366","367"], ans:2, exp:"Leap year has 366 days."},

{q:"Which is fastest land animal?", opts:["Tiger","Horse","Cheetah","Leopard"], ans:2, exp:"Cheetah is fastest land animal."}

],

science: [

{q:"What is the speed of light?", opts:["150k km/s","300k km/s","450k km/s","600k km/s"], ans:1, exp:"Light travels around 300,000 km/s."},

{q:"What is atomic number of Carbon?", opts:["4","6","8","12"], ans:1, exp:"Carbon atomic number is 6."},

{q:"What force keeps planets in orbit?", opts:["Magnetism","Gravity","Friction","Electricity"], ans:1, exp:"Gravity keeps planets in orbit."},

{q:"What is powerhouse of the cell?", opts:["Nucleus","Ribosome","Mitochondria","Vacuole"], ans:2, exp:"Mitochondria produces energy."},

{q:"Which element has symbol Fe?", opts:["Fluorine","Iron","Francium","Fermium"], ans:1, exp:"Fe means Iron."},

{q:"What is most abundant gas?", opts:["Oxygen","Carbon Dioxide","Nitrogen","Argon"], ans:2, exp:"Nitrogen forms 78% atmosphere."},

{q:"DNA stands for?", opts:["Deoxyribonucleic Acid","Dual Nucleic Atom","Dioxin Acid","None"], ans:0, exp:"DNA full form is Deoxyribonucleic Acid."},

{q:"How many bones in adult body?", opts:["196","206","216","226"], ans:1, exp:"Adults have 206 bones."},

{q:"Closest planet to Sun?", opts:["Venus","Earth","Mars","Mercury"], ans:3, exp:"Mercury is closest."},

{q:"What is H2O?", opts:["Salt","Water","Sugar","Acid"], ans:1, exp:"H₂O means water."},

{q:"What gas do humans breathe?", opts:["Nitrogen","Oxygen","Hydrogen","Carbon"], ans:1, exp:"Humans breathe oxygen."},

{q:"Which vitamin comes from sunlight?", opts:["A","B","C","D"], ans:3, exp:"Vitamin D comes from sunlight."},

{q:"What organ pumps blood?", opts:["Liver","Heart","Lung","Brain"], ans:1, exp:"Heart pumps blood."},

{q:"Which blood group is universal donor?", opts:["A","B","AB","O Negative"], ans:3, exp:"O Negative is universal donor."},

{q:"Which planet has rings?", opts:["Earth","Saturn","Mars","Venus"], ans:1, exp:"Saturn has famous rings."}

],

history: [

{q:"In which year did WWII end?", opts:["1943","1944","1945","1946"], ans:2, exp:"WWII ended in 1945."},

{q:"First US President?", opts:["John Adams","Jefferson","Franklin","George Washington"], ans:3, exp:"George Washington was first US president."},

{q:"Who painted Mona Lisa?", opts:["Michelangelo","Raphael","Leonardo da Vinci","Caravaggio"], ans:2, exp:"Leonardo painted Mona Lisa."},

{q:"Berlin Wall fell in?", opts:["1987","1988","1989","1991"], ans:2, exp:"Berlin Wall fell in 1989."},

{q:"Who first walked on moon?", opts:["Buzz Aldrin","Yuri Gagarin","Neil Armstrong","John Glenn"], ans:2, exp:"Neil Armstrong first walked on moon."},

{q:"French Revolution began in?", opts:["1776","1789","1799","1815"], ans:1, exp:"French Revolution started in 1789."},

{q:"Titanic sank in?", opts:["1910","1912","1914","1916"], ans:1, exp:"Titanic sank in 1912."},

{q:"Ancient Olympics began in?", opts:["Rome","Egypt","Greece","Persia"], ans:2, exp:"Olympics started in Greece."},

{q:"Who discovered America?", opts:["Columbus","Magellan","Cook","Marco Polo"], ans:0, exp:"Christopher Columbus discovered America."},

{q:"Statue of Liberty gifted by?", opts:["UK","Italy","Spain","France"], ans:3, exp:"France gifted Statue of Liberty."},

{q:"Who invented telephone?", opts:["Newton","Bell","Tesla","Edison"], ans:1, exp:"Alexander Graham Bell invented telephone."},

{q:"Great Wall belongs to?", opts:["Japan","India","China","Korea"], ans:2, exp:"Great Wall is in China."},

{q:"Who was called Iron Man of India?", opts:["Nehru","Patel","Gandhi","Bose"], ans:1, exp:"Sardar Patel was Iron Man."},

{q:"Who wrote Ramayana?", opts:["Vyasa","Valmiki","Kalidas","Tulsi"], ans:1, exp:"Valmiki wrote Ramayana."},

{q:"Who discovered gravity?", opts:["Einstein","Newton","Galileo","Tesla"], ans:1, exp:"Newton discovered gravity."}

]

};

/* ─────────── STATE ─────────── */

let selectedCat='general';
let selectedDiff='easy';
let numQ=10;

let questions=[];
let current=0;
let score=0;

let timerInterval=null;
let timeLeft=20;

let userAnswers=[];
let timeTaken=[];

/* ─────────── SELECTORS ─────────── */

function selectCat(el){

document.querySelectorAll('.cat-card')
.forEach(c=>c.classList.remove('active'));

el.classList.add('active');

selectedCat=el.dataset.cat;

}

function selectDiff(el){

document.querySelectorAll('.diff-btn[data-diff]')
.forEach(b=>b.classList.remove('active'));

el.classList.add('active');

selectedDiff=el.dataset.diff;

}

function selectNum(el){

document.querySelectorAll('.diff-btn[data-num]')
.forEach(b=>b.classList.remove('active'));

el.classList.add('active');

numQ=parseInt(el.dataset.num);

}

/* ─────────── START QUIZ ─────────── */

function startQuiz(){

const pool=[...ALL_QUESTIONS[selectedCat]];

/* PERFECT RANDOM SHUFFLE */
for(let i=pool.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1));

[pool[i],pool[j]]=[pool[j],pool[i]];

}

questions=pool.slice(0,Math.min(numQ,pool.length));

current=0;
score=0;

userAnswers=[];
timeTaken=[];

document.getElementById('home-section').style.display='none';
document.getElementById('result-section').style.display='none';
document.getElementById('quiz-section').style.display='block';

document.getElementById('cat-badge').textContent=
selectedCat.toUpperCase();

loadQ();

}

/* ─────────── LOAD QUESTION ─────────── */

function loadQ(){

clearInterval(timerInterval);

const q=questions[current];

document.querySelector('.q-card').style.opacity=0;

setTimeout(()=>{

document.getElementById('q-text').textContent=q.q;

document.querySelector('.q-card').style.opacity=1;

},150);

document.getElementById('q-num').textContent=
`Q ${current+1} / ${questions.length}`;

document.getElementById('score-display').textContent=
`Score: ${score}`;

document.getElementById('prog-fill').style.width=
`${((current+1)/questions.length)*100}%`;

document.getElementById('feedback').className='feedback-bar';

document.getElementById('btn-next').style.display='none';

const opts=document.getElementById('options');

opts.innerHTML='';

const letters=['A','B','C','D'];

q.opts.forEach((o,i)=>{

const btn=document.createElement('button');

btn.className='opt';

btn.innerHTML=
`<span class="opt-letter">${letters[i]}</span>${o}`;

btn.onclick=()=>answer(i);

opts.appendChild(btn);

});

startTimer();

}

/* ─────────── TIMER ─────────── */

function startTimer(){

timeLeft=20;

const pill=document.getElementById('timer-pill');

pill.className='timer-pill';

document.getElementById('timer-text').textContent=timeLeft;

timerInterval=setInterval(()=>{

timeLeft--;

document.getElementById('timer-text').textContent=timeLeft;

if(timeLeft<=5){

pill.className='timer-pill urgent';

}

if(timeLeft<=0){

clearInterval(timerInterval);

autoTimeout();

}

},1000);

}

/* ─────────── TIMEOUT ─────────── */

function autoTimeout(){

const q=questions[current];

userAnswers.push({
q:q.q,
correct:q.opts[q.ans],
given:'No Answer',
ok:false
});

timeTaken.push(20);

lockOptions(-1,q.ans);

const fb=document.getElementById('feedback');

fb.className='feedback-bar wrong show';

fb.innerHTML=
`⏰ Time's up! Correct answer: <strong>${q.opts[q.ans]}</strong>`;

document.getElementById('btn-next').style.display='block';

}

/* ─────────── ANSWER ─────────── */

function answer(i){

clearInterval(timerInterval);

const q=questions[current];

const correct=i===q.ans;

if(correct){

score++;

document.getElementById('correctSound').play();

}else{

document.getElementById('wrongSound').play();

}

userAnswers.push({
q:q.q,
correct:q.opts[q.ans],
given:q.opts[i],
ok:correct
});

timeTaken.push(20-timeLeft);

lockOptions(i,q.ans);

document.getElementById('score-display').textContent=
`Score: ${score}`;

const fb=document.getElementById('feedback');

if(correct){

fb.className='feedback-bar correct show';

fb.innerHTML=`✅ Correct! ${q.exp}`;

}else{

fb.className='feedback-bar wrong show';

fb.innerHTML=`❌ Wrong! Correct answer: <strong>${q.opts[q.ans]}</strong>`;

}

document.getElementById('btn-next').style.display='block';

}

/* ─────────── LOCK OPTIONS ─────────── */

function lockOptions(chosen,correct){

document.querySelectorAll('.opt')
.forEach((btn,i)=>{

btn.disabled=true;

if(i===correct){

btn.classList.add('correct');

}
else if(i===chosen){

btn.classList.add('wrong');

}

});

}

/* ─────────── NEXT QUESTION ─────────── */

function nextQ(){

current++;

if(current>=questions.length){

showResult();

}
else{

loadQ();

}

}

/* ─────────── RESULT ─────────── */

function showResult(){

clearInterval(timerInterval);

document.getElementById('quiz-section').style.display='none';

document.getElementById('result-section').style.display='block';

const total=questions.length;

const pct=score/total;

const avg=Math.round(
timeTaken.reduce((a,b)=>a+b,0)/timeTaken.length
);

document.getElementById('r-score').innerHTML=
`${score}<span class="result-denom">/${total}</span>`;

document.getElementById('s-correct').textContent=score;

document.getElementById('s-wrong').textContent=
total-score;

document.getElementById('s-time').textContent=
`${avg}s`;

if(pct>=.8){

confetti({
particleCount:150,
spread:90,
origin:{y:.6}
});

}

if(pct===1){

document.getElementById('r-emoji').textContent='🏆';
document.getElementById('r-msg').textContent='Perfect Score!';
document.getElementById('r-sub').textContent='Absolutely flawless performance.';

}
else if(pct>=.7){

document.getElementById('r-emoji').textContent='🎉';
document.getElementById('r-msg').textContent='Excellent!';
document.getElementById('r-sub').textContent='Amazing work.';

}
else{

document.getElementById('r-emoji').textContent='📚';
document.getElementById('r-msg').textContent='Keep Practicing!';
document.getElementById('r-sub').textContent='You are improving every time.';

}

const list=document.getElementById('review-list');

list.innerHTML='';

userAnswers.forEach(a=>{

const div=document.createElement('div');

div.className='review-item';

div.innerHTML=
`
<div>
<div class="review-q">${a.q}</div>

<div class="review-a">

Your Answer:
<span style="color:${a.ok?'var(--green)':'var(--red)'}">
${a.given}
</span>

${!a.ok ? `
&nbsp; | &nbsp;
Correct:
<span style="color:var(--green)">
${a.correct}
</span>` : ''}

</div>

</div>
`;

list.appendChild(div);

});

window.scrollTo({
top:0,
behavior:'smooth'
});

}

/* ─────────── HOME ─────────── */

function showHome(){

clearInterval(timerInterval);

document.getElementById('quiz-section').style.display='none';

document.getElementById('result-section').style.display='none';

document.getElementById('home-section').style.display='block';

}

/* ─────────── DARK MODE ─────────── */

function toggleTheme(){

document.body.classList.toggle('dark');

}

/* ─────────── PARALLAX ─────────── */

document.addEventListener('mousemove',(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

document.querySelectorAll('.blur')
.forEach((b,i)=>{

const speed=(i+1)*20;

b.style.transform=
`translate(${x*speed}px,${y*speed}px)`;

});

});
