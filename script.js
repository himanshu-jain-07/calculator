let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

let arr = Array.from(buttons);


arr.forEach((button) => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML === '='){

                string = string.replace(/([\d.]+)([+\-*/])([\d.]+%)/g, (match, num1, op, num2) => {
                    const percent = parseFloat(num2) / 100;
                    return `${num1}${op}(${num1}*${percent})`;
                  });

                string = eval(string) || 0;
                input.value = string;
                string = '';

              
        }
        else if (e.target.innerHTML === '+/-') {
            if (string === '' || string === '0') {
              string = '-';
            } 
            else if (string.startsWith('-')) {
              string = string.slice(1);
            } 
            else {
              string = '-' + string;
            }
            input.value = string;
          } 
        else if(e.target.innerHTML == 'π'){
            string = string + Number(3.14);
            input.value = string;
        }
        else if(e.target.innerHTML === 'AC'){
            string = '';
            input.value = string;
        }
        else if(e.target.innerHTML === 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string
        }
    })
})

