var $kernel = require('ku4node-kernel'),
    $class = $kernel.class;

function charParser(str, replacement) {
    this._str = new RegExp(str, "gm");
    this._replacement = replacement;
    charParser.base.call(this);
}
charParser.prototype = {
    parse: function(str){
        return str.replace(this._str, this._replacement);
    }
}
$class.extend(charParser, $class);

module.exports = function(char, replacement){
    return new charParser(char, replacement);
}