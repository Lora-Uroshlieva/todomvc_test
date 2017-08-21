"use strict";


class TasksModule {
    get inputEdit()         {return $('input.edit'); }      //allows to edit task after double-clicking on it.
    get oneItem()           {return $('section.main li'); } //returns one task from list
    get markDone()          {return $('div.view input.toggle[type="checkbox"]'); }
    get markUndone()        {return $('li.completed input[type="checkbox"]'); }
    get deleteButton ()     {return $('button.destroy'); }      //button to delete one task
}

module.exports = TasksModule;