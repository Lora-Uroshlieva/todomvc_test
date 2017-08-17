"use strict";

const BasePage = require('./BasePage');

class TaskPage extends BasePage {

    get inputField()            {return $('input.new-todo'); }
    get oneItem()               {return $('section.main li'); }
    get listItems()             {return browser.elements('section.main li '); }
    get markDone()              {return $('input[type="checkbox"]'); }
    get markUndone()            {return $('li.completed input[type="checkbox"]'); }
    get itemCounter()           {return $('span.todo_count strong'); }
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
}

module.exports = TaskPage;