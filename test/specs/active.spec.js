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
            activeTaskPage.header.addNewTask('Task 1');
            expect(activeTaskPage.tasksList.checkTaskText()).to.equal('Task 1');
            expect(activeTaskPage.tasksList.checkTasksVisibility()).to.equal(true);
        });
    });


    describe('Edit', function () {
        before(function () {
            clearPage();
            activeTaskPage.header.addNewTask('Task 1');
        });

        it('should edit task with clicking enter after input', function () {
            activeTaskPage.tasksList.editTask('Task was edited', 'Enter');
            expect(activeTaskPage.tasksList.checkTaskText()).to.equal('Task was edited');
        });
    });


    describe('Complete', function () {
        before(function () {
            clearPage();
            activeTaskPage.header.addNewTask('Task 1');
        });

        it('Should complete task after clicking on checkbox', function () {
            activeTaskPage.tasksList.completeOneTask();
            expect(activeTaskPage.footer.countActiveTasks()).to.equal(0);
        });
    });


    describe('Complete all', function () {
        before(function () {
            clearPage();
            activeTaskPage.header.addNewTask('Task 1');
        });

        it('should complete task after clicking on checkbox', function () {
            activeTaskPage.header.markAllTasks();
            expect(activeTaskPage.footer.countActiveTasks()).to.equal(0);
        });
    });

    describe('Delete', function () {
        before(function () {
            clearPage();
            activeTaskPage.header.addNewTask('Task 1');
        });

        it('should delete task by clicking destroy button', function () {
            activeTaskPage.tasksList.deleteTask();
            expect(activeTaskPage.tasksList.checkTasksVisibility()).to.equal(false);
        });
    });
});