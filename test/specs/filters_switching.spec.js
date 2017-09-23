'use strict';

const PageManager = require('./../../src/pages/PageManager'),
	pages = new PageManager(),
	allTaskPage = pages.allTaskPage,
	completedTaskPage = pages.completedTaskPage,
	activePage = pages.activeTaskPage,
	preconditionHelper = require('./../../src/helpers/preconditionHelper'),
	Task = require('./../../src/models/Task');

describe('Switching from filter to filter', function () {
	const newTask = new Task('Task opened as new #1', false);

	before(function () {
		allTaskPage.open();
		preconditionHelper.createNewTask(newTask);
	});

	it('should move to completed tasks page', function () {
		allTaskPage.completedFilter.click();
		let url = browser.getUrl();
		expect(url).to.equal('http://todomvc.com/examples/react/#/completed');
	});

	it('should move to active tasks page', function () {
		completedTaskPage.activeFilter.click();
		let url = browser.getUrl();
		expect(url).to.equal('http://todomvc.com/examples/react/#/active');
	});

	it('should move to all tasks page', function () {
		activePage.allFilter.click();
		let url = browser.getUrl();
		expect(url).to.equal('http://todomvc.com/examples/react/#/');
	});


});