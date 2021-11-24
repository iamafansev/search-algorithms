import bfs from '../src/bfs';

const graph = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jhonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jhonny = [];

test('bfs', () => {
  const isJhonny = (name) => name === 'jhonny';

  const actual1 = bfs('you', isJhonny, graph);
  expect(actual1).toBe(true);

  const actual2 = bfs('bob', isJhonny, graph);
  expect(actual2).toBe(false);
});
