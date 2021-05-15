sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast'
], function(Controller, JSONModel, MessageToast) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        //Actions on Initialization of View
        onInit: function() {
            //simulates fetching JSON data
            var oData = {
                user: {
                    name: 'Ivan',
                    lastName: 'Ivanov',
                    age: 24
                }
            };
            
            var oModel = new JSONModel(oData);
            var oView = this.getView();

            oView.setModel(oModel);
        },

        onSayHi: function() {

            

            MessageToast.show('Hallo, Kamerad!');
        },
        onSayBue: function () {
            MessageToast.show('Aus WiederSehen!');
        }
    });    
});