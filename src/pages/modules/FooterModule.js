"use strict";


class FooterModule {
    get itemCounter()           {return $('footer.footer strong'); }
    get clearCompletedButton()  {return $('button.clear-completed'); }
    get AllTab()                {return $('ul.filters a[href="#/"]]'); }
    get ActiveTab()             {return $('ul.filters a[href="#/active"]'); }
    get CompletedTab()          {return $('ul.filters a[href="#/completed"]'); }

}

module.exports = FooterModule;