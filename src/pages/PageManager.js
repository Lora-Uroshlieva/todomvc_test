"use strict";

const TaskPage = require('./TaskPage');

class PageManager {
    constructor() {
        this.taskPage = new TaskPage();
    }
}

module.exports = PageManager;