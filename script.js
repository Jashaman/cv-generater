function addnewwefield(){
let newnode=document.createElement('textarea')
newnode.classList.add('form-control')
newnode.classList.add('WeField')
newnode.classList.add('mt-3')

newnode.setAttribute("rows",3)
newnode.setAttribute("placeholder","enter here")
 
let weob=document.getElementById("we")
let weaddbuttonob=document.getElementById("weaddbutton")
weob.insertBefore(newnode,weaddbuttonob)



} 
function addnewaqfield(){
    let newnode=document.createElement('textarea')
    newnode.classList.add('form-control')
    newnode.classList.add('aqField')
    newnode.classList.add('mt-3')
    
    newnode.setAttribute("rows",3)
    newnode.setAttribute("placeholder","enter here")
     
    let aqob=document.getElementById("aq")
    let aqaddbuttonob=document.getElementById("aqaddbutton")
    aqob.insertBefore(newnode,aqaddbuttonob)
    } 

    function generatecv(){
       let namefield;
       document.getElementById("namet1").innerHTML= document.getElementById("nameField").value;
      document.getElementById("namet2").innerHTML= document.getElementById("nameField").value;
    
      document.getElementById("contanctt").innerHTML=document.getElementById("contanctField").value;
      document.getElementById("adresst").innerHTML= document.getElementById("adressField").value;

      document.getElementById("fbt").innerHTML=document.getElementById("fbField").value;
      document.getElementById("instat").innerHTML=document.getElementById("instaField").value;
      document.getElementById("linkt").innerHTML=document.getElementById("linkField").value;

    
   document.getElementById("objectivet").innerHTML=document.getElementById("objectivefield").value;

  let wes=document.getElementsByClassName("WeField");
  let str="";
  for(let i of wes){
    str=str+ `<LI>${i.value}</LI>`
  }
document.getElementById("wet").innerHTML=str;
  
let aqs=document.getElementsByClassName("aqField");
let str1="";
for(let i of aqs){
  str1=str1+ `<LI>${i.value}</LI>`
}
document.getElementById("aqt").innerHTML=str1;

    
  document.getElementById("cv-form").style.display="none";
  document.getElementById("cv-template").style.display="block";

}
// print cv
    function printcv(){
      window.print();
    }