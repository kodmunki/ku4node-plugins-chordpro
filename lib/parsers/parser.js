var $kernel = require('ku4node-kernel'),
    $class = $kernel.class,
    $str = $kernel.str,
    $list = $kernel.collections.list;

function parser(matchFormat, startTagExp, endTagExp, longKey, shortKey, replaceFormat) {
    parser.base.call(this);

    this._startTagExp = startTagExp;
    this._endTagExp = endTagExp;

    this._regexp = new RegExp($str.format(matchFormat, longKey, shortKey), "g");
    this._replaceFormat = replaceFormat;
}
parser.prototype = {
    parse: function(str){
        var matches = $list(str.match(this._regexp));
        if(matches.isEmpty()) return str;

        var parsedStr = str;
        matches.each(function(matchValue){
            var extractedValue = matchValue.replace(this._startTagExp, "").replace(this._endTagExp, ""),
                replaceValue = $str.format(this._replaceFormat, extractedValue);
            parsedStr =  parsedStr.replace($str.trim(matchValue), replaceValue);
        }, this);
        return parsedStr;
    }
}
$class.extend(parser, $class);

module.exports = function(matchFormat, startTagExp, endTagExp, longKey, shortKey, replaceFormat){
    return new parser(matchFormat, startTagExp, endTagExp, longKey, shortKey, replaceFormat);
}
module.exports.Class = parser;