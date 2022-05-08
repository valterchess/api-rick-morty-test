function getApi(){
    const uri = "https://rickandmortyapi.com/api/character";
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            const response = JSON.parse( xhr.responseText);
             const results = response.results;
            console.log(response);
            getChars(results);
        }
    }
    xhr.open('GET', uri, true);
    xhr.send();
}

function getChars(results){
    results.forEach(ele => {
        const img = document.createElement('img');
        const main =  document.querySelector('#main');

        img.src = ele.image;
        img.classList.add('img-fluid');

        main.append(img);
    });
}
getApi();