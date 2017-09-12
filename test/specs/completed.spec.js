
"use strict";

const expect = require('chai').expect;
const PageManager = require('./../../src/pages/PageManager');

const pages = new PageManager();
const completedTaskPage = pages.completedTaskPage;
const clearPage = require('./../../src/helpers/clearTasks');
let preconditionHelper = require('./../../src/helpers/preconditionHelper');
let Task = require('./../../src/models/Task');


describe('features works with tasks.', function () {
    let newTask = new Task('Task opened as new #1', false);
    let completedTask = new Task('Task opened as completed, №2', true);

    beforeEach(function() {
        completedTaskPage.open();
    });

    describe('Reopen', function () {
        beforeEach(function () {
            clearPage();
            preconditionHelper.createNewTask(completedTask);
        });

        it('should reopen task after clicking on checkbox', function () {
            completedTaskPage.undoTask();
            expect(completedTaskPage.countActiveTasks()).to.equal(1);
        });
    });

    describe('Reopen all', function () {
        beforeEach(function () {
            clearPage();
            preconditionHelper.createNewTask(completedTask);
        });

        it('should reopen all tasks after clicking on button', function () {
            // browser.pause(5000);
            expect(completedTaskPage.checkTaskText()).to.equal('Task opened as completed, №2');
            completedTaskPage.markAllTasks();
            expect(completedTaskPage.countActiveTasks()).to.equal(1);
            pages.allTaskPage.open();
            expect(completedTaskPage.checkTaskText()).to.equal('Task opened as completed, №2');
        });
    });

    describe('Delete', function () {
        beforeEach(function () {
            clearPage();
            preconditionHelper.createNewTask(completedTask);
        });

        it('should delete task by clicking destroy button', function () {
            completedTaskPage.deleteTask();
            expect(completedTaskPage.checkTasksVisibility()).to.equal(false);
        });
    });

    describe('Clear completed', function () {
        beforeEach(function () {
            clearPage();
            preconditionHelper.createNewTask(completedTask);
        });

        it('should delete all completed tasks by pushing button', function () {
            completedTaskPage.clearCompletedTasks();
            expect(completedTaskPage.checkTasksVisibility()).to.equal(false);
        });
    })
});