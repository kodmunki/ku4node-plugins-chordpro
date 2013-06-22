var $kernel = require('ku4node-kernel'),
    $class = $kernel.class,
    $parser = require('./parser');

function noteParser(replaceFormat) {
    var matchFormat = "\\[\\w+\\]",
        startTagExp = /^\[/,
        endTagExp = /\]$/;

    noteParser.base.call(this, matchFormat, startTagExp, endTagExp, null, null, replaceFormat);
}
$class.extend(noteParser, $parser.Class);

module.exports = function(replaceFormat){
    return new noteParser(replaceFormat);
}