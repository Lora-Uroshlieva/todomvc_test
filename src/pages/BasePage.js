"use strict";

const Page = require('./Page');

class BasePage extends Page{

    constructor()           {super(); }
    open(path)              {super.open(path); }
    addNewTask(text)        {super.addNewTask(); }
    countActiveTasks()      {super.countActiveTasks(); }
    checkTasksVisibility()  {super.checkTasksVisibility(); }
    editTask()              {super.editTask(); }
    undoTask()              {super.undoTask(); }

    markAllTasks() {
        this.markAll.click();
    }
}

module.exports = BasePage;