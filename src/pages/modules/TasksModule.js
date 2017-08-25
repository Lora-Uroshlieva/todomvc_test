"use strict";


class TasksModule {

    constructor(locator){
        this.locator = locator;
    }

    get inputEdit()         {return $('input.edit'); }      //allows to edit task after double-clicking on it.
    get oneItem()           {return $('section.main li'); } //returns one task from list
    get markDone()          {return $('div.view input.toggle[type="checkbox"]'); }
    get markUndone()        {return $('li.completed input[type="checkbox"]'); }
    get deleteButton ()     {return $('button.destroy'); }      //button to delete one task

    checkTasksVisibility() {
        return this.oneItem.isVisible();
    }

    checkTaskText() {
        console.log(this.oneItem.getText());
        return this.oneItem.getText();
    }

    editTask(text, method='click') {
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
}

module.exports = TasksModule;