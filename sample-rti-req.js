/**
 * Example use of RTI Api invokation
 */
'use strict';
var rtirestclient = require('/clients/rtirestclient');
var rticlient = rtirestclient();

var rule_def = {} //add rule def here
rticlient.post("/rule",rule_def,function(err,data){
    if(!err)
        console.log('Exeuted Ok')
    else
        console.log('Exeuted Failed')
    });
    

