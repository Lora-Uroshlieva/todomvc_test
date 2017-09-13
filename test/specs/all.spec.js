"use strict";

const PageManager = require('./../../src/pages/PageManager');
const pages = new PageManager();
const allTaskPage = pages.allTaskPage;
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
            preconditionHelper.clearTasks();
        });

        it('should add new task to list using input field', function () {
            allTaskPage.addNewTask('Task opened as new #1');
            expect(allTaskPage.checkTaskText()).to.equal('Task opened as new #1');
            expect(allTaskPage.checkTasksVisibility()).to.equal(true);
        });
    });

    describe('Edit', function () {
        beforeEach(function () {
            preconditionHelper.clearTasks();
            preconditionHelper.createNewTask(newTask);
        });

        it('should edit task with clicking enter after input', function () {
            allTaskPage.editTask('Task was edited', 'Enter');
            expect(allTaskPage.checkTaskText()).to.equal('Task was edited');
        });
    });

    describe('Complete', function () {
        before(function () {
            preconditionHelper.clearTasks();
            preconditionHelper.createNewTask(newTask);
        });

        it('Should complete task after clicking on checkbox', function () {
            allTaskPage.completeOneTask();
            expect(allTaskPage.countActiveTasks()).to.equal(0);
        });
    });

    describe('Complete all', function () {
        beforeEach(function () {
            preconditionHelper.clearTasks();
            preconditionHelper.createNewTask(newTask);
        });

        it('Should complete task after clicking on checkbox', function () {
            // browser.pause(500000);
            allTaskPage.markAllTasks();
            expect(allTaskPage.countActiveTasks()).to.equal(0);
        });
    });

    describe('Reopen', function () {
        beforeEach(function () {
            preconditionHelper.clearTasks();
            preconditionHelper.createNewTask(completedTask);
        });

        it('should reopen task after clicking on checkbox', function () {
            allTaskPage.undoTask();
            expect(allTaskPage.countActiveTasks()).to.equal(1);
        });
    });

    describe('Delete', function () {
        beforeEach(function () {
            preconditionHelper.clearTasks();
            preconditionHelper.createNewTask(newTask);
        });

        it('should delete task by clicking destroy button', function () {
            allTaskPage.deleteTask();
            expect(allTaskPage.checkTasksVisibility()).to.equal(false);
        });
    });

    describe('Clear completed', function () {
        beforeEach(function () {
            preconditionHelper.clearTasks();
            preconditionHelper.createNewTask(completedTask);
        });

        it('should delete all completed tasks by pushing button', function () {
            allTaskPage.clearCompletedTasks();
            expect(allTaskPage.checkTasksVisibility()).to.equal(false);
        });
    })
});