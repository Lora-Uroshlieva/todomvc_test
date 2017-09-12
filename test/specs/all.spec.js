"use strict";

const expect = require('chai').expect;
const PageManager = require('./../../src/pages/PageManager');

const pages = new PageManager();
const allTaskPage = pages.allTaskPage;
const clearPage = require('./../../src/helpers/clearTasks');
let preconditionHelper = require('./../../src/helpers/preconditionHelper');
let Task = require('./../../src/models/Task');

describe('features works with tasks.', function () {
    let newTask = new Task('Task opened as new #1', false);
    let completedTask = new Task('Task opened as completed #2', true);

    beforeEach(function() {
        allTaskPage.open();
    });

    describe('Add', function () {
        beforeEach(function () {
            clearPage();
        });

        it('should add new task to list using input field', function () {
            allTaskPage.header.addNewTask('Task opened as new #1');
            expect(allTaskPage.tasksList.checkTaskText()).to.equal('Task opened as new #1');
            expect(allTaskPage.tasksList.checkTasksVisibility()).to.equal(true);
        });
    });

    describe('Edit', function () {
        beforeEach(function () {
            clearPage();
            preconditionHelper.createNewTask(newTask);
        });

        it('should edit task with clicking enter after input', function () {
            allTaskPage.tasksList.editTask('Task was edited', 'Enter');
            expect(allTaskPage.tasksList.checkTaskText()).to.equal('Task was edited');
        });
    });

    describe('Complete', function () {
        before(function () {
            clearPage();
            preconditionHelper.createNewTask(newTask);
        });

        it('Should complete task after clicking on checkbox', function () {
            allTaskPage.tasksList.completeOneTask();
            expect(allTaskPage.footer.countActiveTasks()).to.equal(0);
        });
    });

    describe('Complete all', function () {
        beforeEach(function () {
            clearPage();
            preconditionHelper.createNewTask(newTask);
        });

        it('Should complete task after clicking on checkbox', function () {
            // browser.pause(500000);
            allTaskPage.tasksList.markAllTasks();
            expect(allTaskPage.footer.countActiveTasks()).to.equal(0);
        });
    });

    describe('Reopen', function () {
        beforeEach(function () {
            clearPage();
            preconditionHelper.createNewTask(completedTask);
        });

        it('should reopen task after clicking on checkbox', function () {
            allTaskPage.tasksList.undoTask();
            expect(allTaskPage.footer.countActiveTasks()).to.equal(1);
        });
    });

    describe('Delete', function () {
        beforeEach(function () {
            clearPage();
            preconditionHelper.createNewTask(newTask);
        });

        it('should delete task by clicking destroy button', function () {
            allTaskPage.tasksList.deleteTask();
            expect(allTaskPage.tasksList.checkTasksVisibility()).to.equal(false);
        });
    });

    describe('Clear completed', function () {
        beforeEach(function () {
            clearPage();
            preconditionHelper.createNewTask(completedTask);
        });

        it('should delete all completed tasks by pushing button', function () {
            allTaskPage.tasksList.clearCompletedTasks();
            expect(allTaskPage.tasksList.checkTasksVisibility()).to.equal(false);
        });
    })
});