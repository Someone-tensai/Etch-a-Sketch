container = document.querySelector(".container");

// Create 16 divs inside one div
// And create 16 of those divs..
for(i = 0; i < 16; i++)
{
    outer_div = document.createElement("div");
    outer_div.setAttribute("class", "outer")
    for(j = 0 ; j < 16; j++)
    {
        div = document.createElement("div");
        div.setAttribute("class", "inner");
        div.textContent = "Div";
        outer_div.appendChild(div);
    }
   container.appendChild(outer_div);
}

