const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest(); 
// Creates a new instance of the XMLHttpRequest object. 

xhr.open("GET", baseURL + type + "/");
// xhr.open() method. GET value is used whe retrieving data from the server. Post is used when sending data to the server.
// Second arguement is the data that we went to recieve.
xhr.send();
// This method sends the request for data. 

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.responseText));
    }
};
// Ready state of 4 means that the operation has been completed. Other numbers have different meanings. Google 'xhr readystate' to see different states. 
// So it checks to see if everything has been completed AND for a http code of 200 which is means request completed.
// document.GetElementById is used so the html shown changes to the response text retured by the object.  
// cb stands for 'callback'
};

function getTableHeaders(obj) {
    var tableHeaders = [];
    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });

return `<tr>${tableHeaders}</tr>`;

}

function writeToDocument(type) {
    var tableRows = [];
    var el = document.getElementById("data");

    getData(type, function(data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];
            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`)
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}



// setTimeout() function takes two parameters. It is a method that delays the execution of code. 