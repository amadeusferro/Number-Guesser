(function(){
    const display = document.querySelector('.display');
    const container = document.querySelector('.container');
    let input = 0;
    const theValue = randomNumberGenerator();
    function randomNumberGenerator(max = 1000){
        let randomNumber = Math.floor(Math.random() * max);
        return randomNumber
    }
    document.addEventListener('click', function(e){
        const click = e.target;
        if (click.classList.contains('btn-num')) display.value += click.innerText;
        if (click.classList.contains('btn-del')) display.value = display.value.slice(0, -1);
        if (click.classList.contains('btn-eq')) {
            input = display.value;
            display.value = '';
            start(input)
        }
    })
    function start(input){
        const h1 = document.querySelector('.h1')
        if (Number(input) === Number(theValue)) {
            h1.innerHTML = `You nailed it!🥳🎉<br>The right number is ${theValue}!`;
            document.body.style.backgroundColor = 'green';
        } else {
            if (input > theValue) {
                h1.innerHTML = `It was almost!😿<br>Your number is less than ${input}!`;
            } else {
                h1.innerHTML = `It was almost!😿<br>Your number is more than ${input}!`;
            }
        }
    }
})()