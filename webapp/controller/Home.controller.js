sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    const hideInputText = (inputText) => {
        inputText.setVisible(false)
    }
    const showInputText = (inputText) => {
        inputText.setVisible(true)
    }

    return Controller.extend("com.xtendhr.hello.controller.Home", {
        onInit() {
            // EXERCISE 1
            //model setup
            var oData = {value: "Hola mundo desde JSONModel"}
            var model = new JSONModel(oData)
            this.getView().setModel(model)
            this.getView().setModel(model, "data")

            //buttons recollection
            var button_hide = this.getView().byId("hideButton")
            var button_show = this.getView().byId("showButton")

            //text input recollection
            var input_0 = this.getView().byId("input_0")
            console.log(input_0)
            var input_1 = this.getView().byId("input_1")
            var input_2 = this.getView().byId("input_2")

            //text inputs text setup
            input_0.setValue("Hola mundo desde Init")

            //buttons onPress actions
            button_hide.attachPress(()=>{
                hideInputText(input_0)
                hideInputText(input_1)
                hideInputText(input_2)
            }, this)
            button_show.attachPress(()=>{
                showInputText(input_0)
                showInputText(input_1)
                showInputText(input_2)
            })

            // EXERCISE 2
            var oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

            var imageButton = this.getView().byId("imageButton")
            var image_0 = this.getView().byId("image_0")
            imageButton.attachPress(()=>{
                if(image_0.getVisible() == true)                {
                    image_0.setVisible(false)
                    imageButton.setText(oBundle.getText("btnShowTxt"))
                    imageButton.setIcon("sap-icon://show")
                } else{
                    image_0.setVisible(true)
                    imageButton.setText(oBundle.getText("btnHideTxt"))
                    imageButton.setIcon("sap-icon://hide")
                }
            },this)
        }
    });
});