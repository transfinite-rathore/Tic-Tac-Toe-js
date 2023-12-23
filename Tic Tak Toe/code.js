let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelectorAll("#reset")
let turn=false;

let newGameBtn=document.querySelectorAll("#new-game")
let msgContainer=document.querySelectorAll(".msg-container")
let msg=document.querySelectorAll("#msg")



const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame=() => {
    turn=false;
    enablebtn();
    msgContainer[0].classList.add("hide")

}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        
        if (turn){
            box.innerText="O"
            turn=false
        }
        else{
            box.innerText="X"
            turn=true
        }
        box.disabled=true;
        checkWinner()
        

    })
})
const disablebtn =() => {
    
    for(let box of boxes){
        
        box.disabled=true;
    }
}
const enablebtn =() => {
    
    for(let box of boxes){
        
        box.disabled=false;
        box.innerText=""
        
    }
}
const showWinner=(winner) => {

    msg[0].innerText=`Congratulation, ${winner} won`;
    
    msgContainer[0].classList.remove("hide");
    disablebtn();
}

const checkWinner=() =>{
    for(pattern of winPattern){

        let box1=boxes[pattern[0]].innerText
        let box2=boxes[pattern[1]].innerText
        let box3=boxes[pattern[2]].innerText
        if(box1 != "" && box2 !="" && box3 !=""){
            if(box1===box2 && box2===box3){
                showWinner(box1)
            }
        }
        
    }
}

newGameBtn[0].addEventListener("click",resetGame)
resetbtn[0].addEventListener("click",resetGame)