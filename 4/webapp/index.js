sap.ui.define([
    "sap/m/Text"
], function(Text){
    'use strict';
    
    console.log('UI5 Framework ist bereit!');

    var oText = new Text({text: 'UI5 Framework ist bereit!'});
    oText.placeAt('content');
})