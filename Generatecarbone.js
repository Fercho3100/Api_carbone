const fs = require('fs');
const carbone = require('carbone');
function Export_Pdf(company,data){
  console.log(data);
  try{
    console.log(company)
    var path_file = '';
    if(company == "ebay"){
            path_file = './companies/ebay/ebay.ods'

        }else if (company == "amazon"){
            path_file = './companies/ebay/ebay.ods'
        }else if (company == "etiqueta"){
            path_file = './companies/etiqueta/etiqueta.ods'
        }

        var options = {
            convertTo : 'pdf' //can be docx, txt, ...
          };
        
        carbone.render(path_file, data, options, function(err, result){
          if (err) return console.log(err);
          var pdf = fs.writeFileSync('./Invoice'+data.date+'.pdf', result);
          return 'a';
          process.exit();// to kill automatically LibreOffice workers
         
        });

  }catch(e){
    console.log(e)
  }
    
}





module.exports = { Export_Pdf };