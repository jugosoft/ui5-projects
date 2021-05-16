sap.ui.define([
    'sap/ui/core/ComponentContainer'
], function (ComponentContainer) {
	"use strict";
	var oComponentContainer = new ComponentContainer({
		name: 'sap.ui.demo.walkthrough',
		settings: {
			id: 'walkthrough'
		},
		async: true
	});
	oComponentContainer.placeAt("content");
});