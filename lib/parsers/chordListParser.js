var $kernel = require('ku4node-kernel'),
    $class = $kernel.class,
    $list = $kernel.collections.list;

function chordListParser() { }
chordListParser.prototype = {
    parse: function(chordproString) {
        var matches = $list(chordproString.match(/\[\w+\]/gm)),
            chords = $list();
        if(matches.isEmpty()) return chords;
        matches.each(function(value){
            var chord = value.replace(/^\[/,"").replace(/\]$/,"");
            if(chords.contains(chord)) return;
            chords.add(chord);
        });
        return chords
    }
}
$class.extend(chordListParser, $class);

module.exports = function(){ return new chordListParser(); }