"use strict";

const Page = require('./Page');

class AllTaskPage extends Page {


    constructor() {
        super();
    }

    open() {
        super.open('#/');
        this.isLoaded('.header');
    }
}

module.exports = AllTaskPage;