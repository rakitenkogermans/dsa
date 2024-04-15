import { WeightedGraph } from './weightedGraph';

describe('WeightedGraph', () => {
    let wg: WeightedGraph;

    beforeEach(() => {
        wg = new WeightedGraph();
    });

    test('addVertex should create a new vertex', () => {
        wg.addVertex('A');
        expect(wg.adjacencyList['A']).toEqual([]);
    });

    test('addEdge should add an edge between two vertices with a weight', () => {
        wg.addVertex('A');
        wg.addVertex('B');
        wg.addEdge('A', 'B', 2);
        expect(wg.adjacencyList['A']).toContainEqual({ node: 'B', weight: 2 });
        expect(wg.adjacencyList['B']).toContainEqual({ node: 'A', weight: 2 });
    });

    test('removeEdge should remove the edge between two vertices', () => {
        wg.addVertex('A');
        wg.addVertex('B');
        wg.addEdge('A', 'B', 2);
        wg.removeEdge('A', 'B');
        expect(wg.adjacencyList['A']).toEqual([]);
        expect(wg.adjacencyList['B']).toEqual([]);
    });

    test('removeVertex should remove the vertex and all its connections', () => {
        wg.addVertex('A');
        wg.addVertex('B');
        wg.addEdge('A', 'B', 2);
        wg.removeVertex('A');
        expect(wg.adjacencyList['A']).toBeUndefined();
        expect(wg.adjacencyList['B']).toEqual([]);
    });

    test('Dijkstra should find the shortest path from start to finish', () => {
        wg.addVertex('A');
        wg.addVertex('B');
        wg.addVertex('C');
        wg.addVertex('D');
        wg.addEdge('A', 'B', 1);
        wg.addEdge('B', 'C', 2);
        wg.addEdge('C', 'D', 3);
        wg.addEdge('A', 'D', 7);

        expect(wg.Dijkstra('A', 'D')).toEqual(['A', 'B', 'C', 'D']);
    });

    test('Dijkstra should handle graphs with no path', () => {
        wg.addVertex('A');
        wg.addVertex('B');
        wg.addVertex('C');
        expect(wg.Dijkstra('A', 'C')).toEqual(['A']); // Assuming C is unreachable
    });
});
