'use strict';

const PageManager = require('./../../src/pages/PageManager'),
	pages = new PageManager(),
	completedTaskPage = pages.completedTaskPage,
	preconditionHelper = require('./../../src/helpers/preconditionHelper'),
	Task = require('./../../src/models/Task');

describe('features works with tasks.', function () {
	const completedTask = new Task('Task opened as completed, №2', true);

	beforeEach(function() {
		completedTaskPage.open();
	});

	describe('Reopen', function () {
		beforeEach(function () {
			preconditionHelper.clearTasks();
			preconditionHelper.createNewTask(completedTask);
		});

		it('should reopen task after clicking on checkbox', function () {
			completedTaskPage.undoTask();
			expect(completedTaskPage.countActiveTasks()).to.equal(1);
		});
	});

	describe('Reopen all', function () {
		beforeEach(function () {
			preconditionHelper.clearTasks();
			preconditionHelper.createNewTask(completedTask);
		});

		it('should reopen all tasks after clicking on button', function () {
			// browser.pause(5000);
			expect(completedTaskPage.checkTaskText()).to.equal('Task opened as completed, №2');
			completedTaskPage.markAllTasks();
			expect(completedTaskPage.countActiveTasks()).to.equal(1);
			pages.allTaskPage.open();
			expect(completedTaskPage.checkTaskText()).to.equal('Task opened as completed, №2');
		});
	});

	describe('Delete', function () {
		beforeEach(function () {
			preconditionHelper.clearTasks();
			preconditionHelper.createNewTask(completedTask);
		});

		it('should delete task by clicking destroy button', function () {
			completedTaskPage.deleteTask();
			expect(completedTaskPage.checkTasksVisibility()).to.equal(false);
		});
	});

	describe('Clear completed', function () {
		beforeEach(function () {
			preconditionHelper.clearTasks();
			preconditionHelper.createNewTask(completedTask);
		});

		it('should delete all completed tasks by pushing button', function () {
			completedTaskPage.clearCompletedTasks();
			expect(completedTaskPage.checkTasksVisibility()).to.equal(false);
		});
	});
});