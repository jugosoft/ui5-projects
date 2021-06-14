sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/demo/walkthrough/model/formatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(Controller, JSONModel, Formatter, Filter, FilterOperator) {
    'use strict';
    return Controller.extend('sap.ui.demo.walkthrough.Invoice', {

        formatter: Formatter,

        onInit: function () {
            var oModel = new JSONModel({ currency: 'USD' });
            var oView = this.getView();
            oView.setModel(oModel, 'view');
        },

        onFilterInvoices: function (oEvent) {
            var aFilterOptions = [];
            var sQuery = oEvent.getParameter('query');
            
            if (sQuery) 
                aFilterOptions.push(new Filter('ProductName', FilterOperator.Contains, sQuery));
            
            var oList = this.byId('idInvoiceList');
            var oBinding = oList.getBinding('items');
            oBinding.filter(aFilterOptions);
        }
    });
});