const dfs = (node, compare, graph = {}) => {
  const visited = new Set();
  const path = [];

  const iter = (currentNode) => {
    path.push(currentNode);
    visited.add(currentNode);

    if (compare(currentNode)) {
      return true;
    }

    const neighborNodes = graph[currentNode];

    for (const neighborNode of neighborNodes) {
      if (!visited.has(neighborNode)) {
        const reached = iter(neighborNode);

        if (reached) {
          return true;
        }

        path.pop();
        visited.delete(neighborNode);
      }
    }

    return false;
  };

  return iter(node) ? path.join('->') : null;
};

export default dfs;
