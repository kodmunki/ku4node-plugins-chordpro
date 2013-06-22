var $kernel = require('ku4node-kernel'),
    $ = $kernel.asserters,
    $parser = require('../../lib/parsers/parser'),
    parser = $parser("\\{\\w+:({0}|{1}):\\d\\}", /^\{\w+:/, /:\d\}$/, "test", "t", "<test>{0}</test>");

exports['create'] = function (test) {
    test.expect(1);
    var parser = $parser("(\\{\\w+:{0}:\\d\\})|(\\{\\w:{0}:\\d\\})", /^\{\w+:/, /:\d\}$/, "test", "t", "<test>{0}</test>");
    test.ok(parser);
    test.done();
};

exports['parse'] = function (test) {
    test.expect(1);

    var testValue = parser.parse("{v:test:1} {v:test:1} {a:test:1} {b:test:1} {1:tag:2} {test:Value:go} (w:Value:1) {w:Value:1) {t:t:1}"),
        expectedValue = "<test>test</test> <test>test</test> <test>test</test> <test>test</test> {1:tag:2} {test:Value:go} (w:Value:1) {w:Value:1) <test>t</test>";

    test.equals(testValue, expectedValue);

    test.done();
};