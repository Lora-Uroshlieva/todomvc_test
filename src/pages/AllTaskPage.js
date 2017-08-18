"use strict";

const BasePage = require('./BasePage');

class AllTaskPage extends BasePage {

    constructor()           {super(); }
    open()                  {super.open('#/'); }

}

module.exports = AllTaskPage;