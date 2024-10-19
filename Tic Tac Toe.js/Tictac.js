let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGamebutton=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

//player x, player o
let turnO=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        
        //player O turn
        if(turnO){   //simply if(turnO) is also fine.
            box.innerText="O";
            turnO=false;
        }else{
            //player X turn
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner =(winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}.`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
            }
        }  
    }
};

newGamebutton.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);





