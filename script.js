let string = "";
let buttons = document.querySelectorAll('.button'); //will select all with class button
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '%'){
            string = string/100;
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'OFF'){
            string = "";
            // setTimeout(() => {
            //     string = "";
            // }, 1000);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'ON'){
            string = "0";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
       
    })
})