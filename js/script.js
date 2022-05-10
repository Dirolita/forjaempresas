
let jsboton=document.getElementById("boton");
if(jsboton != null){
    jsboton.addEventListener("click", ()=>{
        
        let alertUser=document.getElementById("alertUser");
        let user=document.getElementById("user").value;
        let psw=document.getElementById("psw").value;
        if(user==="Admin" && psw==="Kuepa2022"){
            window.location = "dashboard.html";
        }
        else{
            alertUser.style.display="block";
    }
    });


 let btnOk=document.getElementById("btnOk");
 btnOk.addEventListener("click",()=>{
    alertUser.style.display="none";
 });
}

 //dashboard
 let form=document.getElementById("formConsul");

form.addEventListener("submit",(e)=>{

    var consul = parseInt(document.getElementById("consulta").value);
    console.log(consul);
    e.preventDefault();

    if(consul == 52368795){
    alert("tiene la primera dosis");
     }

    else if (consul == 1001235478){
    alert("tiene primer y segunda dosis");
    }
    
    else if (consul == 25413574){
        alert("sin registro");
        }
    }
 );

