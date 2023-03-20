const express = require("express");
const bodyParser = require("body-parser");
//const request = require("request");
const https = require("https");
const fs = require("fs");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
	res.sendFile(__dirname+"/signup.html");
});

app.post("/",(req,res)=>{
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
console.log(fName);
    const dataObj = {
       firstName: fName,
       lastName: lName,
       Email:email
   }

   const JsonData = JSON.stringify(dataObj);

   fs.appendFile("data.js",JsonData,(err)=>{
      if(err) throw err;
      console.log("success");
   });


 /*
    var data = {
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME:fName,
                    LNAME:lName
                }
            }
            ]
    }
    const jsonData = JSON.stringify(data);
    
    const url = "https://us21.api.mailchimp.com/3.0/lists/49ce2ffc29";
    const options = {
        method:"POST",
        auth:"anish:0901f782c0485ade7ee80a2123978ae3-us21"
    }
    
    
    const request = https.request(url,options,function(response){
        if(response.statusCode ==200){
            res.send("Succesfully submitted.");
        }
        else{
            console.log(response.statusCode);
            res.send("Failure try again.");
        }
        response.on("data",(data)=>{
            console.log(JSON.parse(data));
        });
    });
    request.write(jsonData);
    request.end();*/
});



app.listen(process.env.PORT || 3000,()=>{
	console.log("running");
});

//apikey
//304a8cf744e3d7a2433ecad7e9f054d7-us21

//listid
//49ce2ffc29
