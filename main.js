const url =  'https://api.adviceslip.com/advice'


var advice = 'Click to receive a advice';

function get(){
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            advice = data.slip.advice;
        })
        .catch(error => {
            console.log(error);
        });
    }

const generator = document.getElementById('generator')

generator.addEventListener("click", () => {
    get()
    document.getElementById('advice').innerText = advice
})