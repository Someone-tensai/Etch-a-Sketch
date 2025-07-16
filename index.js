let body = document.querySelector("body");
let container = document.querySelector(".container");
let button = document.createElement("button");
button.textContent = "Size";
body.prepend(button);

// Create n divs inside one div
// And create n of those divs..
function draw_grid(n)
{
    for(i = 0; i < n; i++)
    {
        let  outer_div = document.createElement("div");
        outer_div.setAttribute("class", "outer")
        for(j = 0 ; j < n; j++)
        {
            let div = document.createElement("div");
            div.setAttribute("class", "inner");
            // div.textContent = "Div";
            outer_div.appendChild(div);
        }
    container.appendChild(outer_div);
    }
    activate_sketchpad();
}

draw_grid(16);
function activate_sketchpad()
{
    let divs = document.querySelectorAll(".inner");
    console.table(divs);

    divs.forEach(element => {
        element.addEventListener("mouseenter" , function() {
            element.style.backgroundColor = "blue";
        })
    });

    divs.forEach(element => {
        element.addEventListener("mouseleave" , function() {
            element.style.backgroundColor = "white";
        })
    });

}
button.addEventListener("click", function() {

    size = -1;
    while(size > 100 || size < 0)
    {
        size = prompt("Enter the size(between 1 and 100):")
    }
    container.replaceChildren();
    draw_grid(size);
    divs = document.querySelectorAll(".inner");
    
});