// var user="kgisl";
// var psw="kgisl";

// if(user==psw)
// {

//     console.log("To access wifi");
// }


// function sample()
// {

//     var user=document.getElementById("user").value;
//     var sp1=document.getElementById("sp1");

//     if((user=="kgisl"))
//     {
//       sp1.innerHTML="Access the kgm wifi";
//       sp1.style.color="red";
//     }
// }


// function sample()
// {

//     var user=document.getElementById("user").value;
//     var sp1=document.getElementById("sp1");

//     if((user=="kgisl")||(user=="admin"))
//     {
//       sp1.innerHTML="Access the kgm wifi";
//       sp1.style.color="red";
//     }
//     else
//     {
//         sp1.innerHTML=" not Access the kgm wifi";
//         sp1.style.color="green";
//     }
// }

function sample()
{

    var user=document.getElementById("user").value;
    var pass=document.getElementById("psw").value;

    if((user=="kgisl")||(pass=="passW@123"))
    {
      alert("login");
      var user=document.getElementById("user").value="";
    var pass=document.getElementById("psw").value="";
    }
    else
    {
        alert("plz");
    }
}