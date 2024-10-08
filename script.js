var color = document.getElementById("color")
var button = document.getElementById("button")
var list = document.getElementById("list")

button.onclick = () =>{
    let newPop = document.createElement("div");
    newPop.classList.add("list-window");
    newPop.innerHTML =  `<span class="close">x</span>
                <textarea placeholder="Write your notes..." rows="10" cols="20" class="ip"></textarea>`;
    newPop.style.borderColor = color.value;        
    list.appendChild(newPop);
} 

document.addEventListener('click',(event)=>{
    if(event.target.classList.contains("close")){
        event.target.parentNode.remove();
    }
})

var newPop = {
    dom: null,
    x: null,
    y: null
};

var cursor = {
    x: null,
    y: null
}

document.addEventListener("mousedown",(event)=>{
    if(event.target.classList.contains("list-window")) {
    cursor = {
        x: event.clientX,
        y: event.clientY
    }
    // console.table(cursor);

    newPop = {
        dom: event.target,
        x: event.target.getBoundingClientRect().left,
        y: event.target.getBoundingClientRect().top
    }
    console.log(newPop)
}})

document.addEventListener("mousemove",(event)=>{
    if(newPop.dom==null) return;
    let currentCursor = {
        x: event.clientX,
        y: event.clientY
    }

    let distance = {
        x: currentCursor.x - cursor.x,
        y: currentCursor.y - cursor.y
    }

    newPop.dom.style.left = (newPop.x + distance.x) + "px"
    newPop.dom.style.top = (newPop.y + distance.y) + "px"
    newPop.dom.style.cursor = "grab"
})

document.addEventListener("mouseup",() =>{
    if(newPop.dom == null) return;
    newPop.dom.style.cursor = "auto";
    newPop.dom = null;
})

