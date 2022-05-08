function getApi(){
    const uri = "https://rickandmortyapi.com/api/character";
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            const response = JSON.parse( xhr.responseText);
            console.log(response);
        }
    }
    xhr.open('GET', uri, true);
    xhr.send();
}
getApi();