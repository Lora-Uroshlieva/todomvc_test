"use strict";

const expect = require('chai').expect;
const PageManager = require('./../../src/pages/PageManager');

const pages = new PageManager();
const activeTaskPage = pages.activeTaskPage;
const clearPage = require('./../../src/helpers/clearTasks');

describe('features works with tasks.', function () {
    beforeEach(function() {
        activeTaskPage.open();
    });

    describe('Add', function () {
        beforeEach(function () {
            clearPage();
        });

        it('should add new task to list using input field', function () {
            activeTaskPage.addNewTask('Task 1');
            expect(activeTaskPage.checkTaskText()).to.equal('Task 1');
            expect(activeTaskPage.checkTasksVisibility()).to.equal(true);
        });
    });


    describe('Edit', function () {
        before(function () {
            clearPage();
            activeTaskPage.addNewTask('Task 1');
        });

        it('should edit task with clicking enter after input', function () {
            activeTaskPage.editTask('Task was edited', 'Enter');
            expect(activeTaskPage.checkTaskText()).to.equal('Task was edited');
        });
    });


    describe('Complete', function () {
        before(function () {
            clearPage();
            activeTaskPage.addNewTask('Task 1');
        });

        it('Should complete task after clicking on checkbox', function () {
            activeTaskPage.completeOneTask();
            expect(activeTaskPage.countActiveTasks()).to.equal(0);
        });
    });


    describe('Complete all', function () {
        before(function () {
            clearPage();
            activeTaskPage.addNewTask('Task 1');
        });

        it('should complete task after clicking on checkbox', function () {
            activeTaskPage.markAllTasks();
            expect(activeTaskPage.countActiveTasks()).to.equal(0);
        });
    });

    describe('Delete', function () {
        before(function () {
            clearPage();
            activeTaskPage.addNewTask('Task 1');
        });

        it('should delete task by clicking destroy button', function () {
            activeTaskPage.deleteTask();
            expect(activeTaskPage.checkTasksVisibility()).to.equal(false);
        });
    });
});