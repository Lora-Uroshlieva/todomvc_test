'use strict';

const Page = require('./Page');

class CompletedTaskPage extends Page {

	constructor() {
		super();
	}

	open() {
		super.open('#/completed');
	}
}

module.exports = CompletedTaskPage;