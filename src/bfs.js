const bfs = (name, compare, graph = {}) => {
  const queue = [];
  const searched = new Set([]);

  queue.push(...graph[name]);

  while (queue.length > 0) {
    const guess = queue.shift();

    if (!searched.has(guess)) {
      if (compare(guess)) {
        return true;
      }

      queue.push(...graph[guess]);
      searched.add(guess);
    }
  }

  return false;
};

export default bfs;
