"use strict";

const BasePage = require('./BasePage');

class CompletedTaskPage extends BasePage {

    constructor()           {super(); }
    open()                  {super.open('#/completed'); }


    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //this should be moved to BasePage!------------------------------------------
    markAllTasks() {
        this.markAll.click();
    }

}

module.exports = CompletedTaskPage;