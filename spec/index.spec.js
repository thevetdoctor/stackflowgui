const gui = require('../jasmine-test.js');

describe('gui test', () => {

	it('should respond with a value of 6', (done) => {
		let value = gui([1, 2, 3]);
		expect(value).toEqual(6);
		done();
	});

	it('should respond with a value of 10', (done) => {
		let value = gui([1, 2, 3, 4]);
		expect(value).toEqual(10);
		done();
	});

	it('should respond with a value of -1', (done) => {
		let value = gui([-10, 2, 3, 4]);
		expect(value).toEqual(-1);
		done();
	});

})