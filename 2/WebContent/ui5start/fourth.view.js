sap.ui.jsview("ui5start.fourth", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5start.fourth
	*/ 
	getControllerName : function() {
		return "ui5start.fourth";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5start.fourth
	*/ 
	createContent : function(oController) {
		var oPage = new sap.m.Page({
			title: "Add Item To The Model",
			showNavButton: true,
			navButtonPress: function(oEvent){
				app.back();
			},
			content: [
			       new sap.m.Text({
			    	  text: "Иди работаь!" 
			       })
			]
		});
 		
 		return oPage;
	}

});