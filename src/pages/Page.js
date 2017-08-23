"use strict";

class Page {

    get inputField()            {return $('input.new-todo'); } //field for input
    get inputEdit()             {return $('input.edit'); }      //allows to edit task after double-clicking on it.
    get oneItem()               {return $('section.main li'); } //returns one task from list
    get markDone()              {return $('div.view input.toggle[type="checkbox"]'); }
    get markUndone()            {return $('li.completed input[type="checkbox"]'); }
    get clearCompletedButton()  {return $('button.clear-completed'); } //link for deleting completed tasks
    get itemCounter()           {return $('footer.footer strong'); } //quantity of active tasks
    get deleteButton ()         {return $('button.destroy'); }      //button to delete one task
    get markAll()               {return $('input.toggle-all')}      //button to mark all items in list
    get allFilter()             {return $('.filters a[href="#/"]'); }
    get activeFilter()          {return $('.filters a[href="#/active"]'); }
    get completedFilter()       {return $('.filters a[href="#/completed"]'); }

    constructor() {
        this.title = "My page";
    }

    open(path) {
        browser.url('/examples/react/'+ path);
    }

    addNewTask(text) {
        this.inputField.waitForVisible();
        this.inputField.setValue(text).keys("Enter");
    }

    countActiveTasks() {
        this.itemCounter.waitForVisible();
        return Number(this.itemCounter.getText());
    }

    checkTasksVisibility() {
        return this.oneItem.isVisible();
    }

    checkTaskText() {
        console.log(this.oneItem.getText());
        return this.oneItem.getText();
    }

    editTask(text, method = 'click') {
        this.oneItem.doubleClick();
        this.inputEdit.setValue(text);

        if(method === 'click') {
            this.inputField.click();
        } else if (method === 'tab') {
            this.inputEdit.keys("tab");
        } else if(method === 'Enter') {
            this.inputEdit.keys("Enter");
        } else {
            throw new Error('Method should be "Enter" or "click" or "tab"');
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
        this.deleteButton.waitForVisible();
        this.deleteButton.click();
    }

    clearCompletedTasks() {
        this.clearCompletedButton.click();
    }
}

module.exports = Page;