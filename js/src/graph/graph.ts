class Graph {
    adjacencyList: Record<string, string[]> = {};

    constructor() {}

    addVertex = (vertex: string) => {
        if (!this.adjacencyList.hasOwnProperty(vertex)) {
            this.adjacencyList[vertex] = [];
        }
    };

    addEdge = (v1: string, v2: string) => {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    };

    removeEdge = (v1: string, v2: string) => {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    };

    removeVertex = (vertex: string) => {
        this.adjacencyList[vertex].forEach((v) => {
            this.removeEdge(vertex, v);
        });
        delete this.adjacencyList[vertex];
    };

    depthFirstRecursive = (start: string) => {
        const result: string[] = [];
        const visited: Record<string, boolean> = {};

        const dfs = (vertex: string) => {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        };
        dfs(start);

        return result;
    };

    depthFirstIterative = (start: string) => {
        const stack = [start];
        const result: string[] = [];
        const visited: Record<string, boolean> = {};

        visited[start] = true;
        while (stack.length) {
            const currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    };

    breadthFirst = (start: string) => {
        const queue = [start];
        const result: string[] = [];
        const visited: Record<string, boolean> = {};

        visited[start] = true;
        while (queue.length) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    };
}

export { Graph };
