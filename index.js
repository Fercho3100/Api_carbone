var express = require('express');
const fs = require('fs');
const carbone = require('carbone');

var app = express();

app.use(express.json());

app.post('/',function(request, response){
  console.log()
  company =request.body.company

  
  try{
    RUTA_FOLDER = './companies'
    PATH_RESPONSE = RUTA_FOLDER;
  
    fs.readdir(RUTA_FOLDER, function (err, archivos) {
        if (err) {
          onError(err);
          return;
        }
        for(id in archivos){
          if(archivos[id] == company){
            //console.log("existe");
            PATH_RESPONSE = PATH_RESPONSE+'/'+company+'/'+company+'.ods'
            var options = {
              convertTo : 'pdf' //can be docx, txt, ...
            };
          
            carbone.render(PATH_RESPONSE, request.body, options, function(err, result){
            if (err) return console.log(err);
  
            response.contentType("application/pdf");
            response.send(result);
          });
          }else{
            //console.log(archivos[id])
          }
        }
      return PATH_RESPONSE;
    
    });
  }catch(e){
    console.log(e)
  }
});


app.listen(3005);