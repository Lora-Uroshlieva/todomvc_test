"use strict";

class HeaderModule {

    constructor(locator){
        this.locator = locator;
    }

    get inputField()    {return $('input.new-todo'); }
    get markAll()       {return $('input.toggle-all')}

    addNewTask(text) {
        this.inputField.waitForVisible();
        this.inputField.setValue(text).keys("Enter");
    }

    markAllTasks() {
        this.markAll.click();
    }
}

module.exports = HeaderModule;