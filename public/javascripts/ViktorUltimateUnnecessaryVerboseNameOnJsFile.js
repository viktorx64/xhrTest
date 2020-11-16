var xhr = new XMLHttpRequest();
var PersonerJSON; //JSON ARRAY for the JSON FILE

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        PersonerJSON = JSON.parse(this.responseText);
        //getMeData();
       
    }
}

xhr.open("GET", "/getme", true); //Prepping for action!

xhr.send(); //

function getMeData() {
    var MinJSONiHTML = "";
    for (var i = 0; i < PersonerJSON.length; i++) {
        MinJSONiHTML += "<li>" + PersonerJSON[i].firstname + " " + PersonerJSON[i].middlename.first + 
        " " + PersonerJSON[i].middlename.second + " " + PersonerJSON[i].middlename.third + " " +
        PersonerJSON[i].middlename.fourth + " " + PersonerJSON[i].lastname + " som gillar " +
        PersonerJSON[i].likes.first + " " + PersonerJSON[i].likes.second + " " + 
        PersonerJSON[i].likes.third + " " + PersonerJSON[i].likes.fourth + 
        " and has " + PersonerJSON[i].dataStored + "</li> <br>"

    }

    document.getElementById("MegaMind").innerHTML = MinJSONiHTML;
}