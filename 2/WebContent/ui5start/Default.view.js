sap.ui.jsview("ui5start.Default", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5start.Default
	*/ 
	getControllerName : function() {
		return "ui5start.Default";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5start.Default
	*/ 
	createContent : function(oController) {
		
		var oTileOne = new sap.m.StandardTile("idTileOne", {
			title: "Eins",
			info: "First Description",
			icon: "sap-icon://account",
			press: [oController.onTileOnePress, oController]
		});
		
		var oTileTwo = new sap.m.StandardTile("idTileTwo", {
			title: "Zwei",
			info: "Second Description",
			icon: "sap-icon://action",
			press: [oController.onTileTwoPress, oController]
		});
		
		var oTileOThree = new sap.m.StandardTile("idTileThree", {
			title: "Drei",
			info: "Third Description",
			icon: "sap-icon://add",
			press: [oController.onTileOThreePress, oController] 
		});
		
		var oTileFour = new sap.m.StandardTile("idTileFourth", {
			title: "СПД как в СИБИНТЕК",
			info: "Сверх подробное описание",
			icon: "sap-icon://activities",
			press: [oController.onTileFourPress, oController] 
		});
		
		var oTileContainer = new sap.m.TileContainer("idTileContainer", {
			tiles: [
			        oTileOne, 
			        oTileTwo,
			        oTileOThree,
			        oTileFour
			]
		});
		
		var oPage = new sap.m.Page({
			title: "Tile Container",
			content: [
			          oTileContainer
			]
		});
		
		return oPage;
	}

});
