"use strict";

class BasePage {
    constructor() {
        this.title = "My page";
    }

    open(path) {
        browser.url('');
    }
}

module.exports = BasePage;