"use strict";

const BasePage = require('./BasePage');

class CompletedTaskPage extends BasePage {

    constructor()           {super(); }
    open()                  {super.open('completed'); }
    addNewTask(text)        {super.addNewTask(); }
    countActiveTasks()      {super.countActiveTasks(); }
    checkTasksVisibility()  {super.checkTasksVisibility(); }
    editTask()              {super.editTask(); }
    undoTask()              {super.undoTask(); }


}

module.exports = CompletedTaskPage;