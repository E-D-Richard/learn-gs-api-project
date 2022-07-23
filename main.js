const {google} = require('googleapis');
// for more info on keys file: console.cloud.google.com
const keys = require('./keys.json');


// more info on the scopes (arr): https://developers.google.com/identity/protocols/oauth2/scopes#sheets
const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);


client.authorize(function(err, tokens){
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Connected!!');
    }
});
