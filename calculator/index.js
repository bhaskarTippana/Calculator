
let buttons=document.getElementsByTagName("button");
console.log(buttons);
let res=document.getElementById("cal-nav");
console.log(res);


for(let i=0;i<buttons.length;i++){
     buttons[i].onclick=function(){
          let input=this.innerText;
          updateDisplay(input);
          // console.log(input);
     }
}

function updateDisplay(input){
     let currentDisplay=res.innerText;
     if(currentDisplay=="0"){
          if(input!="AC" && input!="C" && input!="="){
               res.innerText="";
               res.innerText=input;
          }
     }
     else{
          if(input=="C"){
               res.innerText=currentDisplay.substring(0,currentDisplay.length-1)
          }
          if(input=="AC"){
               res.innerText="0"
          }
          if(input!="AC" && input!="C" && input!="="){
               res.innerText+=input;
          }
          if(input== "="){
               try {
                    res.innerText = eval(currentDisplay);
                  } catch (error) {
                    res.innerText = "Error";
                  }
               // let display =res.innerText
               // res.innerText=eval(display)
          }
     }
}

// document.addEventListener("DOMContentLoaded", function () {
//      let res = document.getElementById("cal-nav");
//      let buttons = document.querySelectorAll(".numbers button");
 
//      for (let i = 0; i < buttons.length; i++) {
//          buttons[i].addEventListener("click", function () {
//              let input = this.innerText;
//              updateDisplay(input);
//          });
//      }
 
//      function updateDisplay(input) {
//          let currentDisplay = res.textContent;
 
//          if (currentDisplay === "0") {
//              if (input !== "AC" && input !== "C" && input !== "=") {
//                  res.textContent = "";
//                  res.textContent = input;
//              }
//          } else {
//              if (input === "C") {
//                  res.textContent = currentDisplay.substring(0, currentDisplay.length - 1);
//              } else if (input === "AC") {
//                  res.textContent = "0";
//              } else if (input !== "=") {
//                  res.textContent += input;
//              } else {
//                  try {
//                      res.textContent = eval(currentDisplay);
//                  } catch (error) {
//                      res.textContent = "Error";
//                  }
//              }
//          }
//      }
//  });
 
