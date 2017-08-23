"use strict";

const expect = require('chai').expect;
const PageManager = require('./../../src/pages/PageManager');

const pages = new PageManager();
const activeTaskPage = pages.activeTaskPage;

describe('features works with tasks.', function () {
    beforeEach(function () {
        activeTaskPage.open();
        activeTaskPage.addNewTask('Task 1');
    });

    describe('Add', function () {

        it('should add new task to list using input field', function () {
            expect(activeTaskPage.checkTaskText()).to.equal('Task 1');
            expect(activeTaskPage.checkTasksVisibility()).to.equal(true);
        });

        it('should not add new task when no text entered', function () {
            activeTaskPage.addNewTask('');
            activeTaskPage.countActiveTasks().to.equal(1);
        });
    });


    describe('Edit', function () {

        it('should edit task with clicking enter after input', function () {
            activeTaskPage.editTask('Task was edited', 'Enter');
            expect(activeTaskPage.checkTaskText()).to.equal('Task was edited');
        });

    });


    describe('Complete', function () {

        it('Should complete task after clicking on checkbox', function () {
            activeTaskPage.completeOneTask();
            expect(activeTaskPage.countActiveTasks()).to.equal(0);
        });
    });


    describe('Complete all', function () {

        it('Should complete task after clicking on checkbox', function () {
            activeTaskPage.markAllTasks();
            expect(activeTaskPage.countActiveTasks()).to.equal(0);
        });
    });

    describe('Delete', function () {

        it('should delete task by pushing button', function () {
            activeTaskPage.deleteTask();
            expect(activeTaskPage.countActiveTasks()).to.equal(0);
        });

    });

});


describe('Switch from filter to filters', function () {

    it('should move to all tasks page', function () {
        activeTaskPage.allFilter.click();
        let url = browser.getUrl();
        expect(url).to.equal('http://todomvc.com/examples/react/#/');
    });

    it('should move to completed tasks page', function () {
        activeTaskPage.completedFilter.click();
        let url = browser.getUrl();
        expect(url).to.equal('http://todomvc.com/examples/react/#/completed');
    });
});

describe('Additional edit operations', function () {

    it('should confirm edit by click outside', function () {
        activeTaskPage.editTask('Task was edited twice', 'click');
        expect(activeTaskPage.checkTaskText()).to.equal('Task was edited twice');
    });

    it('should confirm edit by press Tab', function () {
        activeTaskPage.editTask('Task was edited 3 times', 'tab');
        expect(activeTaskPage.checkTaskText()).to.equal('Task was edited 3 times');
    });

    it('should cancel edit by press escape', function () {
        this.oneItem.doubleClick();
        this.inputEdit.setValue('Task was edited 4 times');
        this.inputEdit.keys("escape");
        expect(activeTaskPage.checkTaskText()).to.equal('Task was edited 3 times');
    });

    it('should delete task after editing to empty text', function () {
        activeTaskPage.editTask('', 'enter');
        expect(activeTaskPage.checkTasksVisibility()).to.equal(false);
    });

});

