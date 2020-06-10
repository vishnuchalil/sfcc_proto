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
	
	let o = {} // empty Object
	let key = 'appointment_details';
	o[key] = []; // empty Array, which you can push() values into


	let data = {
	    serialNo: '1450632410296',
	    name: 'ABC',
	    slot:'9:30am-10:30am',
	    consultant:'Chalil',
	    date:'12-12-2020',
	    	
	};
	let data1 = {
		    serialNo: '1450632410291',
		    name: 'DEF',
		    slot:'11:30am-12:30am',
		    consultant:'Sur',
		    date:'15-12-2020',
		    	
		};
	
	o[key].push(data);
	o[key].push(data1);
	
	let appointmentList = JSON.stringify(o);

    app.getView({
        Action: '',
        AppointmentData: o,
        ContinueURL: URLUtils.https('Consultation-AccessAppointment')
    }).render('account/appointment/appointment.isml');
}


exports.AppointmentView = guard.ensure(['get', 'https', 'loggedIn'], appointmentView);

