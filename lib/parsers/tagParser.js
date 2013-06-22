var $kernel = require('ku4node-kernel'),
    $class = $kernel.class,
    $parser = require('./parser');

function tagParser(longKey, shortKey, replaceFormat) {
    var matchFormat = "\\{({0}|{1})}",
        startTagExp = /^\{/,
        endTagExp = /\}$/;

    tagParser.base.call(this, matchFormat, startTagExp, endTagExp, longKey, shortKey, replaceFormat);
}
$class.extend(tagParser, $parser.Class);

module.exports = function(longKey, shortKey, replaceFormat){
    return new tagParser(longKey, shortKey, replaceFormat);
}