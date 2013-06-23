var fs = require('fs'),
    $kernel = require('ku4node-kernel'),
    $class = $kernel.class,
    $observer = $kernel.patterns.observer,
    $htmlParser = require('./parsers/htmlParser');

function chordpro() {
    chordpro.base.call(this);
    this._onFileLoaded = $observer();
}
chordpro.prototype = {
    load: function(str){ return this.set("str", str); },
    loadFile: function(path){
        var me = this;
        fs.readFile(path, "utf8", function(e, data) {
            me.load(data)._onFileLoaded.notify(me);
        });
        return this;
    },
    onFileLoaded: function(f, s){ this._onFileLoaded.add(f, s); return this; },
    read: function(){ return this.get("str"); },
    readHtml: function(){ return $htmlParser().parse(this._str); }
}
$class.extend(chordpro, $class);

module.exports = function(){ return new chordpro(); }