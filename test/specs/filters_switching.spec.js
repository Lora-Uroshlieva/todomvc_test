"use strict";

const PageManager = require('./../../src/pages/PageManager');
const pages = new PageManager();
const allTaskPage = pages.allTaskPage;
const completedTaskPage = pages.completedTaskPage;
const activePage = pages.activeTaskPage;
let preconditionHelper = require('./../../src/helpers/preconditionHelper');
let Task = require('./../../src/models/Task');

describe('Switching from filter to filter', function () {
    let newTask = new Task('Task opened as new #1', false);
    let completedTask = new Task('Task  opened as completed #2', true);

    before(function () {
        allTaskPage.open();
        preconditionHelper.createNewTask(newTask);
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