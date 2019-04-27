var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('/Users/moon/Study/REST/')).listen(3030, function(){
    console.log('Server running on 3030');
});
