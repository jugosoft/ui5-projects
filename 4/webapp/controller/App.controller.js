sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
], function(Controller, MessageToast) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onSayHi: function() {
            MessageToast.show('Hallo, Kamerad!');
        },
        onSayBue: function () {
            MessageToast.show('Aus WiederSehen!');
        }
    });    
});