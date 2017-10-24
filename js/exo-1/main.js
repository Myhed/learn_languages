window.onload=function(){
    var body = document.body;
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    
    body.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);

    var li11=ul.childNodes[0];
    var li22=ul.childNodes[1];
    // console.log(ul.childNodes[0].innerHTML = 'dqzdzq');
    li11.innerHTML = "register";
    li22.innerHTML = "login";
    
    // console.log(li11.innerHTML="dqzdq")
}