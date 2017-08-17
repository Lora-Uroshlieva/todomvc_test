"use strict";

const BasePage = require('./BasePage');

class TaskPage extends BasePage {

    get inputField()            {return $('input.new-todo'); }
    get inputEdit()             {return $('input.edit'); }
    get oneItem()               {return $('section.main li'); }
    get listItems()             {return browser.elements('section.main li '); }
    get markDone()              {return $('input[type="checkbox"]'); }
    get markUndone()            {return $('li.completed input[type="checkbox"]'); }
    get itemCounter()           {return $('footer.footer strong'); }
    get allFilter()             {return $('a[href="#/]'); }
    get activeFilter()          {return $('a[href="#/active"]');}
    get completedFilter()       {return $('a[href="#/completed"]');}
    get clearCompletedButton()  {return $('button.clear-completed'); }
    get deleteButton ()         {return $('button.destroy'); }

    constructor() {
        super();
    }

    open() {
        super.open();
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

    undoTask() {
        this.markUndone.click();
    }


}

module.exports = TaskPage;