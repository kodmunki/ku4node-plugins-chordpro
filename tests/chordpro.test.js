var $kernel = require('ku4node-kernel'),
    $ = $kernel.asserters,
    $str = $kernel.str,
    $parser = require('../lib/chordpro'),
    pwd = "/Users/kodmunki/Dev/SourceControl/kodmunki/Node/plugins/ku4node-plugins-chordpro/tests/";

exports['create'] = function (test) {
    test.expect(1);
    var parser = $parser();
    test.ok(parser);
    test.done();
};

exports['load/read'] = function (test) {
    test.expect(2);

    var lyrics = $str.build("{t:My Song Title}",
        "{artist: My Artist}",
        "Here is [A] lyric for you");

    var parser = $parser().load(lyrics),
        testValue1 = parser.read(),
        testValue2 = parser.readHtml()
        expectedValue = "<h1 class=\"songTitle\">My Song Title</h1>{artist: My Artist}Here is <span class=\"note\">A</span> lyric for you";

    test.equals(testValue1, lyrics);
    test.equals(testValue2, expectedValue);

    test.done();
};

exports['loadFile/read'] = function (test) {
    test.expect(2);

    function assert(_parser){
        var testValue1 = _parser.read(),
            testValue2 = _parser.readHtml()
            expectedValue1 = "{title:Twinkle Twinkle}\n{subtitle:Little Star}\n\n[C]Twinkle, twinkle, [F]little [C]star,\n[F]How I [C]wonder [G7]what you [C]are!\n[C]Up a[F]bove the [C]world so [G7]high,\n[C]Like a [F]diamond [C]in the [G7]sky.\n[C]Twinkle, twinkle, [F]little [C]star,\n[F]How I [C]wonder [G7]what you [C]are!\n\n{start_of_chorus}\n[C]Little, [F]little, [C]little [G7]star,\n[C]Up a[F]bove the [C]clouds so [G7]far,\n[C]How I wonder [F]what you [C]are!\n[F]Little, [C]little, [G7]little [C]star.\n{end_of_chorus}\n\n{start_of_tab}\n|--------------0--0-------------------------------\n|--------3--3--------3-----1--1--0--0-------------\n|--0--0--------------------------------2--2--0----\n\n|--3--3--1--1--0--0--------\n|--------------------3-----\n|--------------------------\n\nPlay only on strings 1, 2, 3\n{end_of_tab}\n\n{c:Songsheet Generator Sample Song}\n1"
            expectedValue2 = "<h1 class=\"songTitle\">Twinkle Twinkle</h1><br/><h2 class=\"subtitle\">Little Star</h2><br/><br/><span class=\"note\">C</span>Twinkle, twinkle, <span class=\"note\">F</span>little <span class=\"note\">C</span>star,<br/><span class=\"note\">F</span>How I <span class=\"note\">C</span>wonder <span class=\"note\">G7</span>what you <span class=\"note\">C</span>are!<br/><span class=\"note\">C</span>Up a<span class=\"note\">F</span>bove the <span class=\"note\">C</span>world so <span class=\"note\">G7</span>high,<br/><span class=\"note\">C</span>Like a <span class=\"note\">F</span>diamond <span class=\"note\">C</span>in the <span class=\"note\">G7</span>sky.<br/><span class=\"note\">C</span>Twinkle, twinkle, <span class=\"note\">F</span>little <span class=\"note\">C</span>star,<br/><span class=\"note\">F</span>How I <span class=\"note\">C</span>wonder <span class=\"note\">G7</span>what you <span class=\"note\">C</span>are!<br/><br/><section class=\"chorus\"><br/><span class=\"note\">C</span>Little, <span class=\"note\">F</span>little, <span class=\"note\">C</span>little <span class=\"note\">G7</span>star,<br/><span class=\"note\">C</span>Up a<span class=\"note\">F</span>bove the <span class=\"note\">C</span>clouds so <span class=\"note\">G7</span>far,<br/><span class=\"note\">C</span>How I wonder <span class=\"note\">F</span>what you <span class=\"note\">C</span>are!<br/><span class=\"note\">F</span>Little, <span class=\"note\">C</span>little, <span class=\"note\">G7</span>little <span class=\"note\">C</span>star.<br/></section><br/><br/><section class=\"tab\"><br/>|--------------0--0-------------------------------<br/>|--------3--3--------3-----1--1--0--0-------------<br/>|--0--0--------------------------------2--2--0----<br/><br/>|--3--3--1--1--0--0--------<br/>|--------------------3-----<br/>|--------------------------<br/><br/>Play only on strings 1, 2, 3<br/></section><br/><br/><span class=\"comment\">Songsheet Generator Sample Song</span><br/>1";

        test.equals(testValue1, expectedValue1);
        test.equals(testValue2, expectedValue2);

        test.done();
    }

    $parser()
        .onFileLoaded(assert)
        .loadFile(pwd + "stubs/song.chrdpro");
};