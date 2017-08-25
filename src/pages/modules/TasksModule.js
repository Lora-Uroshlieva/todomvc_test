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
    get inputField()        {return $('input.new-todo'); }

    checkTasksVisibility() {
        return this.oneItem.isVisible();
    }

    editTask(text, method='click') {
        this.oneItem.doubleClick();
        this.inputEdit.setValue(text);
        if(method==='click') {
            this.inputField.click();
        } else if(method==='Enter') {
            this.inputEdit.keys("Enter");
        } else {
            throw new Error('Method should be "Enter" or "click"');
        }
        return this.oneItem.getText(); //task returns text from field
    }

    completeOneTask() {
        this.markDone.click();
    }

    undoTask() {
        this.markUndone.click();
    }

    deleteTask() {
        browser.moveToObject('section.main li');
        this.oneItem.click();
        this.deleteButton.waitForVisible();
        this.deleteButton.click();
    }
}

module.exports = TasksModule;