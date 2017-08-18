"use strict";

const AllTaskPage = require('./AllTaskPage');
const ActiveTaskPage = require('./ActiveTaskPage');
const CompletedTaskPage = require('./CompletedTaskPage');

class PageManager {
    constructor() {
        this.allTaskPage = new AllTaskPage();
        this.activeTaskpage = new ActiveTaskPage();
        this.completedTaskPage = new CompletedTaskPage();
    }
}

module.exports = PageManager;