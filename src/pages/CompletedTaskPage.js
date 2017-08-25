"use strict";

const BasePage = require('./BasePage');

class CompletedTaskPage extends BasePage {

    constructor()           {super(); }
    open()                  {super.open('#/completed'); }

}

module.exports = CompletedTaskPage;