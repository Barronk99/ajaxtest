var xhr = new XMLHttpRequest(); 
// Creates a new instance of the XMLHttpRequest object. 

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
// xhr.open() method. GET value is used whe retrieving data from the server. Post is used when sending data to the server.
// Second arguement is the data that we went to recieve.
xhr.send();
// This method sends the request for data. 

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};
// Ready state of 4 means that the operation has been completed. Other numbers have different meanings. Google 'xhr readystate' to see different states. 
// So it checks to see if everything has been completed AND for a http code of 200 which is means request completed.
// document.GetElementById is used so the html shown changes to the response text retured by the object.  
