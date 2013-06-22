var $kernel = require('ku4node-kernel'),
    $class = $kernel.class,
    $keyValueTagParser = require('./keyValueTagParser'),
    $tagParser = require('./tagParser'),
    $noteParser = require('./noteParser'),
    $charParser = require('./charParser');

function parserFactory() {
    parserFactory.base.call(this);
}
parserFactory.prototype = {
    createTitle:function(v) { return $keyValueTagParser("title", "t", v);},
    createSubtitle: function(v) { return $keyValueTagParser("subtitle", "su", v);},
    createSoc: function(v) { return $tagParser("start_of_chorus", "soc", v);},
    createEoc: function(v) { return $tagParser("end_of_chorus", "eoc", v);},
    createComment: function(v) { return $keyValueTagParser("comment", "c", v);},
    createSot: function(v) { return $tagParser("start_of_tab", "sot", v);},
    createEot: function(v) { return $tagParser("end_of_tab", "eot", v);},
    createGuitarComment: function(v) { return $keyValueTagParser("guitar_comment", "gc", v);},
    createNewLine: function(v) { return $charParser("\n", v); },
    createNewSong: function(v) { return $tagParser("new_song", "ns", v);},
    createNewPage: function(v) { return $tagParser("new_page", "np", v);},
    createNewPhysicalPage: function(v) { return $tagParser("new_physical_page", "npp", v);},
    createColBreak: function(v) { return $tagParser("column_break", "colb", v);},
    createKey: function(v) { return $keyValueTagParser("key", "k", v); },
    createNote: function(v) { return $noteParser(v); }
}
$class.extend(parserFactory, $class);

module.exports = function(){ return new parserFactory(); }
module.exports.Class = parserFactory;