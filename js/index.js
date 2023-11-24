let btn1 = document.querySelector('[data-btn1]')
let btn2 = document.querySelector('[data-btn2]')
let r=document.querySelector('[data-r]')
let g=document.querySelector('[data-g]')
let b=document.querySelector('[data-b]')
let hex=document.querySelector('[data-display]')


//creating function to convert rgb to hex 
//declare variables inside function
//use toString to make answer into string and convert to hexadecimal format.. 16=hexa format
//use return answer.length == 1 ? "0" + answer : answer; .... to make sure one letter is never displayed
function rgbToHex() {
    let r= parseInt(document.querySelector('[data-r]').value)
    let g=parseInt(document.querySelector('[data-g]').value)
    let b=parseInt(document.querySelector('[data-b]').value)
    function toHex(color) {
        let answer = color.toString(16);
        return answer.length == 1 ? "0" + answer : answer;
    }
    let R = toHex(r);
    let G = toHex(g);
    let B = toHex(b);
    hex.value = "#" + R + G + B;
}

//add event listner to add function to convert to hex
btn1.addEventListener('click', rgbToHex)

//add event listner to add function to clear answers
btn2.addEventListener('click', function(){
    hex.value=''
    r.value=''
    g.value=''
    b.value=''
})