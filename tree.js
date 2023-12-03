/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    let toVisitStack = [this.root];
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current && current.val !== null && current.val !== undefined) {
        sum += current.val;
  
        if (current.children && current.children.length > 0) {
          toVisitStack.push(...current.children);
        }
      }
    }
      return sum;
    }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let evens = [];
    let toVisitStack = [this.root];
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current && current.val !== null && current.val !== undefined) {
        if (current.val % 2 === 0) {
          evens.push(current.val)
        }
  
        if (current.children && current.children.length > 0) {
          toVisitStack.push(...current.children);
        }
      }
    }
      return evens.length;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let greater = [];
    let toVisitStack = [this.root];
    while (toVisitStack.length){
      let current = toVisitStack.pop();
      if (current && current.val !== null && current.val !== undefined) {
        if (current.val > lowerBound) {
          greater.push(current.val)
        }

        if(current.children && current.children.length > 0){
          toVisitStack.push(...current.children)
        }
    }

  }
  return greater.length;
}
}

module.exports = { Tree, TreeNode };
