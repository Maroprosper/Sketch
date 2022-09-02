let sketch = document.querySelector(".container");
let width = sketch.clientWidth;
let height = sketch.clientHeight;
let size = document.querySelector("#gridSize").value;
let length = height/size;
let breadth = width/size;
let color = '';
for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
    let div = document.createElement('div');
    div.style.height = `${length}px`;
    div.style.width = `${breadth}px`;
    sketch.appendChild(div);
    div.classList.add("box");
    }
}
let background = document.getElementById('bgColor');
background.addEventListener('input' , (e) => {
    sketch.style.backgroundColor = `${background.value}`;
});
let options = document.querySelectorAll('input[type="radio"]');
for(let option of options){
    option.addEventListener('click', () => {
      switch(true){
        case option.checked && option.id === "yourChoice":
                document.getElementById('yourColor').addEventListener('input', (e) => {
                    color = e.target.value;
                    etch(color);
                });
                etch(document.getElementById('yourColor').value);
            break;
        case option.checked && option.id === "blackChoice":
            color = "black";
            etch(color);
            break;
        case option.checked && option.id === "rgbChoice":
            function getRGB(){
            color = '#';
            let rgb = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
            for(let i = 0; i < 6; i++){
                color += rgb[Math.floor(Math.random()*16)];
        }
            return color;
        };
        let divs = document.querySelectorAll('.box');
    divs.forEach(div => {div.addEventListener('mouseover', (e) =>  {
              e.target.style.backgroundColor = getRGB();
        });
});
    break;
      }      
   });
}
function etch(color){
    let divs = document.querySelectorAll('.box');
    divs.forEach(div => {div.addEventListener('mouseover', (e) =>  {
              e.target.style.backgroundColor = color;
        });
});
}
