sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/demo/walkthrough/model/formatter'
], function(Controller, JSONModel, formatter) {
    'use strict';
    return Controller.extend('sap.ui.demo.walkthrough.Invoice', {
        formatter: formatter,
        onInit: function () {
            var oModel = new JSONModel({ currency: 'USD' });
            var oView = this.getView();
            oView.setModel(oModel, 'view');
        }
    });
});