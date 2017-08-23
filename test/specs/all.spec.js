"use strict";

const expect = require('chai').expect;
const PageManager = require('./../../src/pages/PageManager');

const pages = new PageManager();
const allTaskPage = pages.allTaskPage;
const clearPage = require('./../../src/helpers/clearTasks');

describe('features works with tasks.', function () {

    beforeEach(function() {
        allTaskPage.open();
    });

    describe('Add', function () {
        beforeEach(function () {
            clearPage();
        });

        it('should add new task to list using input field', function () {
            allTaskPage.addNewTask('Task 1');
            expect(allTaskPage.checkTaskText()).to.equal('Task 1');
            expect(allTaskPage.checkTasksVisibility()).to.equal(true);
        });

        // it('should not add new task when no text entered', function () {
        //     allTaskPage.addNewTask('');
        //     allTaskPage.countActiveTasks().to.equal(1);
        // });
    });


    describe('Edit', function () {

        before(function () {
            clearPage();
            allTaskPage.addNewTask('Task 1');
        });

        it('should edit task with clicking enter after input', function () {
            allTaskPage.editTask('Task was edited', 'Enter');
            expect(allTaskPage.checkTaskText()).to.equal('Task was edited');
        });
    });


    describe('Complete', function () {
        before(function () {
            clearPage();
            allTaskPage.addNewTask('Task 1');
        });

        it('Should complete task after clicking on checkbox', function () {
            allTaskPage.completeOneTask();
            expect(allTaskPage.countActiveTasks()).to.equal(0);
        });
    });


    describe('Complete all', function () {
        before(function () {
            clearPage();
            allTaskPage.addNewTask('Task 1');
        });

        it('Should complete task after clicking on checkbox', function () {
            allTaskPage.markAllTasks();
            expect(allTaskPage.countActiveTasks()).to.equal(0);
        });
    });

    describe('Reopen', function () {
        before(function () {
            clearPage();
            allTaskPage.addNewTask('Task 1');
            allTaskPage.completeOneTask();
        });

        it('should reopen task after clicking on checkbox', function () {
            allTaskPage.undoTask();
            expect(allTaskPage.countActiveTasks()).to.equal(1);
        });
    });

    describe('Delete', function () {
        before(function () {
            clearPage();
            allTaskPage.addNewTask('Task 1');
        });

        it('should delete task by clicking destroy button', function () {
            allTaskPage.deleteTask();
            expect(allTaskPage.checkTasksVisibility()).to.equal(false);
        });
    });

    describe('Clear completed', function () {
        before(function () {
            clearPage();
            allTaskPage.addNewTask('Task 1');
            allTaskPage.markAllTasks();
        });

        it('should delete all completed tasks by pushing button', function () {
            allTaskPage.clearCompletedTasks();
            expect(allTaskPage.checkTasksVisibility()).to.equal(false);
        });
    })
});


// describe('Switch from filter to filters', function () {
//
//     it('should move to active tasks page', function () {
//         allTaskPage.activeFilter.click();
//         let url = browser.getUrl();
//         expect(url).to.equal('http://todomvc.com/examples/react/#/active');
//     });
//
//     it('should move to completed tasks page', function () {
//         allTaskPage.completedFilter.click();
//         let url = browser.getUrl();
//         expect(url).to.equal('http://todomvc.com/examples/react/#/completed');
//     });
// });

// describe('Additional edit operations', function () {
//
//     it('should confirm edit by click outside', function () {
//         allTaskPage.editTask('Task was edited twice', 'click');
//         expect(allTaskPage.checkTaskText()).to.equal('Task was edited twice');
//     });
//
//     it('should confirm edit by press Tab', function () {
//         allTaskPage.editTask('Task was edited 3 times', 'tab');
//         expect(allTaskPage.checkTaskText()).to.equal('Task was edited 3 times');
//     });
//
//     it('should cancel edit by press escape', function () {
//         this.oneItem.doubleClick();
//         this.inputEdit.setValue('Task was edited 4 times');
//         this.inputEdit.keys("escape");
//         expect(allTaskPage.checkTaskText()).to.equal('Task was edited 3 times');
//     });
//
//     it('should delete task after editing to empty text', function () {
//         allTaskPage.editTask('', 'enter');
//         expect(allTaskPage.checkTasksVisibility()).to.equal(false);
//     });
//
// });

