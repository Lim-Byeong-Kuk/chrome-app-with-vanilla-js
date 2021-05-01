const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];
let newId = 0;


function deleteToDo(event){
    //console.dir(event.target); 
    //console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        //console.log(toDo.id, li.id);  //li.id가 string임
        return toDo.id !== parseInt(li.id);
    });
    //console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

// localStorage는 자바스크립트의 data를 저장할수 없다.
// 오직 string만 저장 가능
// JSON.stringify는 자바스크립트 object를 string으로 바꿔줌
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    //const newId = toDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn); //버튼을 li안에 넣음
    li.appendChild(span);   //span을 li안에 넣음

    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    // 'toDos' array 안에 'toDoObj'넣기
    toDos.push(toDoObj);
    saveToDos();
    newId++;
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
/*
function something(toDo){
    console.log(toDo.text);
}
*/
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){ 
        // JSON을 이용해 object로 다시 변환
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            console.log(toDo.text);
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}

init();