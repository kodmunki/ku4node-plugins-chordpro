var $kernel = require('ku4node-kernel'),
    $class = $kernel.class,
    $parser = require('./parser');

function keyValueTagParser(longKey, shortKey, replaceFormat) {
    var matchFormat = "\\{({0}|{1}):[\\w\\s]+\\}",
        startTagExp = /^\{\w+:/,
        endTagExp = /\}$/;

    keyValueTagParser.base.call(this, matchFormat, startTagExp, endTagExp, longKey, shortKey, replaceFormat);
}
$class.extend(keyValueTagParser, $parser.Class);

module.exports = function(longKey, shortKey, replaceFormat){
    return new keyValueTagParser(longKey, shortKey, replaceFormat);
}