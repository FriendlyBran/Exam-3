//const data = require('data');
var dataObj = JSON.parse(data);
//console.log(data[0])

var graph = new Data.Graph(data);
graph.set({
    item: "items",
    fname: "fname",
    age: "age"
})

var people = graph.get('item').get('fname');

_.each(people, function(items) {
    console.log(item.get('fname'));
})




