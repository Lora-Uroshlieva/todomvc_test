"use strict";

const expect = require('chai').expect;
let PageManager = require('./../../src/pages/PageManager');

describe('Check process of adding new tasks and editing', function () {
    let pages = new PageManager(),
        allTaskPage = pages.allTaskPage,
        activeTaskPage = pages.activeTaskpage,
        completedTaskPage = pages.completedTaskPage;

    before(()=>{
        allTaskPage.open();
    });

    it('should add new task to list, mark as done, mark as undone, delete', function () {

        //open page and add 1 task by clicking enter
        allTaskPage.header.addNewTask('Task 1');
        allTaskPage.header.addNewTask('');                            //try to add an empty task
        expect(allTaskPage.footer.countActiveTasks()).to.equal(1);


        //Mark task as done:
        allTaskPage.tasksList.completeOneTask();
        expect(allTaskPage.footer.countActiveTasks()).to.equal(0);


        //Move to page "active" and check that no tasks in list.
        activeTaskPage.open();
        expect(activeTaskPage.tasksList.checkTasksVisibility()).to.equal(false);


        //Move to page "completed" and check 1 task in list:
        completedTaskPage.open();
        expect(completedTaskPage.tasksList.checkTasksVisibility()).to.equal(true);


        //Edit task by clicking enter:
        let taskText = completedTaskPage.tasksList.editTask('Task 1 was changed', "Enter");
        expect(taskText).to.equal('Task 1 was changed');


        //Edit task by clicking out of text field
        taskText = completedTaskPage.tasksList.editTask('Task 1 was changed twice', 'click');
        expect(taskText).to.equal('Task 1 was changed twice');


        // Check task as undone
        completedTaskPage.tasksList.undoTask();
        expect(completedTaskPage.tasksList.checkTasksVisibility()).to.equal(false);
        expect(completedTaskPage.footer.countActiveTasks()).to.equal(1);


        //move to link active. 1 task in list:
        activeTaskPage.open();
        expect(activeTaskPage.tasksList.checkTasksVisibility()).to.equal(true);


        //edit active task by pressing enter
        taskText = activeTaskPage.tasksList.editTask('Task 1 was changed 3 times', "Enter");
        expect(taskText).to.equal('Task 1 was changed 3 times');


        //edit active task by clicking outside the field
        taskText = activeTaskPage.tasksList.editTask('Task 1 was changed 4 times');
        expect(taskText).to.equal('Task 1 was changed 4 times');


        //add one more item to the list:
        activeTaskPage.header.addNewTask('Task 2');
        expect(activeTaskPage.footer.countActiveTasks()).to.equal(2);


        //mark all items in list as done.
        activeTaskPage.header.markAllTasks();
        expect(activeTaskPage.footer.countActiveTasks()).to.equal(0);
        expect(activeTaskPage.tasksList.checkTasksVisibility()).to.equal(false);


        //move to page "completed", check that completed items are in list.
        completedTaskPage.open();
        expect(completedTaskPage.tasksList.checkTasksVisibility()).to.equal(true);


        //reopen all items
        completedTaskPage.header.markAllTasks();
        expect(completedTaskPage.tasksList.checkTasksVisibility()).to.equal(false);
        expect(activeTaskPage.footer.countActiveTasks()).to.equal(2);


        //move to page All, check active items are visible.
        allTaskPage.open();
        expect(allTaskPage.tasksList.checkTasksVisibility()).to.equal(true);


        //add new items, check deleting function:
        allTaskPage.header.addNewTask('Item 3');
        allTaskPage.header.addNewTask('Item 4');
        expect(allTaskPage.footer.countActiveTasks()).to.equal(4);
        allTaskPage.tasksList.deleteTask();
        expect(allTaskPage.footer.countActiveTasks()).to.equal(3);

        //clear completed items by button !!!!!!!!!!!!!!! this part does not work
        allTaskPage.tasksList.completeOneTask();
        expect(allTaskPage.footer.countActiveTasks()).to.equal(2);


        //chose all items and click on button to clear all completed items.
        allTaskPage.header.markAllTasks();
        allTaskPage.tasksList.undoTask();
        allTaskPage.footer.clearCompletedButton.click();
        expect(allTaskPage.footer.countActiveTasks()).to.equal(1);
        // expect(allTaskPage.checkTasksVisibility()).to.equal(false);


    });


});
