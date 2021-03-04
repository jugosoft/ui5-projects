sap.ui.controller("ui5start.Default", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5start.Default
*/
//	onInit: function() {
//
//	},
	
	onTileOnePress: function(oEvent){
		app.to("idFirst");
	},
	
	onTileTwoPress: function(oEvent){
		app.to("idSecond");
	},
	
	onTileOThreePress: function(oEvent){
		app.to("idThird");
	},	
	
	onTileFourPress: function(oEvent){
		app.to("idFourth");
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5start.Default
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5start.Default
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5start.Default
*/
//	onExit: function() {
//
//	}

});