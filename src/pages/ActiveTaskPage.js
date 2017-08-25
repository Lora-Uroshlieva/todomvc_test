"use strict";

const BasePage = require('./BasePage');

class ActiveTaskPage extends BasePage {

    constructor()           {super(); }
    open()                  {super.open('#/active'); }

}

module.exports = ActiveTaskPage;