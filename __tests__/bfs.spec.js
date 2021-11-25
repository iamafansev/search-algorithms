/* eslint-disable import/no-extraneous-dependencies */
import { jest } from '@jest/globals';

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
  const mockIsJhonny = jest.fn((name) => name === 'jhonny');

  const actual1 = bfs('you', mockIsJhonny, graph);
  expect(actual1).toBe(true);
  expect(mockIsJhonny.mock.calls).toEqual([
    ['alice'],
    ['bob'],
    ['claire'],
    ['peggy'],
    ['anuj'],
    ['thom'],
    ['jhonny'],
  ]);

  const actual2 = bfs('bob', mockIsJhonny, graph);
  expect(actual2).toBe(false);
});
