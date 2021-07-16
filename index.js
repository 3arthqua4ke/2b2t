const fetch = require("node-fetch");

/**
 * Fetch the Priority Queue information from https://api.2b2t.dev/prioq
 * @returns {Promise<Array>} prio[1] - Players in Prio queue. prio[2] - Estimated Time in Prio queue.
 */
async function prioQ() {
  let prioQ = await fetch("https://api.2b2t.dev/prioq");
  prioQ = await prioQ.json();

  return prioQ;
}

module.exports = { prioQ };
