const inputBox=document.getElementById("input-type")
const listContainer=document.getElementById("List-Container")
function addtask(){
    if(inputBox.value===''){
        alert("You must Write something !")
    }
    else{
    let li=document.createElement("li")
    li.innerHTML=inputBox.value;
    listContainer.append(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7"
    li.appendChild(span)
    }
    inputBox.value='';
    saveData()
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName===("LI")){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)

}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();