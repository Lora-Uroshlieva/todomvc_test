"use strict";

class Page {

    get inputField()            {return $('input.new-todo'); }
    get inputEdit()             {return $('input.edit'); }
    get oneItem()               {return $('section.main li'); }
    get markDone()              {return $('ul.todo-list input.toggle[type="checkbox"]'); }
    get markUndone()            {return $('li.completed input[type="checkbox"]'); }
    get clearCompletedButton()  {return $('button.clear-completed'); }
    get itemCounter()           {return $('footer.footer strong'); }
    get deleteButton ()         {return $('button.destroy'); }
    get markAll()               {return $('input.toggle-all')}

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

    completeTask() {
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
}

module.exports = Page;