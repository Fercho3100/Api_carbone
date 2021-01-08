const fs = require('fs');
const carbone = require('carbone');
const carbone = require('carbone');
// Data to inject
var  data ={
    "date": 1492012745,
    "ship_to": {
      "name": "myCompany",
      "address": "here",
      "city": "Notfar",
      "country": ""
    },
    "bill_to": {
      "name": "myCompany",
      "address": "here",
      "city": "Notfar",
      "country": ""
    },
    "ship_from": {
      "name": "myCompany",
      "address": "here",
      "city": "Notfar",
      "country": ""
    },
    "items": [
      {
        "qty": "product 1",
        "item_code": 0.1,
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "price": 1,
        "pricetotal": 1
      },
      {
        "qty": "product 1",
        "item_code": 0.1,
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "price": 1,
        "pricetotal": 1
      },
      {
        "qty": "product 1",
        "item_code": 0.1,
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "price": 1,
        "pricetotal": 1
      },
      {
        "qty": "product 1",
        "item_code": 0.1,
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "price": 1,
        "pricetotal": 1
      },
      {
        "qty": "product 1",
        "item_code": 0.1,
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "price": 1,
        "pricetotal": 1
      },
      {
        "qty": "product 1",
        "item_code": 0.1,
        "desc": 10,
        "price": 1,
        "pricetotal": 1
      },
      {
        "qty": "product 1",
        "item_code": 0.1,
        "desc": "",
        "price": 1,
        "pricetotal": 1
      }
    ],
    "total_uni": 100,
    "total": 14
  };


  var options = {
    convertTo : 'pdf' //can be docx, txt, ...
  };

  carbone.render('./archivos/ebay/ebay.ods', data, options, function(err, result){
    if (err) return console.log(err);
    fs.writeFileSync('./result.pdf', result);
    //process.exit(); // to kill automatically LibreOffice workers
    process.exit();
  });



  const express = require('express')
const fs = require('fs');
const ca = require("./Generatecarbone");
const app = express()
const port = 3005

app.get('/', (req, res) => {
  console.log(req.body);      // your JSON
  res.send(req.body);    // echo the result back
  //var data =fs.readFileSync('./result.pdf');
  //res.contentType("application/pdf");
  //res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})