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
        allTaskPage.header.addNewTask('Task 1');

        // 2) асерт таска є,
        expect(allTaskPage.footer.countActiveTasks()).to.equal(1);

        // 3) закомплітити таску,
        allTaskPage.tasksList.completeOneTask();

        // 4) перевірити таска є
        expect(allTaskPage.tasksList.checkTasksVisibility()).to.equal(true);

        // 5) сходити на табу ектів
        activeTaskPage.open();

        // 6) перевірити таски нема
        expect(activeTaskPage.tasksList.checkTasksVisibility()).to.equal(false);

        // 7) створити нову таску
        activeTaskPage.header.addNewTask('Task 2');

        // 8) перевірити таска є
        expect(activeTaskPage.footer.countActiveTasks()).to.equal(1);

        // 9) закоплітити все
        allTaskPage.header.markAllTasks();

        // 10) перевірити тасок нема
        expect(activeTaskPage.footer.countActiveTasks()).to.equal(0);

        // 11) перейти на комплітед
        completedTaskPage.open();

        // 12) перевірити, що всі таски є
        expect(completedTaskPage.tasksList.checkTasksVisibility()).to.equal(true);

        // 13) реопнути першу таску
        completedTaskPage.tasksList.undoTask();

        // 14) перевірити, що друга таска є в закоплічених
        expect(completedTaskPage.tasksList.checkTasksVisibility()).to.equal(true);

        // 15) очистити всі закомплічені
        allTaskPage.footer.clearCompletedButton.click();

        // 16) перевірити, що нема тасок
        expect(completedTaskPage.tasksList.checkTasksVisibility()).to.equal(false);

        // 17) перевірити, що в каунтері є одна таска
        expect(completedTaskPage.footer.countActiveTasks()).to.equal(1);

        // 18) перейти на фільтр всі
        allTaskPage.open();

        // 19) Перевірити, що є перша таска
        expect(completedTaskPage.tasksList.checkTasksVisibility()).to.equal(true);

        // 20) перевірити каунтер
        expect(completedTaskPage.footer.countActiveTasks()).to.equal(1);

        // 21) видалити першу таску !!!!!!!!!!!!!!
        allTaskPage.tasksList.deleteTask();

        // 22) перевірити, що тасок не осталось
        expect(completedTaskPage.tasksList.checkTasksVisibility()).to.equal(false);
    });
});
