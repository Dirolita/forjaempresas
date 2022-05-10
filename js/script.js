

/*let boton=document.getElementById("boton");
let alertUser=document.getElementById("alertUser");

    boton.addEventListener("click", ()=>{
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
 });*/

 //dashboard

 var form=document.getElementById("formConsul");
 //var consul = parseFloat(document.getElementById("consulta").value);
 //console.log(consul);
 form.addEventListener("submit",(e)=>{
    var consul = parseInt(document.getElementById("consulta").value);
    console.log(consul);
     e.preventDefault();
     if(consul == 25413574){
         alert("h")
     }
     }
 );