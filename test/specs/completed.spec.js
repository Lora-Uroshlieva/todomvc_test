"use strict";

const expect = require('chai').expect;
const PageManager = require('./../../src/pages/PageManager');

const pages = new PageManager();
const completedTaskPage = pages.completedTaskPage;
const clearPage = require('./../../src/helpers/clearTasks');

describe('features works with tasks.', function () {
    beforeEach(function() {
        completedTaskPage.open();
    });

    describe('Reopen', function () {
        before(function () {
            clearPage();
            completedTaskPage.addNewTask('Task 1');
            completedTaskPage.completeOneTask();
        });

        it('should reopen task after clicking on checkbox', function () {
            completedTaskPage.undoTask();
            expect(completedTaskPage.countActiveTasks()).to.equal(1);
        });
    });

    describe('Reopen all', function () {
        before(function () {
            clearPage();
            completedTaskPage.addNewTask('Task for reopening');
            completedTaskPage.markAllTasks();
        });

        it('should reopen all tasks after clicking on button', function () {
            completedTaskPage.markAllTasks();
            expect(completedTaskPage.countActiveTasks()).to.equal(1);
            expect(completedTaskPage.checkTaskText()).to.equal('Task for reopening');
        });
    });

    describe('Delete', function () {
        before(function () {
            clearPage();
            completedTaskPage.addNewTask('Task 1');
        });

        it('should delete task by clicking destroy button', function () {
            completedTaskPage.deleteTask();
            expect(completedTaskPage.checkTasksVisibility()).to.equal(false);
        });
    });

    describe('Clear completed', function () {
        before(function () {
            clearPage();
            completedTaskPage.addNewTask('Task 1');
            completedTaskPage.markAllTasks();
        });

        it('should delete all completed tasks by pushing button', function () {
            completedTaskPage.clearCompletedTasks();
            expect(completedTaskPage.checkTasksVisibility()).to.equal(false);
        });
    })
});



