"use strict";

class Page {

    constructor() {
        this.title = "My page";
    }

    open(path) {
        browser.url('/examples/react/'+ path);
    }

    isLoaded(elementLocator) {
        $(elementLocator).waitForVisible();
        return $(elementLocator).isVisible();
    }
}

module.exports = Page;