
let requestURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=food+pantries+in+Omaha&key=AIzaSyC0BgCoFeK4LNrY62p-WKS2Y-3mrFS6lRw"
function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    for (i = 0; i <= apiData.results.length - 1; i++) {
        console.log(`${apiData.results[i].name}`)
        message = message + apiData.results[i].name + "\n"  + apiData.results[i].formatted_address + "\n" + "\n"
    }
    txtaClosePantry.value = message
    
}

function callAPI(URL) {

    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

btnPantrySearch.onclick=function(){
  // call the API calling code above
  callAPI(requestURL)
}
