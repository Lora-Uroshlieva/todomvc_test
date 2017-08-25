"use strict";

const expect = require('chai').expect;
const PageManager = require('./../../src/pages/PageManager');

const pages = new PageManager();
const completedTaskPage = pages.completedTaskPage;
const allTaskPage = pages.allTaskPage;
const clearPage = require('./../../src/helpers/clearTasks');

describe('features works with tasks.', function () {
    beforeEach(function() {
        completedTaskPage.open();
    });

    describe('Reopen', function () {
        beforeEach(function () {
            clearPage();
            completedTaskPage.addNewTask('Task 1');
            completedTaskPage.allFilter.click();
            allTaskPage.completeOneTask();
            completedTaskPage.open();
        });

        it('should reopen task after clicking on checkbox', function () {
            completedTaskPage.undoTask();
            expect(completedTaskPage.countActiveTasks()).to.equal(1);
        });
    });

    describe('Reopen all', function () {
        beforeEach(function () {
            clearPage();
            completedTaskPage.addNewTask('Task for reopening');
            completedTaskPage.allFilter.click();
            allTaskPage.markAllTasks();
            completedTaskPage.open();
        });

        it('should reopen all tasks after clicking on button', function () {
            expect(completedTaskPage.checkTaskText()).to.equal('Task for reopening');
            completedTaskPage.markAllTasks();
            expect(completedTaskPage.countActiveTasks()).to.equal(1);
            pages.allTaskPage.open();
            expect(completedTaskPage.checkTaskText()).to.equal('Task for reopening');
        });
    });

    describe('Delete', function () {
        beforeEach(function () {
            clearPage();
            completedTaskPage.addNewTask('Task 1');
            completedTaskPage.allFilter.click();
            allTaskPage.completeOneTask();
            completedTaskPage.open();
        });

        it('should delete task by clicking destroy button', function () {
            completedTaskPage.deleteTask();
            expect(completedTaskPage.checkTasksVisibility()).to.equal(false);
        });
    });

    describe('Clear completed', function () {
        beforeEach(function () {
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



