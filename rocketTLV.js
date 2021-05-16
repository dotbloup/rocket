// here is the game
// find a way to interrupt the promises below according to the following rules:
// create a function rocket that could interrupt the series of promises at anytime (before, during, and after)
// use edit button at the top right corner of this screen. 


function theT(time){
d = new Date(time);
console.log("Action in Tel aviv at",d.toLocaleTimeString());
return d.toLocaleTimeString();
}

// promise
const sleep = (timeout, v) => new Promise(r => setTimeout(() => r(v), timeout));
// series to call
const series = [() => sleep(1000, ["Wash Body ",theT(Date.now())]), () => sleep(1000, ["Clean Hair",theT(Date.now())]), () => sleep(1000, ["Rinse ",theT(Date.now())])];

// serialize
const r = series
  .reduce(
    (m, p) => m.then(v => Promise.all([...v, p()])),
    Promise.resolve([])
  );

// get result
r.then((r) => console.log('done', r))
