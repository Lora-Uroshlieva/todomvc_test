"use strict";

class HeaderModule {

    constructor(locator){
        this.locator = locator;
    }

    get wrapper()       { return $(this.locator); }
    get inputField()    { return this.wrapper.$('input.new-todo'); }
    get markAll()       { return this.wrapper.$('input.toggle-all'); }

    addNewTask(text) {
        this.inputField.waitForVisible();
        this.inputField.setValue(text).keys("Enter");
    }

    markAllTasks() {
        this.markAll.click();
    }
}

module.exports = HeaderModule;