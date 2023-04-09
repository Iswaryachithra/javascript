function sample()
{
var user=document.getElementById("user").value;
var photo=document.getElementById("exampleFormControlFile1").value;
var DOB=document.getElementById("dob").value;
var Age=document.getElementById("age").value;
var Gender=document.getElementById("gender").value;
var bloodgroup=document.getElementById("blod").value;
var faname=document.getElementById("user1").value;
var maname=document.getElementById("user2").value;
var qual=document.getElementById("Qual").value;
var percentage=document.getElementById("name1").value;
var address =document.getElementById("addre").value;
var city=document.getElementById("cty").value;
var state=document.getElementById("ste").value;
var pincode=document.getElementById("pin").value;
var email=document.getElementById("email").value;
var phoneno=document.getElementById("phno").value;




var tbl=document.getElementById("tblid");
tbl.innerHTML="<tr><td>NAME</td><td>photo</td></tr>"+"<tr><td>"+user+"</td>"+"<td>"+photo+"</td></tr>"+"<tr><td>DOB</td><td>Age</td></tr>"+"<tr><td>"+DOB+"</td>"+"<td>"+Age+"</td></tr>"+"<tr><td>Gender</td><td>Bloodgroup</td></tr>"+"<tr><td>"+Gender+"</td>"+"<td>"+bloodgroup+"</td></tr>"+"<tr><td>FatherName</td><td>MatherName</td></tr>"+"<tr><td>"+faname+"</td>"+"<td>"+maname+"</td></tr>"+"<tr><td>NAME</td><td>photo</td></tr>"+"<tr><td>"+user+"</td>"+"<td>"+photo+"</td></tr>";


}