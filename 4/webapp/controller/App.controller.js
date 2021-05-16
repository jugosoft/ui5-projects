sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',    
    'sap/ui/model/resource/ResourceModel'
], function(Controller, MessageToast, ResourceModel) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        //Actions on Initialization of View were moved to the component :-)
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