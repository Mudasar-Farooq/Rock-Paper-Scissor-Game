let sec=document.querySelectorAll(".sec");
let comp_elemnt=document.querySelector(".comp");
let you_elemnt=document.querySelector(".you");
let msg=document.querySelector(".msg");

let comp_src=0,you_src=0;
for(let i=0;i<sec.length;i++)
{
    console.log(sec[i]);
    sec[i].addEventListener("click",()=>{
        // console.log("Selected");
        let r=Math.random();
        if(r<=0.33)
            select="rock";
        else if(r<=0.66)
            select="paper";
        else
            select="scissor";
    
        if(i==0){
            if(select=="rock"){
                // console.log("Game Draws");
                msg.style.backgroundColor="#4f4e4e";
                msg.innerText="OOPs Computer also select Rock";
            }
            else if(select=="paper"){
                comp_src++;
                comp_elemnt.innerText=comp_src;
                msg.style.backgroundColor="red";
                msg.innerText="You Lost ,Comp selects the Paper";
            }
            else 
            {
                // console.log("You wins on Rock ");
                you_src++;
                you_elemnt.innerText=you_src;
                msg.style.backgroundColor="Green";
                msg.innerText="You won,Comp selects the Scissor";
            }
        }
        else if(i==1)
        {
            if(select=="paper"){
                // console.log("Game Draws");
                msg.style.backgroundColor="#4f4e4e";
                msg.innerText="OOPs Comp also select Paper";
            }
            else if(select=="rock"){
                // console.log("You wins ");
                you_src++;
                you_elemnt.innerText=you_src;
                msg.style.backgroundColor="green";
                msg.innerText="You Won ,Comp selects the Rock";
            }
            else 
            {
                // console.log("Comp wins ");
                comp_src++;
                comp_elemnt.innerText=comp_src;
                msg.style.backgroundColor="red";
                msg.innerText="You lost,Comp selects the Scissor";
            }
        }
        else
        {
            if(select=="rock"){
                // console.log("Comp wins");
                comp_src++;
                comp_elemnt.innerText=comp_src;
                msg.style.backgroundColor="red";
                msg.innerText="You lost,comp selects the Rock";
            }
            else if(select=="paper"){
                // console.log("You wins ");
                you_src++;
                you_elemnt.innerText=you_src;
                msg.style.backgroundColor="green";
                msg.innerText="You won ,Comp selects the Paper";
            }
            else 
            {
                // console.log("OOps game Draws");
                msg.style.backgroundColor="#4f4e4e";
                msg.innerText="OOPs Comp also select Scissor";
            }
        }
    });
}
