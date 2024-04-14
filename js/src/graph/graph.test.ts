import { Graph } from './graph';

describe('Graph', () => {
    let graph: Graph;

    beforeEach(() => {
        graph = new Graph();
    });

    test('addVertex creates a new vertex', () => {
        graph.addVertex('A');
        expect(graph.adjacencyList['A']).toEqual([]);
    });

    test('addEdge adds an undirected edge between two vertices', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        expect(graph.adjacencyList['A']).toContain('B');
        expect(graph.adjacencyList['B']).toContain('A');
    });

    test('removeEdge removes an edge between two vertices', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        graph.removeEdge('A', 'B');
        expect(graph.adjacencyList['A']).not.toContain('B');
        expect(graph.adjacencyList['B']).not.toContain('A');
    });

    test('removeVertex removes a vertex and all its connections', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.removeVertex('A');
        expect(graph.adjacencyList['A']).toBeUndefined();
        expect(graph.adjacencyList['B']).not.toContain('A');
        expect(graph.adjacencyList['C']).not.toContain('A');
    });

    test('depthFirstRecursive performs a DFS from the given start vertex', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        expect(graph.depthFirstRecursive('A')).toEqual(['A', 'B', 'C']);
    });

    test('depthFirstIterative performs a DFS iteratively from the given start vertex', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        expect(graph.depthFirstIterative('A')).toEqual(['A', 'C', 'B']);
    });

    test('breadthFirst performs a BFS from the given start vertex', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        expect(graph.breadthFirst('A')).toEqual(['A', 'B', 'C']);
    });
});
