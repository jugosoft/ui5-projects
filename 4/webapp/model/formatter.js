sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("statusA");
				case "B":
					return resourceBundle.getText("statusB");
				case "C":
					return resourceBundle.getText("statusC");
			}
            return sStatus;
		}
	};
});