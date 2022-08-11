sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"com/rus/development/demoApp/model/formatter"
], function (Controller, MessageToast, formatter) {
	"use strict";

	return Controller.extend("com.rus.development.demoApp.controller.App", {

		formatter : formatter,

		onShowHello : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		}
	});
});