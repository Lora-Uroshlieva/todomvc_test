"use strict";

function clearTasks() {
    browser.deleteCookie();
    browser.localStorage('DELETE');
    browser.refresh();
}

function createNewTask(task) {
    browser.localStorage(
        'POST',
        {key: 'react-todos', value: '['+ task.toString() + ']'});
    browser.refresh();
}



module.exports = {createNewTask, clearTasks};