var $kernel = require('ku4node-kernel'),
    $ = $kernel.asserters,
    $str = $kernel.str,
    $parser = require('../../lib/parsers/charParser');

exports['create'] = function (test) {
    test.expect(1);
    var parser = $parser("\n", "<br/>");
    test.ok(parser);
    test.done();
};

exports['parse'] = function (test) {
    test.expect(1);

    var lyrics = $str.build("<title>\n",
                            "<artist>\n",
                            "Here is [A] lyric for you");

    var parser = $parser("\n", "<br/>"),
        testValue = parser.parse(lyrics),
        expectedValue = "<title><br/><artist><br/>Here is [A] lyric for you";

    test.equals(testValue, expectedValue);

    test.done();
};