const quizdb =[
    {
        question: "Full form of HTML?",
        a: "Hyper Text Markup Language",
        b: "Hyper Text makeup Language",
        c: "Hyper terminal makeup Language",
        d:"Hyper text markup Lan",
        ans:"ans1"

    },
    {
        question: "Full form of CSS?",
        a: "Hyper Text Markup Language",
        b: "Cascading style sheet",
        c: "Cascading sheet style",
        d:"Cascading source system",
        ans:"ans2"

    },
    {
        question: "Full form of JS?",
        a: "Java software",
        b: "Java based application",
        c: "Java system library",
        d:"Java script",
        ans:"ans4"

    },
    {
        question: "Full form of CPP",
        a: "C programming language",
        b: "Comercial programming prototype",
        c: "C++",
        d:"Cisco packet product",
        ans:"ans3"

    },
    {
        question: "In which year of First World War Germany declared war on Russia and France?",
        a: "1914",
        b: "1915",
        c: "1916",
        d:"1917",
        ans:"ans1"

    }
]


const question = document.querySelector('.question');
const opt1 = document.querySelector("#opt1");
const opt2 = document.querySelector("#opt2");
const opt3 = document.querySelector("#opt3");
const opt4 = document.querySelector("#opt4");
const submit = document.querySelector("#submit");
const next = document.querySelector("#nxt");

const answers = document.querySelectorAll('.answer');
const showscr = document.querySelector('#showscr');

let score=0;
let count =0;
let indx=0;
const loadques=()=>{

    
        m = Math.floor(Math.random()*5);
        indx=m;
    
    let ques = quizdb[indx];
    question.innerHTML=`Q${count+1}. ${(ques.question)}`;
    opt1.innerHTML = (ques.a);
    opt2.innerHTML = (ques.b);
    opt3.innerHTML = (ques.c);
    opt4.innerHTML = (ques.d);

}

loadques();


const getchkans=()=>{
    let ans ;
    answers.forEach(curranselmt => {
        if(curranselmt.checked){
            ans = curranselmt.id;
        }
    });
    return ans;
}
const deselectall= ()=>{
    answers.forEach(curranselmt => {
        if(curranselmt.checked){
            curranselmt.checked=false;
        }
    });
}


next.addEventListener('click' , ()=>{
    const chkans = getchkans();
    console.log(chkans);

    if(chkans===quizdb[m].ans){
        score++;
    }
    console.log(score);

    count++;
    deselectall();
    if(count<quizdb.length){
        loadques();
    }
    else{
        alert('You have done all the questions, please click on Submit to view your score.')
    }
});
submit.addEventListener('click' , ()=>{
    const chkans = getchkans();
    console.log(chkans);

    if(chkans===quizdb[m].ans){
        score++;
    }
    console.log(score);

    count++;
    deselectall();
    // if(count<quizdb.length){
    //     loadques();
    // }
    // else{

        showscr.innerHTML=`
            <h3> Your Final Score is ${score} / ${quizdb.length} </h3>
            <button class="btn" onclick = "location.reload()"> Play Again </button>
        `;
        showscr.classList.remove('scrclass')

    // }
})
// let m = Math.floor(Math.random()*4);
// let n = quizdb[m];
// console.log(m);
// console.log(n);