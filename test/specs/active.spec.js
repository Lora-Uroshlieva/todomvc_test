'use strict';

const expect = require('chai').expect,
	PageManager = require('./../../src/pages/PageManager'),
	pages = new PageManager(),
	activeTaskPage  = pages.activeTaskPage,
	preconditionHelper = require('./../../src/helpers/preconditionHelper');

let Task = require('./../../src/models/Task');

describe('features works with tasks.', function () {
	const newTask = new Task('Task opened as new #1', false);

	beforeEach(function() {
		activeTaskPage.open();
	});

	describe('Add', function () {
		beforeEach(function () {
			preconditionHelper.clearTasks();
		});

		it('should add new task to list using input field', function () {
			activeTaskPage.addNewTask('Task opened as new #1');
			expect(activeTaskPage.checkTaskText()).to.equal('Task opened as new #1');
			expect(activeTaskPage.checkTasksVisibility()).to.equal(true);
		});
	});


	describe('Edit', function () {
		before(function () {
			preconditionHelper.clearTasks();
			preconditionHelper.createNewTask(newTask);
		});

		it('should edit task with clicking enter after input', function () {
			activeTaskPage.editTask('Task was edited', 'Enter');
			expect(activeTaskPage.checkTaskText()).to.equal('Task was edited');
		});
	});

	describe('Complete', function () {
		before(function () {
			preconditionHelper.clearTasks();
			preconditionHelper.createNewTask(newTask);
		});

		it('Should complete task after clicking on checkbox', function () {
			activeTaskPage.completeOneTask();
			expect(activeTaskPage.countActiveTasks()).to.equal(0);
		});
	});

	describe('Complete all', function () {
		before(function () {
			preconditionHelper.clearTasks();
			preconditionHelper.createNewTask(newTask);
		});

		it('should complete task after clicking on checkbox', function () {
			activeTaskPage.markAllTasks();
			expect(activeTaskPage.countActiveTasks()).to.equal(0);
		});
	});

	describe('Delete', function () {
		before(function () {
			preconditionHelper.clearTasks();
			preconditionHelper.createNewTask(newTask);
		});

		it('should delete task by clicking destroy button', function () {
			activeTaskPage.deleteTask();
			expect(activeTaskPage.checkTasksVisibility()).to.equal(false);
		});
	});
});