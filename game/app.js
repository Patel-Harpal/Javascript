let userscore=0;
let comscore=0;
const choices=document.querySelectorAll(".choice");
const msgpara=document.querySelector("#msg");
const useerscorepara=document.querySelector("#usescore");
const comscorepara=document.querySelector("#comscore");

const gencomchoice=()=>{
    const option=["rock", "paper", "scissors"];
    const randinx = Math.floor(Math.random()*3);
    return option[randinx];
};
const drawgame=()=>{
    msgpara.innerText="Game was draw,play again";
    msgpara.style.backgroundColor="black";
};

const showwinner = (userwin,userchoice,comchoice) =>{
    if(userwin){
        userscore++;    
        useerscorepara.innerText=userscore;
        msgpara.innerText=`You Win.Your  ${userchoice} beats ${comchoice}`;
        msgpara.style.backgroundColor="green";
    }
    else{
        comscore++;
        comscorepara.innerText=comscore;
        msgpara.innerText=`You Lost. ${comchoice} beats Your ${userchoice}`;
        msgpara.style.backgroundColor="red";
    }
};

const playgame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    const comchoice=gencomchoice();
    console.log("com choice = ",comchoice);

    if(userchoice == comchoice){
        drawgame();
    }
    else{

        let userwin = true;
        if(userchoice === "rock"){
            //scissor,paper
            userwin = comchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = comchoice === "rock" ? true : false;
         }
        else{
            userwin = comchoice === "rock" ? false : true; 
        }
       showwinner(userwin,userchoice,comchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
