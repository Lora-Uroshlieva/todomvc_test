"use strict";

const expect = require('chai').expect;
let PageManager = require('./../../src/pages/PageManager');

describe('Check process of adding new tasks and editing', function () {
    let pages = new PageManager();

    it('should add new task to list', function () {
        pages.taskPage.open(); //open page and add 1 task by clicking enter
        pages.taskPage.inputField.waitForVisible();
        pages.taskPage.inputField.setValue('Task 1').keys("Enter");
        pages.taskPage.inputField.setValue('').keys("Enter");
        pages.taskPage.itemCounter.waitForVisible();
        let counter = pages.taskPage.itemCounter.getText();
        expect(counter).to.equal('1');

        //Mark task as done:
        pages.taskPage.markDone.click();
        counter = pages.taskPage.itemCounter.getText();
        expect(counter).to.equal('0');

        //Click on link "active" and check that no tasks in list.
        pages.taskPage.activeFilter.click();
        let taskVisiblity = pages.taskPage.oneItem.isVisible();
        expect(taskVisiblity).to.equal(false);

        //Click on link "completed" and chack 1 task in list:
        pages.taskPage.completedFilter.click();
        taskVisiblity = pages.taskPage.oneItem.isVisible();
        expect(taskVisiblity).to.equal(true);

        //Edit task by clicking enter:
        pages.taskPage.oneItem.doubleClick();
        pages.taskPage.inputEdit.setValue('Task 1 was changed').keys("Enter");
        let taskText = pages.taskPage.oneItem.getText();
        expect(taskText).to.equal('Task 1 was changed');


        ////Edit task by clicking out of text field
        pages.taskPage.oneItem.doubleClick();
        pages.taskPage.inputEdit.setValue('Task 1 was changed twice');
        pages.taskPage.inputField.click();
        taskText = pages.taskPage.oneItem.getText();
        expect(taskText).to.equal('Task 1 was changed twice');

        //Check task as undone
        pages.taskPage.markUndone.click();
        taskVisiblity = pages.taskPage.oneItem.isVisible();
        expect(taskVisiblity).to.equal(false);
        counter = pages.taskPage.itemCounter.getText();
        expect(counter).to.equal('1');

        //move to link active? 1 task in list:
        pages.taskPage.activeFilter.click();
        taskVisiblity = pages.taskPage.oneItem.isVisible();
        expect(taskVisiblity).to.equal(true);

        //


    });


});
