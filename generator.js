var fs = require("fs");
var tracery = require('tracery-grammar');

var goals = [];
var characters = ["Jack", "Tom", "Bruce", "Julia", "Mary", "Helen", "Jerry", "Gwen"];
var relations = ["is in competition with", "is familiar with", "is in love with", "trusts", "deceits"];
var conditions = [];
var consequences = [];
var actions = ["killed", "kissed", "betrayed", "lent money to", "poisoned", "travelled with", "got married with"];
var origin = [];

var inputJSON = {
    goals,
    characters,
    relations,
    conditions,
    actions,
    consequences,
    origin
};

console.log(inputJSON);

/* #characters# wants to achieve #goals#, #conditions#(#characters# #relations# #characters#), 
#characters# #actions#, #consequences#(#characters# #relations# #characters#),
#characters# achieves/fails to achieve #goals#
*/

fs.readFile("./input.json", (err, data) => {
    if (err) throw err;
    var input = JSON.parse(data);
    var output = generate(input);
    console.log(output);
});

function generate(input) {
    console.log(input);
    var grammar = tracery.createGrammar(input);
    grammar.addModifiers(tracery.baseEngModifiers);
    return grammar.flatten("#origin#");
}
