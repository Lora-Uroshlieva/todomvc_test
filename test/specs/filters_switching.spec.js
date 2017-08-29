"use strict";

const expect = require('chai').expect;
const PageManager = require('./../../src/pages/PageManager');

const pages = new PageManager();
const allTaskPage = pages.allTaskPage;
const completedTaskPage = pages.completedTaskPage;
const activePage = pages.activeTaskPage;


describe('Switching from filter to filter', function () {
    before(function () {
        allTaskPage.open();
        allTaskPage.header.addNewTask('task');
    });

    it('should move to isCompleted tasks page', function () {
        allTaskPage.footer.completedFilter.click();
        let url = browser.getUrl();
        expect(url).to.equal('http://todomvc.com/examples/react/#/isCompleted');
    });

    it('should move to active tasks page', function () {
        completedTaskPage.footer.activeFilter.click();
        let url = browser.getUrl();
        expect(url).to.equal('http://todomvc.com/examples/react/#/active');
    });

    it('should move to all tasks page', function () {
        activePage.footer.allFilter.click();
        let url = browser.getUrl();
        expect(url).to.equal('http://todomvc.com/examples/react/#/');
    });


});
