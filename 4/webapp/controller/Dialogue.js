sap.ui.define([
    'sap/ui/base/ManagedObject',
    'sap/ui/core/Fragment'
], function (ManagedObject, Fragment) {
    'use strict';
    return ManagedObject.extend('sap.ui.walkthrough.controller.Dialogue', {
        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView;
        },

        open: function () {
            var oView = this._oView;
            //lazy dialogue loading
            if (!oView.byId('idDialogue')) {
                var oFragmentController = {
                    onCloseDialogue: function () {
                        oView.byId('idDialogue').close();
                    }
                };
                //async loading
                Fragment.load({
                    id: oView.getId(),
                    name: 'sap.ui.demo.walkthrough.view.DialogueFragment',
                    controller: oFragmentController
                }).then(function (oDialogue) {
                    oView.addDependent(oDialogue);
                    oDialogue.open();
                });
            } else {
                oView.byId('idDialogue').open();
            }
        },

        close: function () {
            this._oView.byId('idDialogue').close();
        }
    });
});




