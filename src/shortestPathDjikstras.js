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

const updateCosts = (adjacencyList, source, leastCosts) => {
  adjacencyList[source].forEach((vertex) => {
    const newCost = leastCosts[source]['cost'] + vertex[1];
    if (newCost < leastCosts[vertex[0]]['cost']) {
      leastCosts[vertex[0]]['cost'] = newCost;
      leastCosts[vertex[0]]['source'] = source;
    }
  });

  return leastCosts;
};

const findShortestPath = (pairs, source, target) => {
  const adjacencyList = getAdjacencyList(pairs);
  let visitedVertices = [];
  let currentVertex = source;
  let leastCosts = {};
  for (const vertex in adjacencyList) {
    leastCosts[vertex] = { cost: +Infinity, source: '' };
  }
  leastCosts[source]['cost'] = 0;

  while (currentVertex != target) {
    leastCosts = updateCosts(adjacencyList, currentVertex, leastCosts);
    console.log(leastCosts);
    visitedVertices.push(currentVertex);
    let temp = +Infinity;
    for (const vertex in leastCosts) {
      if (leastCosts[vertex]['cost'] < temp && !visitedVertices.includes(vertex)) {
        currentVertex = vertex;
        temp = leastCosts[vertex]['cost'];
      }
    }
  }

  return leastCosts;
};

const main = () => {
  const pairs = [
    ['a', 'b', 5],
    ['b', 'c', 3],
    ['a', 'c', 8],
    ['b', 'd', 1],
    ['c', 'd', 1],
    ['d', 'f', 4],
    ['e', 'b', 2],
    ['f', 'e', 2],
  ];
  console.log(findShortestPath(pairs, 'a', 'f'));
};

main();
