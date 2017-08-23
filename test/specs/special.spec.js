"use strict";

const expect = require('chai').expect;
const PageManager = require('./../../src/pages/PageManager');

const pages = new PageManager();
const allTaskPage = pages.allTaskPage;
const clearPage = require('./../../src/helpers/clearTasks');


describe('Additional edit operations', function () {
    beforeEach(function() {
        allTaskPage.open();
        clearPage();
        allTaskPage.addNewTask('Task 1');
    });

    it('should confirm edit by click outside', function () {
        allTaskPage.editTask('Task was edited twice', 'click');
        expect(allTaskPage.checkTaskText()).to.equal('Task was edited twice');
    });

    it('should confirm edit by press Tab', function () {
        allTaskPage.editTask('Task was edited 3 times', 'Tab');
        expect(allTaskPage.checkTaskText()).to.equal('Task was edited 3 times');
    });

    it('should cancel edit by press escape', function () {
        allTaskPage.oneItem.doubleClick();
        allTaskPage.inputEdit.setValue('Task was edited');
        allTaskPage.inputEdit.keys("Escape");
        expect(allTaskPage.checkTaskText()).to.equal('Task 1');
    });


    // !!!!! doesn't work!!!!!!!
    // it('should delete task after editing to empty text', function () {
    //     allTaskPage.editTask('', 'Enter');
    //     expect(allTaskPage.checkTasksVisibility()).to.equal(false);
    // });

});

describe('Add', function () {
    before(function () {
        allTaskPage.open();
        clearPage();
    });

    it('should not add new task when no text entered', function () {
        allTaskPage.addNewTask('');
        expect(allTaskPage.checkTasksVisibility()).to.equal(false);
    });
});

