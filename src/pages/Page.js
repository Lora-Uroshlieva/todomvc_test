"use strict";

class Page {

    constructor() {
        this.title = "My page";
    }

    open(path) {
        browser.url('/examples/react/'+ path);
    }
}

module.exports = Page;