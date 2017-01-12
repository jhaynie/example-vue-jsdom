const Hello = require('src/hello');

describe('test', () => {
	it('should print out the date', () => {
		const vm = new Vue({
			el: document.createElement('div'),
			render: (h) => h(Hello)
		});
		should(vm.$el.innerHTML).match(/The time is "\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{2,}Z"/);
		should($(vm.$el).html()).match(/The time is "\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{2,}Z"/);
	});
});
