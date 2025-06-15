let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#New_Game");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector(".msg");
let cross=true;
const winningArray=[[0,1,2],
                    [0,3,6],
                    [0,4,8],
                    [1,4,8],
                    [2,4,6],
                    [2,5,8],
                    [3,4,5],
                    [6,7,8]];

const boxDisable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const boxEnable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    boxDisable();
}

const resetGame=()=>{
    cross=true;
    boxEnable();
    msgContainer.classList.add("hide");
}

const checkWinner = () => {
    for(let pattern of winningArray){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1 !="" && val2!="" && val3 !=""){
            if(val1===val2 && val2===val3){
                console.log("winner",val1);
                showWinner(val1);
            }
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(cross){
            box.innerText="X";
            cross=false;
        }
        else{
            box.innerText="O";
            cross=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

newGame.addEventListener("click",resetGame);

reset.addEventListener("click",resetGame);

