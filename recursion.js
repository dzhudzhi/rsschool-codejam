let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

const recursion = (tree) => {
    const res = [];
    const oneLevelNodes = (...args) => {
        const thisLevel = [];
        const nextLevel = [];
        args.forEach(node => {
            console.log(node.value);
            thisLevel.push(node.value);
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        });
        res.push(thisLevel);
        if (nextLevel.length !== 0) oneLevelNodes(...nextLevel); 
    }

    oneLevelNodes(tree);
    return res;
}

let array = recursion(tree);
console.dir(array);