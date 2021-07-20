const fetch = require("node-fetch");

/**
 * Fetch Current Queue information from https://www.2b2t.io/
 * @async
 * @returns {Promise<Array>} queue - Players in Queue.
 */
async function queue() {
  let queue = await fetch("https://www.2b2t.io/api/queue?last=true");
  queue = await queue.json();

  return {queue: queue[1], updatetime: queue[0]};
}

/**
 * Fetch the Priority Queue information from https://api.2b2t.dev/prioq
 * @async
 * @returns {Promise<Array>} prio[1] - Players in Prio queue. prio[2] - Estimated Time in Prio queue.
 */
async function prioQ() {
  let prioQ = await fetch("https://api.2b2t.dev/prioq");
  prioQ = await prioQ.json();

  return prioQ;
}

module.exports = { prioQ, queue };
