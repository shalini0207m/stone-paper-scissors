const btnEle = document.querySelectorAll("button")
const userScoreEle = document.getElementById("user-score")
const compScoreEle = document.getElementById("comp-score")
const resultEle = document.getElementById("result")

let userScore = 0
let compScore = 0

btnEle.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        // console.log("you clicked on ", btn.id);
        // console.log("Computer Choice" , compChoice());
        const result = playRound(btn.id,compChoice())
        // console.log(result);
        resultEle.textContent = result
        
    })

})

function compChoice(){
    const choices = ["rock","paper", "scissor"]
    const randomChoice = Math.floor(Math.random()*choices.length)
    return choices[randomChoice]
}
 function playRound(userSelection, compSelecion){
    if(userSelection === compSelecion){
        return "It's a Tie!"
    }else if(
        (userSelection === "rock" && compSelecion === "scissor") ||
         (userSelection === "paper" && compSelecion === "rock") ||
          (userSelection === "scissor" && compSelecion === "paper")
    ){
        userScore++;
        userScoreEle.textContent = userScore
        return `You Won! ${userSelection} beats ${compSelecion}`
    }else{
        compScore++;
        compScoreEle.textContent = compScore // it means computer score increment hone k baad jo hmne html file se comp score wali id select ki 
        // hai wah aur ushe store kia hai compScoreElement me uska text content change ho jaye ager vo increase hua to vo show ho from 0 -> 1 or 2
        return `You lose! ${compSelecion} beats ${userSelection}`
    }


 }