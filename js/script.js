
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
        let superUno=document.getElementById("superUno");
        superUno.style.setProperty("display","block");
        let btnAlertUno=document.getElementById("btnAlertUno")
        btnAlertUno.addEventListener("click", ()=>{
        window.location="vacunacion.html";}
        )
        } 

    else if (consul == 1001235478){
        let superDos=document.getElementById("superDos");
        superDos.style.setProperty("display","block");
        let btnAlerDos=document.getElementById("btnAlertDos")
        btnAlerDos.addEventListener("click", ()=>{
        window.location="vacunacion.html";}
        )
    }
    
    else if (consul == 25413574){
        let superTres=document.getElementById("superTres");
        superTres.style.setProperty("display","block");
    }
    else if
        (consul == 1007203506){
        let superCuatro=document.getElementById("superCuatro");
        superCuatro.style.setProperty("display","block");
    }
    }

 );