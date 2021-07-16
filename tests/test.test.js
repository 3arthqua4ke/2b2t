const b2t2 = require("../index");

test("Test Getting 2b2t Prio Queue Stats", done => {
  b2t2.prioQ().then(() => {
      done();
    }).catch(e => done(e));
});

test("Test Getting 2b2t Normal Queue Stats", done => {
  b2t2.queue().then(() => {
      done();
    }).catch(e => done(e));
});
