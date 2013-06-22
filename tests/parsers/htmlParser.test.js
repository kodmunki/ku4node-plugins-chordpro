var fs = require('fs'),
    $kernel = require('ku4node-kernel'),
    $ = $kernel.asserters,
    $str = $kernel.str,
    $parser = require('../../lib/parsers/htmlParser'),
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
            testValue = parser.parse(data),
            expectedValue = '<title>Twinkle Twinkle</title><br/><subtitle>Little Star</subtitle><br/><br/><span class="note">C</span>Twinkle, twinkle, <span class="note">F</span>little <span class="note">C</span>star,<br/><span class="note">F</span>How I <span class="note">C</span>wonder <span class="note">G7</span>what you <span class="note">C</span>are!<br/><span class="note">C</span>Up a<span class="note">F</span>bove the <span class="note">C</span>world so <span class="note">G7</span>high,<br/><span class="note">C</span>Like a <span class="note">F</span>diamond <span class="note">C</span>in the <span class="note">G7</span>sky.<br/><span class="note">C</span>Twinkle, twinkle, <span class="note">F</span>little <span class="note">C</span>star,<br/><span class="note">F</span>How I <span class="note">C</span>wonder <span class="note">G7</span>what you <span class="note">C</span>are!<br/><br/><section class="chorus"><br/><span class="note">C</span>Little, <span class="note">F</span>little, <span class="note">C</span>little <span class="note">G7</span>star,<br/><span class="note">C</span>Up a<span class="note">F</span>bove the <span class="note">C</span>clouds so <span class="note">G7</span>far,<br/><span class="note">C</span>How I wonder <span class="note">F</span>what you <span class="note">C</span>are!<br/><span class="note">F</span>Little, <span class="note">C</span>little, <span class="note">G7</span>little <span class="note">C</span>star.<br/></section><br/><br/><section class="tab"><br/>|--------------0--0-------------------------------<br/>|--------3--3--------3-----1--1--0--0-------------<br/>|--0--0--------------------------------2--2--0----<br/><br/>|--3--3--1--1--0--0--------<br/>|--------------------3-----<br/>|--------------------------<br/><br/>Play only on strings 1, 2, 3<br/></section><br/><br/><span class="comment">Songsheet Generator Sample Song</span><br/>1';

        test.equals(testValue, expectedValue);

        test.done();
    });
};