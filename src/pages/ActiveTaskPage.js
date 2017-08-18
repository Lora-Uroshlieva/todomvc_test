"use strict";

const Page = require('./Page');

class ActiveTaskPage extends Page {

    constructor()           {super(); }
    open()                  {super.open('#/active'); }


    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //this should be moved to BasePage!------------------------------------------
    markAllTasks() {
        this.markAll.click();
    }



}

module.exports = ActiveTaskPage;