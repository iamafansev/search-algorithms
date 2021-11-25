import dfs from '../src/dfs';

const graph = {};
graph.cinema = ['cinemaHall1', 'cinemaHall2', 'sectorA'];
graph.sectorA = ['cinema', 'shop1', 'sectorB'];
graph.cinemaHall1 = ['cinema', 'exit9'];
graph.cinemaHall2 = ['cinema', 'exit10'];
graph.sectorB = ['sectorA', 'shop2', 'exit1'];
graph.shop1 = ['shop1Pantry', 'sectorA'];
graph.shop2 = ['sectorB'];
graph.shop3 = ['empty'];
graph.empty = [];
graph.shop1Pantry = [];

test('dfs', () => {
  const isExit = (root) => root.startsWith('exit');

  const actual1 = dfs('shop1', isExit, graph);
  expect(actual1).toBe('shop1->sectorA->cinema->cinemaHall1->exit9');

  const actual2 = dfs('shop3', isExit, graph);
  expect(actual2).toBe(null);
});
