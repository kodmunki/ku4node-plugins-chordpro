var $kernel = require('ku4node-kernel'),
    $class = $kernel.class,
    $list = $kernel.collections.list,
    $parserFactory = require('./parserFactory');

function htmlParser() {
    htmlParser.base.call(this);

    var parserFactory = $parserFactory();
    this._parsers = $list([
        parserFactory.createTitle("<h1 class=\"songTitle\">{0}</h1>"),
        parserFactory.createSubtitle("<h2 class=\"subtitle\">{0}</h2>"),
        parserFactory.createSoc("<section class=\"chorus\">"),
        parserFactory.createEoc("</section>"),
        parserFactory.createComment("<span class=\"comment\">{0}</span>"),
        parserFactory.createSot("<section class=\"tab\">"),
        parserFactory.createEot("</section>"),
        parserFactory.createGuitarComment("<div class=\"guitar-comment\">{0}</div>"),
        parserFactory.createNewLine("<br/>"),
        parserFactory.createNewSong("<!--New Song-->"),
        parserFactory.createNewPage("<!--New Page-->"),
        parserFactory.createNewPhysicalPage("<!--New Physical Page-->"),
        parserFactory.createColBreak("<!--Column Break-->"),
        parserFactory.createKey("<!--New Key-->"),
        parserFactory.createNote("<span class=\"note\">{0}</span>")]);
}
htmlParser.prototype = {
    parse: function(chordproString){
        var returnString = chordproString;
        this._parsers.each(function(parser){
            returnString = parser.parse(returnString);
        });
        return returnString;
    }
}
$class.extend(htmlParser, $class);

module.exports = function(){ return new htmlParser(); }