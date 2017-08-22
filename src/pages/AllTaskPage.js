"use strict";

const HeaderModule = require('./modules/HeaderModule');
const TasksModule = require('./modules/TasksModule');
const FooterModule = require('./modules/FooterModule');
const Page = require('./Page');

class AllTaskPage extends Page {


    constructor() {
        super();
        this.header = new HeaderModule('.header');
        this.tasksList = new TasksModule('.main');
        this.footer = new FooterModule('.footer');
    }

    open() {
        super.open('#/');
    }

}

module.exports = AllTaskPage;