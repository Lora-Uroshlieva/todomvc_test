"use strict";

const expect = require('chai').expect;
const PageManager = require('./../../src/pages/PageManager');

const pages = new PageManager();
let preconditionHelper = require('./../../src/helpers/preconditionHelper');
let Task = require('./../../src/models/Task');

describe('Check process of adding new tasks and editing', function () {
    let pages = new PageManager(),
        allTaskPage = pages.allTaskPage,
        activeTaskPage = pages.activeTaskPage,
        completedTaskPage = pages.completedTaskPage;

    it('should add new task to list, mark as done, mark as undone, delete', function () {

        //open page and add 1 task by clicking enter
        allTaskPage.open();
        allTaskPage.addNewTask('Task opened as new #1');
        allTaskPage.addNewTask('');  //try to add an empty task
        expect(allTaskPage.countActiveTasks()).to.equal(1);


        //Mark task as done:
        allTaskPage.completeOneTask();
        expect(allTaskPage.countActiveTasks()).to.equal(0);


        //Move to page "active" and check that no tasks in list.
        activeTaskPage.open();
        expect(activeTaskPage.checkTasksVisibility()).to.equal(false);


        //Move to page "Completed" and check 1 task in list:
        completedTaskPage.open();
        expect(completedTaskPage.checkTasksVisibility()).to.equal(true);


        //Edit task by clicking enter:
        completedTaskPage.editTask('Task 1 was changed', "Enter");
        let taskText = completedTaskPage.checkTaskText();
        expect(taskText).to.equal('Task 1 was changed');


        //Edit task by clicking out of text field
        completedTaskPage.editTask('Task 1 was changed twice', 'click');
        taskText = completedTaskPage.checkTaskText();
        expect(taskText).to.equal('Task 1 was changed twice');


        // Check task as undone
        completedTaskPage.undoTask();
        expect(completedTaskPage.checkTasksVisibility()).to.equal(false);
        expect(completedTaskPage.countActiveTasks()).to.equal(1);


        //move to link active. 1 task in list:
        activeTaskPage.open();
        expect(activeTaskPage.checkTasksVisibility()).to.equal(true);


        //edit active task by pressing enter
        activeTaskPage.editTask('Task was changed 3 times', "Enter");
        taskText = activeTaskPage.checkTaskText();
        expect(taskText).to.equal('Task was changed 3 times');


        //edit active task by clicking outside the field
        activeTaskPage.editTask('Task 1 was changed');
        taskText = activeTaskPage.checkTaskText();
        expect(taskText).to.equal('Task 1 was changed');


        //add one more item to the list:
        activeTaskPage.addNewTask('Task 2');
        expect(activeTaskPage.countActiveTasks()).to.equal(2);


        //mark all items in list as done.
        activeTaskPage.markAllTasks();
        expect(activeTaskPage.countActiveTasks()).to.equal(0);
        expect(activeTaskPage.checkTasksVisibility()).to.equal(false);


        //move to page "Completed", check that completed items are in list.
        completedTaskPage.open();
        expect(completedTaskPage.checkTasksVisibility()).to.equal(true);


        //reopen all items
        completedTaskPage.markAllTasks();
        expect(completedTaskPage.checkTasksVisibility()).to.equal(false);
        expect(activeTaskPage.countActiveTasks()).to.equal(2);


        //move to page All, check active items are visible.
        allTaskPage.open();
        expect(allTaskPage.checkTasksVisibility()).to.equal(true);


        //add new items, check deleting function:
        allTaskPage.addNewTask('Item 3');
        allTaskPage.addNewTask('Item 4');
        expect(allTaskPage.countActiveTasks()).to.equal(4);
        allTaskPage.deleteTask();
        expect(allTaskPage.countActiveTasks()).to.equal(3);

        //clear completed items by button
        allTaskPage.completeOneTask();
        expect(allTaskPage.countActiveTasks()).to.equal(2);


        //chose all items and click on button to clear all completed items.
        allTaskPage.markAllTasks();
        allTaskPage.undoTask();
        allTaskPage.clearCompletedTasks();
        expect(allTaskPage.countActiveTasks()).to.equal(1);
    });
});