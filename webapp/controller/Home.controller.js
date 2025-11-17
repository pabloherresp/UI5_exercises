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
            //buttons recollection
            var button_hide = this.getView().byId("hideButton")
            var button_show = this.getView().byId("showButton")

            //text input recollection
            var input_0 = this.getView().byId("input_0")
            var input_1 = this.getView().byId("input_1")
            var input_2 = this.getView().byId("input_2")

            //text inputs text setup
            input_0.setValue("Hola mundo desde Init")
            var oData = {value: "Hola mundo desde JSONModel"}
            var model = new JSONModel(oData)
            this.getView().setModel(model)
            this.getView().setModel(model, "data")

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
        }
    });
});