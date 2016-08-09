/* 
 * Stats on data objects
 */

var percentable = (part, whole) => whole > 0 && part <= whole;
var percent = (p, w) => percentable(p, w) ?  p/w: 0;
var percentInt = (p, w) => Math.floor(percent(p,w));

// TODO: add stats on db objects. 

/* 
 * Exports
 */
exports = module.exports = {};
exports.percentable = percentable;
exports.percentInt = percentInt;
exports.percent = percent;



