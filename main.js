


//getting elements
const first_section_items = document.querySelectorAll('#first_section li')
const second_section_items = document.querySelectorAll('#second_section li')
const pictures = document.querySelectorAll("#row img");
const meteor = document.querySelector("#destroy-all");

//adding listeners
for (let item of first_section_items)
{
    item.addEventListener("click", function(){strikeThrough(this)});
}
for (let item of second_section_items)
{
    item.addEventListener("click", function(){this.style.opacity = 0;});
}
for (let item of pictures)
{
    item.addEventListener("click", function(){this.style.width = "0px";});
}
meteor.addEventListener("click", function(){destroyEverything()});


//functions
function strikeThrough(x)
{
    x.style.textDecoration = "line-through";
}

function destroyEverything()
{
    for (let item of first_section_items) 
    {
        item.style.textDecoration = "line-through";
    }
    for (let item of second_section_items) 
    {
        item.style.opacity = 0;
    }
    for (let item of pictures) 
    {
        item.style.width = "0px";
    }
}

