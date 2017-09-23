'use strict';

class Page {

	constructor() {
		this.title = 'My page';
	}

	get inputField()            { return $('input.new-todo'); }
	get markAll()               { return $('input.toggle-all'); }
	get inputEdit()             { return $('input.edit'); }
	get oneItem()               { return $('section.main li'); }
	get markDone()              { return $('div.view input.toggle[type="checkbox"]'); }
	get markUndone()            { return $('li.completed input.toggle'); }
	get deleteButton ()         { return $('button.destroy'); }
	get clearCompletedButton()  { return $('footer.footer button.clear-completed'); }
	get itemCounter()           { return $('footer.footer strong'); }
	get allFilter()             { return $('.filters a[href="#/"]'); }
	get activeFilter()          { return $('.filters a[href="#/active"]'); }
	get completedFilter()       { return $('.filters a[href="#/completed"]'); }

	addNewTask(text) {
		this.inputField.waitForVisible();
		this.inputField.setValue(text).keys('Enter');
	}

	open(path) {
		browser.url('/examples/react/'+ path);
	}

	isLoaded(elementLocator) {
		$(elementLocator).waitForVisible();
		return $(elementLocator).isVisible();
	}

	markAllTasks() {
		this.markAll.click();
	}

	checkTasksVisibility() {
		return this.oneItem.isVisible();
	}

	checkTaskText() {
		return this.oneItem.getText();
	}

	editTask(text, method='click') {//TODO should be able to edit specific task, search by task text
		this.oneItem.doubleClick();
		this.inputEdit.waitForEnabled();
		this.inputEdit.clearElement();
		this.inputEdit.setValue(text);

		switch (method) {
		case 'click':
			this.inputField.click(); break;
		case 'Tab':
			this.inputEdit.keys('Tab'); break;
		case 'Enter':
			this.inputEdit.keys('Enter'); break;
		default:
			throw new Error('Method should be "Enter" or "click" or "Tab"');
		}
	}

	completeOneTask() {
		this.markDone.click();
	}

	undoTask() {
		this.markUndone.click();
	}

	deleteTask() {
		browser.moveToObject('section.main li');
		this.deleteButton.waitForVisible();
		this.deleteButton.click();
	}

	clearCompletedTasks() {
		this.clearCompletedButton.click();
	}

	countActiveTasks() {
		this.itemCounter.waitForVisible();
		return Number(this.itemCounter.getText());
	}
}

module.exports = Page;