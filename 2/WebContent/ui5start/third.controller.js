sap.ui.controller("ui5start.third", {

	onButtonSubmit: function(oEvent){
		var sLabelIdValue = sap.ui.getCore().byId("idInputId").getValue();
		var sLabelNameValue = sap.ui.getCore().byId("idInputName").getValue();
		var sLabelSecondNameValue = sap.ui.getCore().byId("idInputSecondName").getValue();
		var sLabelGenderValue = sap.ui.getCore().byId("idInputGender").getValue();
		if(sLabelIdValue === '' || sLabelNameValue === '' || sLabelSecondNameValue === '' || sLabelGenderValue === ''){
			return;
		} else {
			var oModel = sap.ui.getCore().getModel();
			var oData = oModel.oData;
			oData.names.push({
				id: sLabelIdValue,
				Name: sLabelNameValue,
				SecondName: sLabelSecondNameValue,
				Gender: sLabelGenderValue
			});
			sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oData));
			app.to("idFirst");
		}
	},
	
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5start.third
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5start.third
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5start.third
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5start.third
*/
//	onExit: function() {
//
//	}

});