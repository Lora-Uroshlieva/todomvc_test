"use strict";

const expect = require('chai').expect;
const PageManager = require('./../../src/pages/PageManager');

const pages = new PageManager();
const allTaskPage = pages.allTaskPage;
const clearPage = require('./../../src/helpers/clearTasks');


describe('Additional edit operations', function () {
    beforeEach(function() {
        allTaskPage.open();
        clearPage();
        allTaskPage.header.addNewTask('Task 1');
    });

    it('should confirm edit by click outside', function () {
        allTaskPage.tasksList.editTask('Task was edited twice', 'click');
        expect(allTaskPage.tasksList.checkTaskText()).to.equal('Task was edited twice');
    });

    it('should confirm edit by press Tab', function () {
        allTaskPage.tasksList.editTask('Task was edited 3 times', 'Tab');
        expect(allTaskPage.tasksList.checkTaskText()).to.equal('Task was edited 3 times');
    });

    it('should cancel edit by press escape', function () {
        allTaskPage.tasksList.oneItem.doubleClick();
        allTaskPage.tasksList.inputEdit.setValue('Task was edited');
        allTaskPage.tasksList.inputEdit.keys("Escape");
        expect(allTaskPage.tasksList.checkTaskText()).to.equal('Task 1');
    });

    it('should delete task after editing to empty text', function () {
        allTaskPage.tasksList.editTask('  ', 'Enter');
        expect(allTaskPage.tasksList.checkTasksVisibility()).to.equal(false);
    });
});

describe('Add', function () {
    before(function () {
        allTaskPage.open();
        clearPage();
    });

    it('should not add new task when no text entered', function () {
        allTaskPage.header.addNewTask('');
        expect(allTaskPage.tasksList.checkTasksVisibility()).to.equal(false);
    });
});

