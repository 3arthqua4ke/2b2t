<div align="center">
 <p>
    <a href="https://nodei.co/npm/2b2t/"><img src="https://nodei.co/npm/2b2t.png?downloads=true&stars=true" alt="npm install 2b2t"/></a>
  </p>
</div>

A lightweight & easy to use npm package for getting 2b2t queue info. 

# How to install: 
```bash
$ npm install 2b2t
```

## Usage:

**PrioQ:**
```js
Function: PrioQ()
let prio = await PrioQ()
prio[1] // Players in PrioQ.
prio[2] // Estimated Time in PrioQ. 
```

**NormalQ:**
```js
Function: queue()
queue().then(d => {
  d.queue;      // Players in NormalQ.
  d.updatetime; // Last time data was upated.
});
```

# Support 
![https://discord.gg/nPPyxc4](https://discord.gg/nPPyxc4)

# Contributing:

Feel free to make contributions to this project. Pull Requests & Issues will be reviewed.

# Credits:

Thank you [LolRiTTeR](https://github.com/LolRiTTeR) for the [2b2t API](https://2b2t.dev). 

# License:
[MIT](https://github.com/vypr-ysl/2b2t/blob/master/LICENSE)
