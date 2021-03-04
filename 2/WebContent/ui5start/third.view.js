sap.ui.jsview("ui5start.third", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5start.third
	*/ 
	getControllerName : function() {
		return "ui5start.third";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5start.third
	*/ 
	createContent : function(oController) {
		
		var oSimpleForm = new sap.ui.layout.form.SimpleForm({
            minWidth: 1024,
            maxContainerCols : 2,
            title: new sap.ui.core.Title({text: "A Form"}),
            content : [
                new sap.m.HBox({
                	alignItems: sap.m.FlexAlignItems.Center, 
                	items: [
		                	new sap.m.Label({
		                        text: "My Label for id"
		                    }),
		                    new sap.m.Input("idInputId", {
		                        placeholder: "id",
		                    })
		                   ]
                }),
                new sap.m.HBox({
                	alignItems: sap.m.FlexAlignItems.Center, 
                	items: [
		                	new sap.m.Label({
		                        text: "My Label for Name"
		                    }),
		                    new sap.m.Input("idInputName", {
		                        placeholder: "Name",
		                    })
		                   ]
                }),
                new sap.m.HBox({
                	alignItems: sap.m.FlexAlignItems.Center, 
                	items: [
		                	new sap.m.Label({
		                        text: "My Label for SecondName"
		                    }),
		                    new sap.m.Input("idInputSecondName", {
		                        placeholder: "SecondName",
		                    })
		                   ]
                }),
                new sap.m.HBox({
                	alignItems: sap.m.FlexAlignItems.Center, 
                	items: [
		                	new sap.m.Label({
		                        text: "My Label for Gender"
		                    }),
		                    new sap.m.Input("idInputGender", {
		                        placeholder: "Gender",
		                    })
		                   ]
                }),
                
                new sap.m.Button("idButton", {
                	text: "Отправить",
                	press: [oController.onButtonSubmit, oController]
                })
                
            ]
        });
		
 		var oPage = new sap.m.Page({
			title: "Add Item To The Model",
			showNavButton: true,
			navButtonPress: function(oEvent){
				app.back();
			},
			content: [
			          oSimpleForm
			]
		});
 		
 		return oPage;
	}

});