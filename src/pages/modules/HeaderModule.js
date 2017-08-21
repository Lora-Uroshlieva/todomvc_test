"use strict";

class HeaderModule {
    get inputField()    {return $('input.new-todo'); }
    get markAll()       {return $('input.toggle-all')}

}

module.exports = HeaderModule;