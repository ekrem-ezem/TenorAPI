var searchinput = document.getElementById('input');
var searchbutton = document.getElementById('button');
var errorMsg = document.getElementById('erro-messge');
var the_div = document.getElementById('grid');
const http = new XMLHttpRequest();

the_div.innerHTML = ''
searchbutton.addEventListener('click', function() {
    the_div.innerHTML = ''
    let searchText = searchinput.value;
    if (searchText === '') {
        errorMsg.classList.add('error');
        errorMsg.innerHTML = 'Pleas write GooD Text!'
    } else {
        errorMsg.innerHTML = ''
        http.open('GET', 'https://api.tenor.com/v1/search?q=' + searchText + '&key=J982V6GISWOE&limit=30', true);
        http.send();
        http.responseType = "json";
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) {
                let data = http.response.results;
                for (let i = 0; i < data.length; i++) {
                    let gifA = data[i].media[0].gif.url
                    let getGif = document.createElement('img');
                    getGif.setAttribute('src', gifA)
                    getGif.setAttribute('alt', 'id')
                    getGif.innerHTML = gifA
                    the_div.appendChild(getGif)
                }

            }
        }


    }
})