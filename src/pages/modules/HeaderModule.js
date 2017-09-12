"use strict";

class HeaderModule {

    constructor(locator){
        this.locator = locator;
    }

    get wrapper() {//TODO move to BaseModule class
        $(this.locator).waitForVisible();
        return $(this.locator); 
    }
    get inputField()    { return this.wrapper.$('input.new-todo'); }


    addNewTask(text) {
        this.inputField.waitForVisible();
        this.inputField.setValue(text).keys("Enter");
    }

}

module.exports = HeaderModule;