/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Consultation
*/

'use strict';

// HINT: do not put all require statements at the top of the file
// unless you really need them for all functions

/**
* Description of the function
*
* @return {String} The string 'myFunction'
*/
// var myFunction = function(){
//     return 'myFunction';
// }

/* Exports of the controller */
///**
// * @see {@link module:controllers/Consultation~myFunction} */
//exports.MyFunction = myFunction;

var Resource = require('dw/web/Resource');
var URLUtils = require('dw/web/URLUtils');
var Form = require('storefront_controllers/cartridge/scripts/models/FormModel');
var OrderMgr = require('dw/order/OrderMgr');

/* Script Modules */
var app = require('storefront_controllers/cartridge/scripts/app');
var guard = require('storefront_controllers/cartridge/scripts/guard');
var Transaction = require('dw/system/Transaction');


function appointmentView() {

    app.getView({
        Action: 'edit',
        ContinueURL: URLUtils.https('Account-EditForm')
    }).render('account/user/registration');
}


exports.AppointmentView = guard.ensure(['get', 'https', 'loggedIn'], appointmentView);

