var fs = require('fs'),
    $kernel = require('ku4node-kernel'),
    $ = $kernel.asserters,
    $str = $kernel.str,
    $parser = require('../../lib/parsers/chordListParser'),
    pwd = "/Users/kodmunki/Dev/SourceControl/kodmunki/Node/plugins/ku4node-plugins-chordpro/tests/";

exports['create'] = function (test) {
    test.expect(1);
    var parser = $parser();
    test.ok(parser);
    test.done();
};

exports['parse'] = function (test) {
    test.expect(1);

    var lyrics = fs.readFile(pwd + "stubs/song.chrdpro", "utf8", function(e, data) {

        var parser = $parser(),
            chords = parser.parse(data);
        test.equals(chords.count(), 3);

        test.done();
    });
};