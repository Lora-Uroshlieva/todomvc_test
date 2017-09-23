'use strict';

const Page = require('./Page');

class ActiveTaskPage extends Page {

	constructor() {
		super();
	}

	open() {
		super.open('#/active');
	}
}

module.exports = ActiveTaskPage;