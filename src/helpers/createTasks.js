"use strict";

// const taskObj = require('./../models/Task');

// function createNewTask(taskObj) {
//     let text = taskObj.text;
//     let isCompleted = taskObj.isCompleted;


function createNewTask(id, text, isCompleted) {
    browser.localStorage(
        'POST',
        {key: 'react-todos', value: '[{"id":"'+ id +'","title":"' + text + '", "isCompleted":' + isCompleted + '}]'});
    browser.refresh();
}



module.exports = createNewTask;