
const http = require('http');
const fs = require('fs');

http.createServer((request, response) =>{
    if(request.url ==='/write'){
        fs.writeFile('data.txt', 'Tanya' ,(err) =>{
            if(err){
                console.log(err);
                response.end();
                return;
            }
            response.write('file created!');
            response.end();
        });
    } else if(request.url ==='/delete'){
        fs.unlink('data.txt', (err)=>{
            if(err){
                console.log(err);
                response.end();
                return;
            }
            response.write('file deleted!!!');
            response.end();
        });
    }else if(request.url === '/dice'){
       const randomNum =  Math.floor(Math.random() * 7);
       if(randomNum === 4){
           response.write('You won!');
           response.end();
       }else{
           response.write('You lost!');
           response.end();
       }
    } else{
        response.write('Unauthorized');
        response.end();
    }


}).listen(8080);

console.log('Listening on: http://localhost:8080');