"use strict";

const expect = require('chai').expect;
let PageManager = require('./../../src/pages/PageManager');

describe('Check process of adding new tasks and editing', function () {
    let pages = new PageManager();

    it('should add new task to list', function () {
        pages.taskPage.open();
        pages.taskPage.inputField.click();
        // browser.setValue('header input', '111');

    });
});
