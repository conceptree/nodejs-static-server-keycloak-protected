let div = document.createElement("div");
div.id = "test";
div.style.color = "red";
div.innerText = "This is being generated by a script served by App 2";

document.body.prepend(div);