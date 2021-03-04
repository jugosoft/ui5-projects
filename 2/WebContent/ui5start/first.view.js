sap.ui.jsview("ui5start.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5start.first
	*/ 
	getControllerName : function() {
		return "ui5start.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5start.first
	*/ 
	createContent : function(oController) {
		
		//defining columns
		
		var oCol1 = new sap.ui.table.Column("idCol1", {
			label: new sap.m.Label({text: "Столбец1"}),
			template: new sap.ui.commons.TextField({value: "{id}"})
		});
		
		var oCol2 = new sap.ui.table.Column("idCol2", {
			label: new sap.m.Label({text: "Столбец2"}),
			template: new sap.ui.commons.TextField({value: "{Name}"})
		});
		
		var oCol3 = new sap.ui.table.Column("idCol3", {
			label: new sap.m.Label({text: "Столбец3"}),
			template: new sap.ui.commons.TextField({value: "{SecondName}"})
		});
		
		var oCol4 = new sap.ui.table.Column("idCol4", {
			label: new sap.m.Label({text: "Столбец4"}),
			template: new sap.ui.commons.TextField({value: "{Gender}"})
		});
		
		var oTable = new sap.ui.table.Table("idTable1", {
			title: new sap.m.Text({
				text: "Table",
				textAlign: sap.ui.core.TextAlign.Center
			}),
			selectionMode : sap.ui.table.SelectionMode.Single,
			columns: [
						oCol1,
						oCol2,
						oCol3,
						oCol4
			          ]
		});
		
		var oModel = sap.ui.getCore().getModel();
		
		oTable.setModel(oModel);
		oTable.bindRows("/names");
		
 		var oPage = new sap.m.Page({
			title: "Table Demonstration",
			showNavButton: true,
			navButtonPress: function(oEvent){
				app.back();
			},
			content: [
			          oTable
			         ]
		});
 		return oPage;
	}

});