"use strict";


class FooterModule {

    constructor(locator){
        this.locator = locator;
    }

    get itemCounter()           {return $('footer.footer strong'); }
    get clearCompletedButton()  {return $('button.clear-completed'); }
    get AllTab()                {return $('ul.filters a[href="#/"]]'); }
    get ActiveTab()             {return $('ul.filters a[href="#/active"]'); }
    get CompletedTab()          {return $('ul.filters a[href="#/completed"]'); }

    countActiveTasks() {
        this.itemCounter.waitForVisible();
        return Number(this.itemCounter.getText());
    }

}

module.exports = FooterModule;