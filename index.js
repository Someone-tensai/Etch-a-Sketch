const fixed_size = 720;
let current_size = 16;
let opacity = 0;
let body = document.querySelector("body");
let container = document.querySelector(".container");

let button = document.createElement("button");
let opacity_button = document.createElement("button");

button.textContent = "Size";
body.prepend(button);

opacity_button.textContent = "Enable/Disable Opacity";
opacity_button.classList.add("opac");
body.prepend(opacity_button)

// Create n divs inside one div
// And create n of those divs..
function draw_grid(n)
{
    let size = fixed_size / n;
    for(i = 0; i < n; i++)
    {
        let  outer_div = document.createElement("div");
        outer_div.setAttribute("class", "outer")
        for(j = 0 ; j < n; j++)
        {
            let div = document.createElement("div");
            div.setAttribute("class", "inner");
            div.style.height = `${size}px`;
            div.style.width = `${size}px`;
            outer_div.appendChild(div);
        }
    container.appendChild(outer_div);
    }
    activate_sketchpad();
}

draw_grid(16);

function activate_sketchpad()
{
    let clicked = 0;
    let divs = document.querySelectorAll(".inner");
    divs.forEach(element => {
        element.addEventListener("mouseenter" , function() {
            element.style.backgroundColor = "blue";
            if(opacity != -1) 
            {
                opacity = Number(element.style.opacity);
                if(opacity >= 1) opacity = 0.9
                opacity += 0.1;
                element.style.opacity = opacity;
            }
           
        })
    });

    divs.forEach(element => {
        element.addEventListener("mouseleave" , function() {
            if(clicked != 1)
            {
                element.style.backgroundColor = "white";
            }
       
        })
    });

    divs.forEach(element => {
        element.addEventListener("mousedown" , function() {
            clicked = 1;
            element.style.backgroundColor = "blue";
            
        })
    });


    divs.forEach(element => {
        element.addEventListener("mouseup" , function() {
            clicked = 0;
        })
    });

}
button.addEventListener("click", function() {

    size = -1;
    while(size > 100 || size < 0)
    {
        size = prompt("Enter the size(between 1 and 100):")
    }
    current_size = size;
    container.replaceChildren();
    draw_grid(size);
    divs = document.querySelectorAll(".inner");

});

 opacity_button.addEventListener("click" , function(){
    if(opacity == -1)
    {
        opacity = 0;

    }
    else {
        opacity = -1;
        container.replaceChildren();
        draw_grid(current_size);
    }
});
