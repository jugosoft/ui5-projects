sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
], function(IMayCallItAsIWish, MessageToast) {
    'use strict';

    return IMayCallItAsIWish.extend("sap.ui.demo.walkthrough.Text", {
        onInit: function () {
            MessageToast.show("Second View is Now Loaded!", {
                duration: 500,
            });
        }
    });
    
});