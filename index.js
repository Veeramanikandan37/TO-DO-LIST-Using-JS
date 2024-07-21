var count=0;
function add()
{
    
    var val=document.getElementById("inp").value;
    if(val.trim()!=="")
    {
        var ul=document.getElementById("to_do");
        var val_btn=document.getElementById("del2"); 
        var li=document.createElement('li');
        var btn = document.createElement('button');
        li.innerHTML=val;
        btn.innerHTML='Delete';
        btn.className="del";
        btn.onclick=function() {li.remove(),btn.remove();};
        ul.appendChild(li);
        ul.append(btn);
        document.getElementById('inp').value="";
    }
}
function del()
{
    var ul=document.getElementById("to_do");
    ul.innerHTML="";
}