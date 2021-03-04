sap.ui.jsview("ui5start.second", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5start.second
	*/ 
	getControllerName : function() {
		return "ui5start.second";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5start.second
	*/ 
	createContent : function(oController) {
		
		var oModel = sap.ui.getCore().getModel();
		
		var oCol1 = new sap.m.Column({
			header: new sap.m.Text({text: "Столбец1"})
		});
		
		var oCol2 = new sap.m.Column({
			header: new sap.m.Text({text: "Столбец2"})
		});
		
		var oCol3 = new sap.m.Column({
			header: new sap.m.Text({text: "Столбец3"})
		});
		
		var oCol4 = new sap.m.Column({
			header: new sap.m.Text({text: "Столбец4"})
		});
		
		var oTable = new sap.m.Table("idMTable", {
			title: "sap.m.Table",
			columns: [
					  oCol1,
					  oCol2,
					  oCol3,
					  oCol4
			         ]
		});
		
		var oTemplate = new sap.m.ColumnListItem("idTemplate", {
			cells: [
			        new sap.m.Text({
			        	text: "{Name}"
			        }),
			        new sap.m.Text({
			        	text: "{Name}"
			        }),
			        new sap.m.Text({
			        	text: "{SecondName}"
			        }),
			        new sap.m.Text({
			        	text: "{Gender}"
			        })
			       ]
		});
		
		oTable.bindItems({
			path: "/names",
			template: oTemplate
		});
		

 		var oPage = new sap.m.Page({
			title: "sap.m.Table Demonstration",
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