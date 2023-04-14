const item = document.getElementById("itemName");
const list = document.querySelector(".listContainer");

function addToList(){
    if (item.value === "")
    {
        alert("Write something")
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = "&nbsp; &nbsp; &nbsp; &nbsp" + item.value;
        console.log(li);
        list.appendChild(li);
    }
    item.value = "";
}
list.addEventListener('click', function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
}, false)