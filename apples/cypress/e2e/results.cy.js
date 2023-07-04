const ac = require("@antiadmin/anticaptchaofficial");
const fs = require('fs');

const captcha = fs.readFileSync('./captcha.jpg', { encoding: 'base64' });

ac.setAPIKey('32caa6cc7a3e1def7f170706367cf3a8');

ac.solveImage(captcha, true)
    .then(text => console.log('captcha text: '+text))
    .catch(error => console.log('test received error '+error));

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://msbte.org.in/pcwebBTRes/pcResult01/pcfrmViewMSBTEResult.aspx');
    
    //select seat number from dropdown
    cy.get("#ddlEnrollOrSeatNo").select("1");

    //enter seat number
    cy.get("#txtEnrollOrSeatNo").type("2005220324");


  })
})

