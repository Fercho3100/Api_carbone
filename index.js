var express = require('express');
const fs = require('fs');
const carbone = require('carbone');

var app = express();

app.use(express.json());

app.post('/',function(request, response){
  console.log()
  company =request.body.company
  try{
        if(company == "ebay"){
            path_file = './companies/ebay/ebay.ods'

        }else if (company == "amazon"){
            path_file = './companies/amazon/amazon.ods'
        }else if (company == "etiqueta"){
            path_file = './companies/etiqueta/etiqueta2.ods'
        }

        var options = {
            convertTo : 'pdf' //can be docx, txt, ...
          };
        
        carbone.render(path_file, request.body, options, function(err, result){
          if (err) return console.log(err);

          response.contentType("application/pdf");
          response.send(result);
        });
  }catch(e){
    console.log(e)
  }
});

app.listen(3005);