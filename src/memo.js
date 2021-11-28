const loginForm = document.querySelector("#loginForm");
const id_input = document.querySelector("#loginForm input");
const names = document.querySelector("#names");
const memo = document.querySelector("#memo");
function login(event){
    event.preventDefault();
    const id = id_input.value;
    console.log(id);
    loginForm.classList.add("hidden");
    localStorage.setItem("id", id);
    names.innerText = id;
    names.classList.remove("hidden");
    memo.classList.remove("hidden");
}

loginForm.addEventListener("submit",login);




const memoInput = document.querySelector("#memoForm input");
const memoList = document.getElementById("memolist");

const memo_KEY = "memos";

let memos = [];

function savememos() {
  localStorage.setItem(memo_KEY, JSON.stringify(memos));
}

function deletememo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintmemo(newmemo) {
    const li = document.createElement("li");
    li.id = newmemo.id;
    const span = document.createElement("span");
    span.innerText = newmemo.text;
    const button = document.createElement("button");
    button.innerText = " X";
    button.addEventListener("click", deletememo);
    li.appendChild(span);
    li.appendChild(button);
    memoList.appendChild(li);

}
function handlememoSubmit(event) {
    event.preventDefault();
    const newmemo = memoInput.value;
    memoInput.value = "";
    const newmemoObj = {
        text: newmemo,
        id: Date.now(),
    };
    memos.push(newmemoObj);
    paintmemo(newmemoObj);
    savememos();
}

memoForm.addEventListener("submit", handlememoSubmit)

const savedmemos = localStorage.getItem(memo_KEY);

if (savedmemos !== null) {
  const parsedmemos = JSON.parse(savedmemos);
  memos = parsedmemos;
  parsedmemos.forEach(paintmemo);
}
