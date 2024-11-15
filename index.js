let boxes= document.querySelectorAll(".box") 
let reset= document.querySelector("#reset-btn")
let newbtn=document.querySelector("#newbtn")
let msgcontainer=document.querySelector(".msgcontainer")
let message=document.querySelector("#message")
let turn0=true;
let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
       
        
        if (turn0) {
            box.innerHTML="0";
            turn0=false;
        }
            else{
                box.innerHTML="X"
                turn0=true
            
            
        }
        box.disabled=true;
        checkWinner();
    });

});


    const disabledBoxes =()=>{
        for(let box of boxes){
            box.disabled =true
           

        }
    };


const enableBoxes =()=>{
        for(let box of boxes){
             box.disabled =false;
           

            box.innerText="";
        }
    };

      const showWinner = (Winner) =>{
        message.innerText=`Congratulation Winner Is ${Winner}`
         msgcontainer.classList.remove("hide");
          disabledBoxes();
        

    }


        const checkWinner=()=>{
       for( let pattern of winpattern){
       
        let pos1=boxes[pattern [0]].innerHTML;
        let pos2=boxes[pattern [1]].innerHTML;
        let pos3 =boxes[pattern [2]].innerHTML;
       
        if(pos1 != "" && pos2 != "" && pos3 != ""  ){
            if(pos1 ===  pos2  && pos2 === pos3 ){
                showWinner(pos1);
                
                
            }
        }



    }

};
newbtn.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)




