const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}
//if we're in production look for .env file in
// our folder and bring it in, because it contains the PORT
//and THE STRIPE SECRET KEY
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
//import stripe and then pass the secret key as a parameter
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); 
//tells the app to convert any request being recieved
//we want to extract the body and convert it into JSON
app.use(bodyParser.urlencoded({extended:true}));
//handles any irregularities in the URL
//handles any unwanted characters in the URL
app.use(cors());
//handles any requests from other origins
//other ports or domains?

if(process.env.NODE_ENV==="production"){
    app.use( express.static( path.join( __dirname, 'client/build')));
    app.get('*',function(req,res){
        res.sendFile(path.join(__dirname,'client/build','index.html'))
        //if we get a request for anything for which we haven't made a route
        //respond by sending the html file(web page).
    });
}
app.listen(port,error=>{
    if(error){
        throw error;
    }
    else{
        console.log('Server running on Port : '+port);
    }
});

app.post('/payment',(req,res)=>{
    const requestBody={
        source : req.body.token.id,
        amount : req.body.amount,
        currency : 'usd'
    }
    stripe.charges.create(requestBody,(stripeErr,stripeRes)=>{
        if(stripeErr){
            res.status(500).send({error: stripeError});
        }
        else{
            res.status(200).send({success: stripeRes})
        }
    })
    
})
