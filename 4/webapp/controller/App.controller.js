sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast',
    'sap/ui/model/resource/ResourceModel'
], function(Controller, JSONModel, MessageToast, ResourceModel) {
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

            //setting i18n model
            var i18nModel = new ResourceModel({
                bundleName: 'sap.ui.demo.walkthrough.i18n.i18n',
                supportedLocales: [''],
                fallbackLocale: ''
            });

            oView.setModel(i18nModel, 'i18n');

            oView.setModel(oModel);
        },

        onSayHi: function() {
            //receiving msg from i18n model
            var oView = this.getView();
            var oBundle = oView.getModel('i18n').getResourceBundle();
            var sName = oView.getModel().getProperty('/user/name');
            var sMsg = oBundle.getText('hiMsg', [sName])
            MessageToast.show(sMsg);
        },


        onSayBue: function () {
            //receiving msg from i18n model
            var oView = this.getView();
            var oBundle = oView.getModel('i18n').getResourceBundle();
            var sName = oView.getModel().getProperty('/user/name');
            var sMsg = oBundle.getText('bueMsg', [sName])
            MessageToast.show(sMsg);
        }
    });    
});