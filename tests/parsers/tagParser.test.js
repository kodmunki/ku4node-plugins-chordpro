var $kernel = require('ku4node-kernel'),
    $ = $kernel.asserters,
    $str = $kernel.str,
    $parser = require('../../lib/parsers/tagParser');

exports['create'] = function (test) {
    test.expect(1);
    var parser = $parser("title", "t", "<title>");
    test.ok(parser);
    test.done();
};

exports['parse'] = function (test) {
    test.expect(1);

    var lyrics = $str.build("{t}",
                            "{artist}",
                            "Here is [A] lyric for you");

    var parser1 = $parser("title", "t", "<title>"),
        parser2 = $parser("artist", "a", "<artist>") ,
        midValue = parser1.parse(lyrics),
        testValue = parser2.parse(midValue),
        expectedValue = "<title><artist>Here is [A] lyric for you";

    test.equals(testValue, expectedValue);

    test.done();
};