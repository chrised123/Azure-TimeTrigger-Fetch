const fetch = require("node-fetch");

module.exports = async function (context, myTimer) {
    var date = new Date();
      
    var data = await fetch('https://covid-19-sl.netlify.com/');
    if(data.status != 200){
        context.log.error('Failed at ' + date);
    }
    context.log('trigger complete!');
};