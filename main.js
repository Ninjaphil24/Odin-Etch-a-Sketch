const container = document.querySelector('.jscontainer');

function createDivs(){
let divNumber = 0;
while (divNumber < 256){
const div = document.createElement('div');
container.appendChild(div);
divNumber++;
div.setAttribute('style','border: 1px dotted green;transition: 0s;height:15px;width:15px');
div.addEventListener('mouseover', ()=> {
div.setAttribute('style', 'background-color: pink;transition:0.6s;');
});
}
}
createDivs();