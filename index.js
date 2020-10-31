const fetch = require('node-fetch');


/*

    Create the prioQ function to fetch the Priority Queue information from https://api.2b2t.dev/prioq. 
    Resolve the information as JSON format & return the function.

*/

let prioQ = async (message) => {

    let PrioQ = await fetch('https://api.2b2t.dev/prioq');
    PrioQ = await PrioQ.json();

    return PrioQ;

}

module.exports = prioQ;

