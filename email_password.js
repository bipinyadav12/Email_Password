const email=document.getElementById("email")
const emailError=document.getElementById("emailError")
const password=document.getElementById("password")
const passwordError=document.getElementById("passwordError")
const form=document.getElementById("form")
const succes=document.getElementById("succes");
email.oninput=function(){
    const emailvalue=email.value;
    if (emailvalue.length>3&&
    emailvalue.includes('@')&&
    emailvalue.includes('.')){
        emailError.textContent=""
    }else{
        emailError.textContent="Make sure email is more than 3 characters has @ and ."
    }

}
password.oninput=()=>{
    const passwordvalue=password.value;
    if(passwordvalue.length>8){
        passwordError.textContent="";
    }else{
        passwordError.textContent="Make sure password  is more than 8 characters."
    }
}
form.onchange=()=>{
    const emailvalue=email.value;
    const passwordvalue=password.value;
    
    if (emailError.textContent === "" && passwordError.textContent === ""&&(emailvalue!="")&&(passwordvalue!="")) {
        succes.textContent = "All good to go!";
    } else {
        succes.textContent = "";
    }
}
form.onsubmit=(event)=>{
    event.preventDefault();
    if(emailError.textContent===""  && passwordError.textContent===""){
        const confirmetion=confirm("Are you sing in")
        if(confirmetion){
            alert("successful signup!")
        }
        else{
            form.reset();
            emailError.textContent = "";
            passwordError.textContent = "";
            succes.textContent = "";
        }
    }
}