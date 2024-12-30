let btns = document.querySelectorAll(".box1")
let rst_btn = document.querySelector("#reset_btn")
let strt_btn = document.querySelector("#strt_btn")
let msg = document.querySelector(".winer")

let win_ptrn = [
    [ 0 , 1  ,2],
    [3 , 4  , 5],
    [6 , 7 , 8], 
    [0, 3 , 6 ],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6]
]
let turn = true//x

disabledbtn= ()=>{
    for(let box of btns){
        box.disabled = true
    }
    }
btns.forEach(box=>{
 box.addEventListener("click",()=>{
    // console.log("clicked")
    if(turn){
        box.innerText = "X"
        turn = false;
        
    }
    else{
        box.innerText = "0"
        turn = true;
    }
turn.disabled
    box.disabled = true;
checkwinners()
});
})

checkwinners= ()=>
    {
        for(pettern of win_ptrn){

            let pos1 =  btns[pettern[0]].innerText;
            let pos2 = btns[pettern[1]].innerText;
            let pos3 = btns[pettern[2]].innerText
            if (pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1 == pos2 && pos2 == pos3){
                    console.log( "winner " , pos1)
                    msg.innerText = `Congrlulation , winner is${pos1}`
                
                   disabledbtn()
                }
                    
        }}
}

const resetgame  = () =>{
    turn = true
   enablebox()
}
const enablebox = () =>{
    turn = true
    // console.log("r")
    for(let box of btns){
        box.disabled = false
        box.innerText = ""
    }
}
strt_btn.addEventListener("click" ,resetgame)
rst_btn.addEventListener("click" , resetgame)
