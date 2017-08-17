"use strict";

const expect = require('chai').expect;
let PageManager = require('./../../src/pages/PageManager');

describe('Check process of adding new tasks and editing', function () {

    let taskPage = new PageManager().taskPage;


    it('should add new task to list', function () {

        //open page and add 1 task by clicking enter
        taskPage.open();
        taskPage.addNewTask('Task 1');
        taskPage.addNewTask('');                            //try to add an empty task
        expect(taskPage.countActiveTasks()).to.equal(1);


        //Mark task as done:
        taskPage.markDone.click();
        expect(taskPage.countActiveTasks()).to.equal(0);


        //Click on link "active" and check that no tasks in list.
        taskPage.activeFilter.click();
        expect(taskPage.checkTasksVisibility()).to.equal(false);


        //Click on link "completed" and check 1 task in list:
        taskPage.completedFilter.click();
        expect(taskPage.checkTasksVisibility()).to.equal(true);


        //Edit task by clicking enter:
        let taskText = taskPage.editTask('Task 1 was changed', "Enter");
        expect(taskText).to.equal('Task 1 was changed');


        ////Edit task by clicking out of text field
        taskText = taskPage.editTask('Task 1 was changed twice', 'click');
        expect(taskText).to.equal('Task 1 was changed twice');


        //Check task as undone
        taskPage.undoTask();
        expect(taskPage.checkTasksVisibility()).to.equal(false);
        expect(taskPage.countActiveTasks()).to.equal(1);


        //move to link active. 1 task in list:
        taskPage.activeFilter.click();
        expect(taskPage.checkTasksVisibility()).to.equal(true);


        //edit active task by pressing enter
        taskText = taskPage.editTask('Task 1 was changed 3 times', "Enter");
        expect(taskText).to.equal('Task 1 was changed 3 times');


        //edit active task by clicking outside the field
        taskText = taskPage.editTask('Task 1 was changed 4 times');
        expect(taskText).to.equal('Task 1 was changed 4 times');


        //add one more item to the list:
        taskPage.addNewTask('Task 2');
        expect(taskPage.countActiveTasks()).to.equal(2);


    });


});
