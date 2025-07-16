container = document.querySelector(".container");

for(i = 0; i < 256; i++)
{
    div = document.createElement("div");
    div.textContent = "Something";
    div.style.backgroundColor = "red";
    container.appendChild(div);
}

