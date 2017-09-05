"use strict";

const expect = require('chai').expect;
const PageManager = require('./../../src/pages/PageManager');

const pages = new PageManager();
const allTaskPage = pages.allTaskPage;
const clearPage = require('./../../src/helpers/clearTasks');
let preconditionHelper = require('./../../src/helpers/preconditionHelper');
let Task = require('./../../src/models/Task');

describe('Additional edit operations', function () {
    let newTask = new Task('Task opened as new #1', false);
    // let completedTask = new Task('Task  opened as completed #2', true);

    beforeEach(function() {
        allTaskPage.open();
        clearPage();
        preconditionHelper.createNewTask(newTask);

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
        expect(allTaskPage.tasksList.checkTaskText()).to.equal('Task opened as new #1');
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

