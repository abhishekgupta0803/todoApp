let  btn = document.querySelector("button");
let inp = document.querySelector("input");
let unl = document.querySelector("ul");

btn.addEventListener("click",function(){
   let list = document.createElement("li");
   list.innerHTML = inp.value;
   let btnDelete = document.createElement("button");
   btnDelete.innerHTML = "Delete";
   btnDelete.classList.add("delete");
   list.appendChild(btnDelete);
   unl.appendChild(list);
   inp.value = "";
   
});

unl.addEventListener("click",function(event){
  if(event.target.nodeName == "BUTTON"){
    let listitem = event.target.parentElement;
    listitem.remove();
    console.log("delete");
  } 

});