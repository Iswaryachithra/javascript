function data()
{
 let basic=document.getElementById("basic").value;

 let allow=document.getElementById("allowances").value=basic*(2/100);

 let HRA=document.getElementById("houserent").value=basic*(15/100);

 let conv=document.getElementById("conv").value=basic*(2/100);

 let trans=document.getElementById("trans").value=basic*(2/100);

 let CEA=document.getElementById("CEA").value=basic*(2/100);

 let spl=document.getElementById("Spl").value=basic*(2/100);

 let others=document.getElementById("Other").value=basic*(2/100);

 let pf=document.getElementById("PF").value=basic*(5/100);;

 let ESI=document.getElementById("ESI").value=basic*(2/100);

 let income=document.getElementById("inctax").value=basic*(2/100);

 let prof=document.getElementById("protax").value=basic*(2/100);


 basic=parseInt(basic);

 allow=parseInt(allow);

 HRA=parseInt(HRA);

 conv=parseInt(conv);

 trans=parseInt(trans);

 CEA=parseInt(CEA);

 spl=parseInt(spl);

 others=parseInt(others);

 pf=parseInt(pf);

 ESI=parseInt(ESI);

 income=parseInt(income);

 prof=parseInt(prof);

 


let net=document.getElementById("tol").value=(basic+HRA+conv+allow+trans+CEA+spl+others+pf+ESI+income+prof);

let gross=document.getElementById("tolde").value=(net-pf);




}