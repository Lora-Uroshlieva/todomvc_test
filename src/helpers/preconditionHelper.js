'use strict';

function clearTasks() {
	try {
		browser.deleteCookie();
		browser.localStorage('DELETE');
		browser.refresh();
		logger.info('Page was cleared from all tasks');
	} catch (e) {
		browser.url('/examples/react/');
		logger.error('ERROR during page opening: ' + e.name + '\n' + e.message);
	}
}

function createNewTask(task) {
	try {
		browser.localStorage(
			'POST',
			{key: 'react-todos', value: '['+ task.toString() + ']'});
		browser.refresh();
		logger.info('The page was cleared and refreshed.');
	} catch(e) {
		logger.error('Can not create task: ' + e.name + ' ' + e.message);
	}
}

module.exports = {createNewTask, clearTasks};