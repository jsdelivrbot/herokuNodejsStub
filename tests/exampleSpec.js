var helloWorld = require('../www/local_modules/HelloWorld');
var assert = require('assert');

describe('Hello World', function (){
	it('says hello', function (){
		assert.equal(helloWorld.sayHello(), 'Hello');
	});
});
