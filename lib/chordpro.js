var $kernel = require('ku4node-kernel'),
    $class = $kernel.class;

function chordpro() {
    chordpro.base.call(this);
}
chordpro.prototype = {
    load: function(str){ return this.set("str", str); },
    read: function(){ return this.get("str"); },
    readHtml: function(){

    }
}
$class.extend(chordpro, $class);

module.exports = function(){ return new chordpro(); }