sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
], function(UIComponent, JSONModel, ResourceModel) {
    'use strict';
    return UIComponent.extend('sap.ui.demo.walkthrough.Component', {
        metadata: {
            rootView: {
                viewName: 'sap.ui.demo.walkthrough.view.App',
                type: 'XML',
                async: true,
                id: 'app'
            }
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

            //setting i18n model
            var i18nModel = new ResourceModel({
                bundleName: 'sap.ui.demo.walkthrough.i18n.i18n',
                supportedLocales: [''],
                fallbackLocale: ''
            });
            this.setModel(i18nModel, 'i18n');
            
        }
    });
    
});