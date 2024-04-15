class PriorityQueue {
    values: { val: string; priority: number }[] = [];

    constructor() {}

    enqueue = (val: string, priority: number) => {
        this.values.push({ val, priority });
        this.sort();
    };

    dequeue = () => {
        return this.values.shift();
    };

    sort = () => {
        this.values.sort((a, b) => a.priority - b.priority);
    };
}

class WeightedGraph {
    adjacencyList: Record<string, { node: string; weight: number }[]> = {};

    constructor() {}

    addVertex = (vertex: string) => {
        if (!this.adjacencyList.hasOwnProperty(vertex)) {
            this.adjacencyList[vertex] = [];
        }
    };

    addEdge = (v1: string, v2: string, weight: number) => {
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    };

    removeEdge = (v1: string, v2: string) => {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v.node !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v.node !== v1);
    };

    removeVertex = (vertex: string) => {
        this.adjacencyList[vertex].forEach((v) => {
            this.removeEdge(vertex, v.node);
        });
        delete this.adjacencyList[vertex];
    };

    Dijkstra = (start: string, finish: string) => {
        const nodes = new PriorityQueue();
        const distances: Record<string, number> = {};
        const previous: Record<string, null | string> = {};
        let path: string[] = [];
        let smallest: string;

        // initial state
        for (const vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                // we are done
                // build up path to return at end
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (const neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distane to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }

        if (path.length === 0) {
            // If no path was found, return an array with the start node only
            return [start];
        }

        return path.concat(smallest).reverse();
    };
}

export { WeightedGraph };
