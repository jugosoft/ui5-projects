sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    //'sap/ui/model/resource/ResourceModel'
], function(UIComponent, JSONModel) {
    'use strict';
    return UIComponent.extend('sap.ui.demo.walkthrough.Component', {
        metadata: {
            manifest: 'json'
        },
        init: function () {
            //we're calling init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            
            //simulates fetching JSON data
            var oData = {
                user: {
                    name: 'Ivan',
                    lastName: 'Ivanov',
                    age: 24
                }
            };
            
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
            
        }
    });
    
});