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
    sketch.style.backgroundColor = background.value;
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
    case option.checked && option.id === "grayscale":
        function getGrey(){
        let gray = ['#080808','#101010','#181818','#202020','#282828','#303030',
    '#383838','#404040','#484848','#505050','#585858','#606060','#686868','#707070','#787878',
'#808080','#888888','#909090','#989898','#A0A0A0','#A8A8A8','#B0B0B0','#BEBEBE','#C0C0C0','#C8C8C8',
'#D0D0D0','#D3D3D3','#D8D8D8','#DCDCDC','#E0E0E0','#E8E8E8','#F0F0F0','#F5F5F5','#F8F8F8'];
            color = gray[Math.floor(Math.random()*gray.length)];
            return color;
        }
        let boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {box.addEventListener('mouseover', (e) =>  {
                  e.target.style.backgroundColor = getGrey();
            });
    });
        break;
        case option.checked && option.id === "eraser":
            background.addEventListener('input' , (e) => {
                color = background.value;
                etch(color);
            });
            etch(color);
        break;
        case option.checked && option.id === "lighten":
            
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
