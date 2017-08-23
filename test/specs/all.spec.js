"use strict";

const expect = require('chai').expect;
const PageManager = require('./../../src/pages/PageManager');

const pages = new PageManager();
const allTaskPage = pages.allTaskPage;
const clearPage = require('./../../src/helpers/clearTasks');

describe('features works with tasks.', function () {
    beforeEach(function() {
        allTaskPage.open();
    });

    describe('Add', function () {
        beforeEach(function () {
            clearPage();
        });

        it('should add new task to list using input field', function () {
            allTaskPage.addNewTask('Task 1');
            expect(allTaskPage.checkTaskText()).to.equal('Task 1');
            expect(allTaskPage.checkTasksVisibility()).to.equal(true);
        });
    });


    describe('Edit', function () {
        before(function () {
            clearPage();
            allTaskPage.addNewTask('Task 1');
        });

        it('should edit task with clicking enter after input', function () {
            allTaskPage.editTask('Task was edited', 'Enter');
            expect(allTaskPage.checkTaskText()).to.equal('Task was edited');
        });
    });


    describe('Complete', function () {
        before(function () {
            clearPage();
            allTaskPage.addNewTask('Task 1');
        });

        it('Should complete task after clicking on checkbox', function () {
            allTaskPage.completeOneTask();
            expect(allTaskPage.countActiveTasks()).to.equal(0);
        });
    });


    describe('Complete all', function () {
        before(function () {
            clearPage();
            allTaskPage.addNewTask('Task 1');
        });

        it('Should complete task after clicking on checkbox', function () {
            allTaskPage.markAllTasks();
            expect(allTaskPage.countActiveTasks()).to.equal(0);
        });
    });

    describe('Reopen', function () {
        before(function () {
            clearPage();
            allTaskPage.addNewTask('Task 1');
            allTaskPage.completeOneTask();
        });

        it('should reopen task after clicking on checkbox', function () {
            allTaskPage.undoTask();
            expect(allTaskPage.countActiveTasks()).to.equal(1);
        });
    });

    describe('Delete', function () {
        before(function () {
            clearPage();
            allTaskPage.addNewTask('Task 1');
        });

        it('should delete task by clicking destroy button', function () {
            allTaskPage.deleteTask();
            expect(allTaskPage.checkTasksVisibility()).to.equal(false);
        });
    });

    describe('Clear completed', function () {
        before(function () {
            clearPage();
            allTaskPage.addNewTask('Task 1');
            allTaskPage.markAllTasks();
        });

        it('should delete all completed tasks by pushing button', function () {
            allTaskPage.clearCompletedTasks();
            expect(allTaskPage.checkTasksVisibility()).to.equal(false);
        });
    })
});