sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment'
], function(Controller, MessageToast, Fragment) {
    'use strict';

    function saySomething (params) {
        //receiving msg from i18n model
        var oView = this.getView();
        var oBundle = oView.getModel('i18n').getResourceBundle();
        var sName = oView.getModel().getProperty('/user/name');
        var sMsg = oBundle.getText(params.text, [sName])
        MessageToast.show(sMsg);
    };

    return Controller.extend('sap.ui.demo.walkthrough.Intro', {
        //Actions on Initialization of View were moved to the component :-)
        onSayHi: function () {
            saySomething.call(this, { text: 'hiMsg' });
        },

        onSayBue: function () {
            saySomething.call(this, { text: 'bueMsg' });
        },

        onDialogueButton: function () {
            this.getOwnerComponent().openDialogue();
        },

        onDialogueClose: function () {
            this.getOwnerComponent().closeDialogue();
        }
    });
});