const getAdjacencyList = (pairs) => {
  let adjacencyList = {};
  pairs.forEach((pair) => {
    if (!adjacencyList[pair[0]]) adjacencyList[pair[0]] = [];
    if (!adjacencyList[pair[1]]) adjacencyList[pair[1]] = [];
    adjacencyList[pair[0]].push([pair[1], pair[2]]);
    adjacencyList[pair[1]].push([pair[0], pair[2]]);
  });

  return adjacencyList;
};

const findVisitedPairsAdjList = (adjacencyList, visitedPairs) => {
  let visitedPairsAdjList = {};
  for (const vertex in visitedPairs) {
    const visitedVertices = Object.keys(visitedPairs);
    adjacencyList[vertex].forEach((edge) => {
      if (!visitedVertices.includes(edge[0])) {
        if (!visitedPairsAdjList[vertex]) visitedPairsAdjList[vertex] = [];
        visitedPairsAdjList[vertex].push(edge);
      }
    });
  }

  return visitedPairsAdjList;
};

const findMinWeightedEdge = (visitedVerticesAdjList) => {
  let minEdge = [undefined, +Infinity];
  let nextVertex = undefined;

  for (const vertex in visitedVerticesAdjList) {
    visitedVerticesAdjList[vertex].forEach((node) => {
      if (minEdge[1] > node[1]) {
        nextVertex = vertex;
        minEdge = node;
      }
    });
  }

  return { nextVertex, minEdge };
};

const mst_prims = (pairs, source) => {
  const adjacencyList = getAdjacencyList(pairs);
  const totalVertices = Object.keys(adjacencyList);
  let visitedPairs = {};
  visitedPairs[source] = [];

  while (!totalVertices.every((vertex) => Object.keys(visitedPairs).includes(vertex))) {
    const visitedPairsAdjList = findVisitedPairsAdjList(adjacencyList, visitedPairs);
    const { nextVertex, minEdge } = findMinWeightedEdge(visitedPairsAdjList);
    if (nextVertex) {
      visitedPairs[nextVertex].push(minEdge);
      visitedPairs[minEdge[0]] = [];
    }
  }

  return visitedPairs;
};

module.exports = { mst_prims, getAdjacencyList };
