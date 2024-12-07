import http from "http";

let options = {
    host: 'www.server_website.org',
    path: '/courses',
    method: 'GET'
};

// Making a get request to server
http.request(options, (response) => {

// Printing the statusCode
    console.log(`STATUS: ${response.statusCode}`);
}).end();
