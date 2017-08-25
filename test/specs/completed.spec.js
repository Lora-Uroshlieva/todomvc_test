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
            completedTaskPage.header.addNewTask('Task 1');
            completedTaskPage.footer.allFilter.click();
            allTaskPage.tasksList.completeOneTask();
            completedTaskPage.open();
        });

        it('should reopen task after clicking on checkbox', function () {
            completedTaskPage.tasksList.undoTask();
            expect(completedTaskPage.footer.countActiveTasks()).to.equal(1);
        });
    });

    describe('Reopen all', function () {
        beforeEach(function () {
            clearPage();
            completedTaskPage.header.addNewTask('Task for reopening');
            completedTaskPage.footer.allFilter.click();
            allTaskPage.header.markAllTasks();
            completedTaskPage.open();
        });

        it('should reopen all tasks after clicking on button', function () {
            expect(completedTaskPage.tasksList.checkTaskText()).to.equal('Task for reopening');
            completedTaskPage.header.markAllTasks();
            expect(completedTaskPage.footer.countActiveTasks()).to.equal(1);
            pages.allTaskPage.open();
            expect(completedTaskPage.tasksList.checkTaskText()).to.equal('Task for reopening');
        });
    });

    describe('Delete', function () {
        beforeEach(function () {
            clearPage();
            completedTaskPage.header.addNewTask('Task 1');
            completedTaskPage.footer.allFilter.click();
            allTaskPage.tasksList.completeOneTask();
            completedTaskPage.open();
        });

        it('should delete task by clicking destroy button', function () {
            completedTaskPage.tasksList.deleteTask();
            expect(completedTaskPage.tasksList.checkTasksVisibility()).to.equal(false);
        });
    });

    describe('Clear completed', function () {
        beforeEach(function () {
            clearPage();
            completedTaskPage.header.addNewTask('Task 1');
            completedTaskPage.header.markAllTasks();
        });

        it('should delete all completed tasks by pushing button', function () {
            completedTaskPage.tasksList.clearCompletedTasks();
            expect(completedTaskPage.tasksList.checkTasksVisibility()).to.equal(false);
        });
    })
});



