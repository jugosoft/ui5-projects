sap.ui.controller("ui5start.first", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5start.first
*/
	onInit: function() {
		//here i placed mock data
		//just imagine that the inforamtion is obtained
		//from oData
		var oData = {
			"names": [{
				id: 1,
				Name: "Vito",
				SecondName: "Scaletta",
				Gender: "Debil"
			}, {
				id: 2,
				Name: "Joe",
				SecondName: "Barbaro",
				Gender: "Debil"
			}, {
				id: 3,
				Name: "Henry",
				SecondName: "Tomassino",
				Gender: "Snitcher"
			}, {
				id: 4,
				Name: "Leo",
				SecondName: "Galante",
				Gender: "Not a Debil"
			}, {
				id: 5,
				Name: "Ну а молодой",
				SecondName: "Человек есть",
				Gender: "?"
			}]	
		};
		
		var oModel = new sap.ui.model.json.JSONModel(oData);
		sap.ui.getCore().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5start.first
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5start.first
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5start.first
*/
//	onExit: function() {
//
//	}

});