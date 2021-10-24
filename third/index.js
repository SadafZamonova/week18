let textarea = document.querySelector("textarea");

document.querySelector("form").addEventListener("submit", (evt) => {
    evt.preventDefault();
    writeToLocalStorage();
    saveComment ();
});

document.querySelector("form").addEventListener("reset", (evt) => {
    evt.preventDefault();
    readFromLocalStorage();    
});

function saveComment () {
    let comment = textarea.value;
    document.querySelector("#content").innerHTML += "<br>" + comment;
    textarea.value = " ";
    textarea.focus();
    localStorage.setItem("comments", document.querySelector("#content").innerHTML );
}

function writeToLocalStorage(){
    let value = document.querySelector("#name").value;
    localStorage.setItem("username", value);
}

function readFromLocalStorage() {
    let username = localStorage.getItem("username");
    document.querySelector("#name").value = username;
}

readFromLocalStorage(); 