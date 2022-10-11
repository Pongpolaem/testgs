function testGS(){

    const url = "https://script.google.com/macros/s/AKfycbwXACGYFn6UA6EjyZ-MqUAC1xltt45cFYIVVXwyDZnwgPuawGHfLn9jpRvb_hGbKz-QuA/exec"

    fetch(url)
        .then(d => d.json())
        .then(d => {
                document.getElementById("app").textContent = d[0].status;
        });
        
}

document.getElementById("btn").addEventListener("click", testGS);