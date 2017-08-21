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

        // 1) створити таску
        allTaskPage.addNewTask('Task 1');


        // 2) асерт таска є,
        expect(allTaskPage.countActiveTasks()).to.equal(1);


        // 3) закомплітити таску,
        allTaskPage.completeOneTask();


        // 4) перевірити таска є
        expect(allTaskPage.checkTasksVisibility()).to.equal(true);

        // 5) сходити на табу ектів
        activeTaskPage.open();

        // 6) перевірити таски нема
        expect(activeTaskPage.checkTasksVisibility()).to.equal(false);


        // 7) створити нову таску
        activeTaskPage.addNewTask('Task 2');


        // 8) перевірити таска є
        expect(activeTaskPage.countActiveTasks()).to.equal(1);

        // 9) закоплітити все
        allTaskPage.markAllTasks();


        // 10) перевірити тасок нема
        expect(activeTaskPage.countActiveTasks()).to.equal(0);


        // 11) перейти на комплітед
        completedTaskPage.open();


        // 12) перевірити, що всі таски є
        expect(completedTaskPage.checkTasksVisibility()).to.equal(true);


        // 13) реопнути першу таску
        completedTaskPage.undoTask();


        // 14) перевірити, що друга таска є в закоплічених
        expect(completedTaskPage.checkTasksVisibility()).to.equal(true);

        // 15) очистити всі закомплічені
        allTaskPage.clearCompletedButton.click();

        console.log(16);
        // 16) перевірити, що нема тасок
        expect(completedTaskPage.checkTasksVisibility()).to.equal(false);

        // 17) перевірити, що в каунтері є одна таска
        expect(completedTaskPage.countActiveTasks()).to.equal(1);

        // 18) перейти на фільтр всі
        allTaskPage.open();


        // 19) Перевірити, що є перша таска
        expect(completedTaskPage.checkTasksVisibility()).to.equal(true);


        // 20) перевірити каунтер
        expect(completedTaskPage.countActiveTasks()).to.equal(1);

        // 21) видалити першу таску !!!!!!!!!!!!!!
        allTaskPage.deleteTask();

        // 22) перевірити, що тасок не осталось
        expect(completedTaskPage.checkTasksVisibility()).to.equal(false);

        //
        //
        // //open page and add 1 task by clicking enter
        // allTaskPage.open();
        // allTaskPage.addNewTask('Task 1');
        // allTaskPage.addNewTask('');                            //try to add an empty task
        // expect(allTaskPage.countActiveTasks()).to.equal(1);
        //
        //
        // //Mark task as done:
        // allTaskPage.completeOneTask();
        // expect(allTaskPage.countActiveTasks()).to.equal(0);
        //
        //
        // //Move to page "active" and check that no tasks in list.
        // activeTaskPage.open();
        // expect(activeTaskPage.checkTasksVisibility()).to.equal(false);
        //
        //
        // //Move to page "completed" and check 1 task in list:
        // completedTaskPage.open();
        // expect(completedTaskPage.checkTasksVisibility()).to.equal(true);
        //
        //
        // //Edit task by clicking enter:
        // let taskText = completedTaskPage.editTask('Task 1 was changed', "Enter");
        // expect(taskText).to.equal('Task 1 was changed');
        //
        //
        // //Edit task by clicking out of text field
        // taskText = completedTaskPage.editTask('Task 1 was changed twice', 'click');
        // expect(taskText).to.equal('Task 1 was changed twice');
        //
        //
        // // Check task as undone
        // completedTaskPage.undoTask();
        // expect(completedTaskPage.checkTasksVisibility()).to.equal(false);
        // expect(completedTaskPage.countActiveTasks()).to.equal(1);
        //
        //
        // //move to link active. 1 task in list:
        // activeTaskPage.open();
        // expect(activeTaskPage.checkTasksVisibility()).to.equal(true);
        //
        //
        // //edit active task by pressing enter
        // taskText = activeTaskPage.editTask('Task 1 was changed 3 times', "Enter");
        // expect(taskText).to.equal('Task 1 was changed 3 times');
        //
        //
        // //edit active task by clicking outside the field
        // taskText = activeTaskPage.editTask('Task 1 was changed 4 times');
        // expect(taskText).to.equal('Task 1 was changed 4 times');
        //
        //
        // //add one more item to the list:
        // activeTaskPage.addNewTask('Task 2');
        // expect(activeTaskPage.countActiveTasks()).to.equal(2);
        //
        //
        // //mark all items in list as done.
        // activeTaskPage.markAllTasks();
        // expect(activeTaskPage.countActiveTasks()).to.equal(0);
        // expect(activeTaskPage.checkTasksVisibility()).to.equal(false);
        //
        //
        // //move to page "completed", check that completed items are in list.
        // completedTaskPage.open();
        // expect(completedTaskPage.checkTasksVisibility()).to.equal(true);
        //
        //
        // //reopen all items
        // completedTaskPage.markAllTasks();
        // expect(completedTaskPage.checkTasksVisibility()).to.equal(false);
        // expect(activeTaskPage.countActiveTasks()).to.equal(2);
        //
        //
        // //move to page All, check active items are visible.
        // allTaskPage.open();
        // expect(allTaskPage.checkTasksVisibility()).to.equal(true);
        //
        //
        // //add new items, check deleting function:
        // allTaskPage.addNewTask('Item 3');
        // allTaskPage.addNewTask('Item 4');
        // expect(allTaskPage.countActiveTasks()).to.equal(4);
        // allTaskPage.deleteTask();
        // expect(allTaskPage.countActiveTasks()).to.equal(3);
        //
        // //clear completed items by button !!!!!!!!!!!!!!! this part does not work
        // allTaskPage.completeOneTask();
        // expect(allTaskPage.countActiveTasks()).to.equal(2);
        //
        //
        // //chose all items and click on button to clear all completed items.
        // allTaskPage.markAllTasks();
        // allTaskPage.undoTask();
        // allTaskPage.clearCompletedButton.click();
        // expect(allTaskPage.countActiveTasks()).to.equal(1);
        // // expect(allTaskPage.checkTasksVisibility()).to.equal(false);


    });


});
