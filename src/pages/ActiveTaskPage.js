"use strict";

const Page = require('./Page');

class ActiveTaskPage extends Page {

    constructor()           {super(); }
    open()                  {super.open('active'); }
    addNewTask(text)        {super.addNewTask(); }
    countActiveTasks()      {super.countActiveTasks(); }
    checkTasksVisibility()  {super.checkTasksVisibility(); }
    editTask()              {super.editTask(); }
    undoTask()              {super.undoTask(); }


}

module.exports = ActiveTaskPage;