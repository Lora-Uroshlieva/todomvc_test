"use strict";

function clearTasks() {
    browser.deleteCookie();
    browser.localStorage('DELETE');
    browser.refresh();
}

module.exports = clearTasks;