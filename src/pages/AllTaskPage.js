"use strict";

const BasePage = require('./BasePage');

class AllTaskPage extends BasePage {

    constructor()           {super(); }
    open(path)              {super.open(path); }
    addNewTask(text)        {super.addNewTask(); }
    countActiveTasks()      {super.countActiveTasks(); }
    checkTasksVisibility()  {super.checkTasksVisibility(); }
    editTask()              {super.editTask(); }
    undoTask()              {super.undoTask(); }


}

module.exports = AllTaskPage;