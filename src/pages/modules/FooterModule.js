"use strict";


class FooterModule {

    constructor(locator){
        this.locator = locator;
    }

    get itemCounter()           {return $('footer.footer strong'); }
    get clearCompletedButton()  {return $('button.clear-isCompleted'); }
    get allFilter()             {return $('.filters a[href="#/"]'); }
    get activeFilter()          {return $('.filters a[href="#/active"]'); }
    get completedFilter()       {return $('.filters a[href="#/isCompleted"]'); }

    countActiveTasks() {
        this.itemCounter.waitForVisible();
        return Number(this.itemCounter.getText());
    }

}

module.exports = FooterModule;