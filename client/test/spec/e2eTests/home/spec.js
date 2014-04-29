describe('angularjs homepage', function () {
    it('should greet the named user', function () {
        browser.get('http://www.angularjs.org');

        element(by.model('yourName')).sendKeys('Abhishek');

        var greeting = element(by.binding('yourName'));

        expect(greeting.getText()).toEqual('Hello Abhishek!');
    });
});

describe('angularjs homepage', function () {
    it('should greet the named user', function () {
        browser.get('http://127.0.0.1:7000/#/');

        var elem = element(by.tagName('h1')).getText();

      //  var greeting = element(by.binding('yourName'));

        expect(elem).toEqual('Hello World');
    });
});