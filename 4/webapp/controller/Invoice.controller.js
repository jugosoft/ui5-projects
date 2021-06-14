sap.ui.define([
    'sap/ui/core/Controller',
    'sap/ui/model/json/JSONModel'
], function(Controller, JSONModel) {
    'use strict';
    return Controller.extend('sap.ui.demo.walkthrough.Invoice', {
        onInit: function () {
            var oModel = new JSONModel({ currency: 'USD' });
            var oView = this.getView();
            oView.setModel(oModel);
        }
    });
});