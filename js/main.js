// delete List Btn 
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let deleteList = document.createElement("button");
  let deleteTxt = document.createTextNode("\u00D7");
  deleteList.className = "deleteList";
  deleteList.appendChild(deleteTxt);
  myNodelist[i].appendChild(deleteList);
}

// delete btn click -> delete List
let deleteBtns = document.querySelectorAll('.deleteList')
for ( let deleteBtn of deleteBtns) {
    deleteBtn.addEventListener("click", function(){
        let ListDelet = this.parentElement;
        ListDelet.style.display = "none"
    })
}


// checked list
let checkedLists = document.querySelectorAll('ul li span');
for ( let checkedList of checkedLists ){
    checkedList.addEventListener('click', function(){
        checkedList.classList.toggle('checked')
    }, false)
}



// input value -> new list 
function newElment() {
    const newList = document.createElement("li");
    const textparent = document.createElement("span");
    const inputValue = document.getElementById("wirteList").value;
    const newText = document.createTextNode(inputValue);
    textparent.appendChild(newText);
    newList.appendChild(textparent);

    if (inputValue === ''){
        alert("Write a title!")
    }else {
        textparent.appendChild(newText);
        newList.appendChild(textparent);
        document.getElementById('myList').appendChild(newList)
    }
    document.getElementById("wirteList").value = '';

    const deleteList = document.createElement("button");
    const deleteText = document.createTextNode("\u00D7");
    deleteList.className = "deleteList"
    deleteList.appendChild(deleteText)
    newList.appendChild(deleteList)

    const deleteBtns = document.querySelectorAll('.deleteList');
    for (let deleteBtn of deleteBtns){
        deleteBtn.addEventListener('click', function(){
            let ListDelet = this.parentElement;
            ListDelet.style.display = 'none'
        })
    }

    const checkedLists = document.querySelectorAll('ul li span')
    for (let checkedList of checkedLists ){
        checkedList.addEventListener('click', function(){
            checkedList.classList.toggle('checked')
        },false)
    }
}



// change mode
let modeChange = document.getElementById('changeMode');

modeChange.addEventListener("click", function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        changeMode.src = "img/sun.svg"
    }else {
        changeMode.src = "img/moon.svg"
    }
})