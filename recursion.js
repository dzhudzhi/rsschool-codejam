const recursion = (tree) => {
  const res = [];
  const oneLevelNodes = (...args) => {
    const thisLevel = [];
    const nextLevel = [];
    args.forEach((node) => {
      thisLevel.push(node.value);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    });
    res.push(thisLevel);
    if (nextLevel.length !== 0) oneLevelNodes(...nextLevel);
  };

  oneLevelNodes(tree);
  return res;
};

module.exports = recursion;
