var arr=[];

function add_item()
{
    var name=document.getElementById("user").value;
    var age=document.getElementById("age").value;
    arr.push({name:name,age:age});
    document.getElementById("user").value="";
    document.getElementById("age").value="";
    
    show_items();
    
}



function show_items()
{
    var s="";
    var i=0;
    arr.forEach(function(value,index)
   { 
    i+=1;
    s+="<tr><td>"+i+"</td>"+"<td>"+value.name+"</td>"+"<td>"+value.age +"</td></tr>";
   })

   document.getElementById("tbodyid").innerHTML=s;
}