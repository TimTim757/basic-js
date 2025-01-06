const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chain.push('( )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this; // Add method chaining
  },

  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chain.length || position % 1 !== 0) {
      this.chain = []; // Reset the chain on error
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this; // Add method chaining
  },

  reverseChain() {
    this.chain.reverse();
    return this; // Add method chaining
  },

  finishChain() {
    const finishedChain = this.chain.join('~~');
    this.chain = []; // Reset the chain after finishing
    return finishedChain;
  }
};

module.exports = {
  chainMaker
};
