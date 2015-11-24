//playing with url api



var http = require("http")
    

    var callback =  function(req,res){
       res.writeHead(200,{'Content-Type': 'text/plain'});
       res.end('yep, working!!!\n')
     }
var server = http.createServer().listen(8089)
    server.on('request', (req,res)=> {console.log("still working -->"); res.end()})
    server.on('connection',(req,res) => {

	    console.log("this is the connection callback !!!");
	   


      }    )