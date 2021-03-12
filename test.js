const fs = require('fs');

function Path_invoice(nombre){
  RUTA_FOLDER = './companies'
  PATH_RESPONSE = RUTA_FOLDER;

  var data = fs.readdir(RUTA_FOLDER, function (err, archivos) {
      if (err) {
        onError(err);
        return;
      }
      for(id in archivos){
        if(archivos[id] == nombre){
          console.log("existe");
          PATH_RESPONSE = PATH_RESPONSE+'/'+nombre+'.ods'
          var options = {
            convertTo : 'pdf' //can be docx, txt, ...
          };
        
          carbone.render(path_file, request.body, options, function(err, result){
          if (err) return console.log(err);

          response.contentType("application/pdf");
          response.send(result);
        });
        }else{
          console.log(archivos[id])
        }
      }
    return PATH_RESPONSE;
  
  });
 console.log(data);
}




var data =Path_invoice('ebay');
console.log(data);

