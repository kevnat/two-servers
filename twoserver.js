var http = require("http");

var PORT1 = 7000; 
var PORT2 = 7500;

var ports = [7000,7500];

function handleRequest1(request,response){
    response.end("You're my best friend!" + request.url);
}

function handleRequest2(request,response){
    response.end("You're a GBFCFM! " + request.url);
}

var server = http.createServer(handleRequest1);

server.listen(PORT1, function(){
    console.log("Server listening on: http://localhost:" + PORT1);
});


var server = http.createServer(handleRequest2);


server.listen(PORT2, function(){
    console.log("Server listening on: http://localhost:" + PORT2);
})


// function multiServer () {
//     var ports = [7000,7500];
//     var good = "You're my best friend";
//     var bad = "You're a GBFCFM!"; 

//     function handleRequest(request,response){
//         response.end()
//     }
    
//     for (var i = 0; i < ports.length; i++){
//         console.log(ports[i]);
//         switch(ports[i]){
//             case 7000:
//                 handleRequest();

            
//         }


//     }
// }
