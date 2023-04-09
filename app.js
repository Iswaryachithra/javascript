function sample()
{
    var user=document.getElementById("username").value;
    var age=document.getElementById("number").value;
    var edu=document.getElementById("user").value;
    var mom=document.getElementById("mom").value;
    var dad=document.getElementById("dad").value;





    var tbl=document.getElementById("tblid");
    tbl.innerHTML="<tr><td> Name of the user</td><td>age</td><td>educational</td><td>Mother name</td><td>father name</td> </tr> "+"<tr><td>"+user+"</td>"+"<td>"+age+"</td>"+"<td>"+edu+"</td>"+"<td>"+mom+"</td>"+"<td>"+dad+"</td></tr>";
} 