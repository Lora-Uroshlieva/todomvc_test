"use strict";

const Page = require('./Page');

class BasePage extends Page{

    constructor() {
        super();
    }

    markAllTasks() {
        this.markAll.click();
    }
}

module.exports = BasePage;