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
        allTaskPage.addNewTask('task');
    });

    it('should move to completed tasks page', function () {
        allTaskPage.completedFilter.click();
        let url = browser.getUrl();
        expect(url).to.equal('http://todomvc.com/examples/react/#/completed');
    });

    it('should move to active tasks page', function () {
        completedTaskPage.activeFilter.click();
        let url = browser.getUrl();
        expect(url).to.equal('http://todomvc.com/examples/react/#/active');
    });

    it('should move to all tasks page', function () {
        activePage.allFilter.click();
        let url = browser.getUrl();
        expect(url).to.equal('http://todomvc.com/examples/react/#/');
    });


});
