sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"webcontent/lib/MessageManager"
], function(Controller, Device, MessageManager) {
	"use strict";

	return Controller.extend("webcontent.controller.main", {
		onInit: function() {
			this.getView().addStyleClass(
				Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
		},
		
		  onShowHello: function () {
            // show a native JavaScript alert
            alert("Hello World");
        },
        
        onPressBtn: function () {
					MessageManager.reportSuccess("привет sap!", "приветствие");
				},
				
		 onPressBtn_2: function () {
		 	sap.ui.require(["webcontent/lib/MessageManager"], function(MessageManager_2) {
					MessageManager_2.reportSuccess("привет мир", "заголовок");	
				});	
		 }
	});
});