// Data
// Mock Data
var entityChildren = {
  a1: ["S1", "S2", "S3"],
  S1: ["M1"],
  S2: ["M2"],
  S3: ["M3", "M4"],
  M1: ["T1"],
  M2: ["T2"],
  M3: ["T3", "T4", "T5"],
  M4: ["T6", "T7"],
  T1: ["C1"],
  T2: ["C2"],
  T3: ["C3"],
  T4: ["C4"],
  T5: ["C5"],
  T6: ["C6"],
  T7: ["C7"]
};

var entityDetails = {
  S1: {
    uuid: "S1",
    type: "testsuite",
    title: "Mock Testsuite 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  S2: {
    uuid: "S2",
    type: "testsuite",
    title: "Mock Testsuite 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  S3: {
    uuid: "S3",
    type: "testsuite",
    title: "Mock Testsuite 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  M1: {
    uuid: "M1",
    type: "module",
    title: "Mock Module 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  M2: {
    uuid: "M2",
    type: "module",
    title: "Mock Module 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  M3: {
    uuid: "M3",
    type: "module",
    title: "Mock Module 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  M4: {
    uuid: "M4",
    type: "module",
    title: "Mock Module 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  T1: {
    uuid: "T1",
    testid: "T1",
    type: "test",
    title: "Mock Test 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  T2: {
    uuid: "T2",
    testid: "T2",
    type: "test",
    title: "Mock Test 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  T3: {
    uuid: "T3",
    testid: "T3",
    type: "test",
    title: "Mock Test 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  T4: {
    uuid: "T4",
    testid: "T4",
    type: "test",
    title: "Mock Test 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  T5: {
    uuid: "T5",
    testid: "T5",
    type: "test",
    title: "Mock Test 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  T6: {
    uuid: "T6",
    testid: "T6",
    type: "test",
    title: "Mock Test 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  T7: {
    uuid: "T7",
    testid: "T7",
    type: "test",
    title: "Mock Test 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  C1: {
    uuid: "C1",
    testid: "C1",
    type: "test",
    title: "Mock Criteria 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  C2: {
    uuid: "C2",
    testid: "C2",
    type: "test",
    title: "Mock Criteria 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  C3: {
    uuid: "C3",
    testid: "C3",
    type: "test",
    title: "Mock Criteria 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  C4: {
    uuid: "C4",
    testid: "C4",
    type: "test",
    title: "Mock Criteria 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  C5: {
    uuid: "C5",
    testid: "C5",
    type: "test",
    title: "Mock Criteria 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  C6: {
    uuid: "C6",
    testid: "C6",
    type: "test",
    title: "Mock Criteria 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  C7: {
    uuid: "C7",
    testid: "C7",
    type: "test",
    title: "Mock Criteria 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
};

var svgWidth = window.innerWidth - 50,
    svgHeight = window.innerHeight - 50,
    margin = {
      left: 80,
      right: 40,
      top: 40,
      bottom: 40
    },
    nodeRadius = 5,
    labelWidth = 100,
    labelHeight = 20,
    labelYPos = 10,
    // labelXPos defined later as function labelXPosFunc
    i = 0,
    duration = 500, // duration of transitions
    boilerplateTree = null, // will hold d3 tree layout when activated
    routeMap = {
      // "loadAllTestsuites": loadAllTestsuites,
      "loadAllTestsuites": loadMockTestsuites,
      // "testsuite": loadModules,
      "testsuite": loadMockEntities,
      // "module": loadTests,
      "module": loadMockEntities,
      // "test": loadCriteria(),
      "test": loadMockEntities,
      // "loadCriteria": loadCriteria
      "loadCriteria": loadMockCriteria
    };

var boilerplateCache = {},
    criteriaCache = {};

var boilerplateData = {
  "title": "Boilerplate",
  "type": "root",
  "uuid": "a1"  // give root a uuid since the uuid is the cache key
};

/** Initialize screen at start **/
// Add svg to the screen
var svg = d3.select("#display")
    .append("svg")
    .attr({
      width: svgWidth,
      height: svgHeight
    });

// the diagonal projection function interprets the x and y coordinates
// need to use a custom projection function so the path's render correctly
var diagonal = d3.svg.diagonal()
    .projection(projectionFunc)
    .source(sourceFunc)
    .target(targetFunc);

/***** API calls *****/
function loadAllTestsuites(callback) {
  d3.json("/alltestsuites", function(error, json){
    if(error) return console.log(error);
    callback(json);
  });
}

function loadModules(suiteId, source) {
  var url = "/modulesfromtestsuiteid/" + suiteId;
  d3.json(url, function(error, json){
    if(error) return console.warn(error);
    // set source's children and expand
    source.children = json;
    expandNode(source);
  })
}

function loadTests(moduleId, source) {
  var url = "/testsfrommoduleid/" + moduleId;
  d3.json(url, function(error, json){
    if(error) return console.warn(error);
    // set source's children and expand
    source.children = json;
    expandNode(source);
  })
}

function loadCriteria(testId) {
  var url = "/criteriafromtestid/" + testId;

  d3.json(url, function(error, json){
    if(error) return console.warn(error);
    // add the list to the cache
    criteriaCache[testId] = json;
    displayCriteria(json);
  });
}


/***** d3 Key functions for use in d3.data() call*****/
function nodeKeyFunc(d) {
  return d.id || (d.id = ++i);
}

function pathKeyFunc(d) {
  return d.target.id;
}

/**** Click Functions ****/
function nodeClickFunc(source) {
  // node can only collapse if it has children
  // tests will never collapse
  // suites and modules should always have children if data is clean
  if(source.hasOwnProperty("children")) {
    collapseNode(source);
  } else {
    expand(source);
  }

  showDetail(source);
}

function edgeClickFunc(source) {
  window.alert("Leave me alone!");
}

// display entity detail below tree
function showDetail(source) {
  var entityType = source.type;

  // for some reason test entities don't have a title property
  // let's fix that
  if(entityType == "test"){
    source.title = source.testid;
  }

  // There are 3 divs, one each for displaying suites, modules and tests
  // They each have an id with format #<entity-type>Detail
  // Determine the id by the entity type and select it
  var detailId = "#" + source.type + "Detail";
  var div = d3.select(detailId);

  var detail = div.selectAll("div")
      .data([source]);

  detail.enter()
    .append("div");

  detail.html(function(d) {
    return "<h3>" + source.title + "</h3>" + "<p><strong>UUID: </strong>" + source.uuid + "</p>"
      + "<p><strong>Description: </strong>" + source.description + "</p>";
  });

  // query and display criteria if a test was selected
  if(entityType == "test"){
    var testId = source.uuid;

    // check if the criteria list is cached
    if(criteriaCache.hasOwnProperty(testId)){
      // retrieve from the cache
      var criteriaList = criteriaCache[testId];
      displayCriteria(criteriaList);
    } else{
      routeMap.loadCriteria(testId);
    }

  }
}

// build an html list of criteria and display it
// criteriaList should be the result of the api call to
// get criteria connected to a test
function displayCriteria(criteriaList) {
  // find the element we need to append to
  var testDetail = d3.select("#testDetail div");
  var htmlString = buildCriteriaList(criteriaList);

  testDetail.append("div")
    .attr("id", "criteriaList")
    .html(htmlString);
}

// criteriaList is an array of validation criteria entities
// return an html list show the id's of each entity in the list
function buildCriteriaList(criteriaList) {
  var htmlString = "<h3>Criteria</h4><ul>";
  var missingListEnd = criteriaList.reduce(buildCriterium, htmlString);

  return missingListEnd + "</ul>";
}

// callback function for an array reduce
function buildCriterium(previousValue, currentValue, currentIndex, array) {
  var htmlString = "<li>" + currentValue.criteriaId + "</li>";
  return previousValue + htmlString;
}

/**** Layout and Styling Functions ****/
function circleClassFunc(d) {
  return d.type;
}

function labelXPosFunc(d) {
  var type = d.type;

  // if entity type is test, show labels to the right of the node
  return type == "test" ? (nodeRadius + 5) : -(labelWidth + nodeRadius);
}

function labelYPosFunc(d) {
  return -(nodeRadius + 10);
}

function labelTextFunc(d) {
  var type = d.type;
  var label = "";

  if (type == "test") {
    label = d.testid;
  } else {
    label = d.title;
  }
  return "<p class='label" + type + "'>" + label + "</p>";
}

function edgeClassFunc(d) {
  return "edge" + d.source.type;
}

/**** SVG Coordinate Functions ****/
// default tree layout computes x and y values on scale of 0 to 1
// this can be modified if you need to
var xScale = d3.scale
    .linear()
    .domain([0, 1])
    .range([margin.left + labelWidth, svgWidth - margin.right - labelWidth]);

var yScale = d3.scale
    .linear()
    .domain([0, 1])
    .range([margin.top, svgHeight - margin.bottom]);

// Determine x and y positions
// flip the usage of d.x and d.y so the tree goes from left to right
// instead of top down
function xPosition(d, i) {
  return xScale(d.y);
}

function yPosition(d, i) {
  return yScale(d.x);
}

// testsuite nodes are calculated by tree layout to be at depth 1
// set their depth to 0 so they start on the left of the screen
function setTestsuitePosition(nodeArray) {
  nodeArray.forEach(function(val, idx, arr){
    var type = val.type;
    if(type == "testsuite"){
      val.y = 0;
    }
  })
}

// bezier functions return a value between 0 and 1
// which corresponds to the x and y positions calculated by
// the tree layout
// these functions used for calculating the paths
function bezierXSource(d){
  return d.x;
}

function bezierYSource(d){
  // pad the y position so the line doesn't go through the circle
  var yPos = xPosition(d) + nodeRadius;
  return xScale.invert(yPos);
}

function bezierXTarget(d){
  return d.x;
}

function bezierYTarget(d){
  var yPos = xPosition(d) - nodeRadius;
  return xScale.invert(yPos);
}

function projectionFunc(d) {
  return [xScale(d.y), yScale(d.x)];
}

function sourceFunc(d) {
  return {x: bezierXSource(d.source), y: bezierYSource(d.source)};
}

function targetFunc(d) {
  return {x: bezierXTarget(d.target), y: bezierYTarget(d.target)};
}

// remove nodes and update view
function collapseNode(source) {
  boilerplateCache[source.uuid] = source.children;
  source.children = null;

  // calling tree updates the x,y values of all nodes
  // this actually changes the x,y values of source
  var n = boilerplateTree(boilerplateData);
  var l = boilerplateTree.links(n);

  // reset the testsuite node position
  setTestsuitePosition(n);

  // save the new position of the source
  var nodeSource = {x: xPosition(source), y: yPosition(source)};

  // use this diagonal to collapse the line
  var exitDiagonal = d3.svg.diagonal()
      .projection(projectionFunc)
      .source({x: bezierXSource(source), y: bezierYSource(source)})
      .target({x: bezierXSource(source), y: bezierYSource(source)});

  var lines = svg.selectAll("path").data(l, pathKeyFunc);

  // update links
  lines.exit()
    .transition()
    .duration(duration)
    .attr("d", exitDiagonal)
    .remove();

  lines.transition()
    .duration(duration)
    .attr({
      d: diagonal,
      // need to set the stroke and stroke width to insure straight lines
      // appear.  looks like default bezier uses the fill property only to
      // show lines
      class: edgeClassFunc
    });

  // update nodes
  var node = svg.selectAll("g")
      .data(n, nodeKeyFunc);

  // transition exiting nodes
  var nodeExit = node.exit()
      .transition()
      .duration(duration)
      .attr("transform",  "translate(" + nodeSource.x + "," + nodeSource.y + ")")
      .remove();

  // shrink labels
  nodeExit.selectAll("foreignObject")
    .attr("width", 0);

  // shrink cirlces
  nodeExit.selectAll("circle")
    .attr("r", 0.001);

  // transition nodes
  node.transition()
    .duration(duration)
    .attr("transform", function(d) {return "translate(" + xPosition(d) + "," + yPosition(d) + ")";})

  node.selectAll("circle")
    .attr("r", nodeRadius);
}

function expand(source) {
  var type = source.type;
  // expand root, testsuites or modules
  if (type != "test"){
    // check the cache
    var k = source.uuid;  // uuid is cache key
    if (boilerplateCache.hasOwnProperty(k)) {
      // pull children from cache and clear the cache entry
      source.children = boilerplateCache[k];
      delete boilerplateCache[k];
      expandNode(source);
    } else {
      var entityID = source.uuid;
      routeMap[type](entityID, source);
    }
  }
}

// add nodes and update
function expandNode(source) {
  // save the old position of source node
  var nodeSource = {x: xPosition(source), y: yPosition(source)};
  var nodeBezier = {x: source.x, y: source.y};

  var n = boilerplateTree(boilerplateData);
  var l = boilerplateTree.links(n);

  // reset testsuite nodes
  setTestsuitePosition(n);

  // use this diagonal to collapse the line
  var enterDiagonal = d3.svg.diagonal()
      .projection(projectionFunc)
      .source({x: bezierXSource(nodeBezier), y: bezierYSource(nodeBezier)})
      .target({x: bezierXSource(nodeBezier), y: bezierYSource(nodeBezier)});

  // add new nodes
  var node = svg.selectAll("g")
      .data(n, nodeKeyFunc);

  // add our container element
  var nodeEnter = node.enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function(d){
        return "translate(" + nodeSource.x + "," + nodeSource.y + ")";
      })
      .on("click", nodeClickFunc);

  // add nodes
  nodeEnter.append("circle")
    .attr("r", nodeRadius)
    .attr("class", circleClassFunc);

  // add labels
  nodeEnter.append("foreignObject")
    .attr("width", labelWidth)
    .attr("height", labelHeight)
    .attr("y", labelYPosFunc)
    .attr("x", labelXPosFunc)
    .append("xhtml:body")
    .html(labelTextFunc);

  // transition labels
  /*
    node.selectAll("foreignObject")
    .attr("width", 0)
    .transition()
    .duration(duration)
    .attr("width", labelWidth);
  */

  node.transition()
    .duration(duration)
    .attr("transform", function(d){
      return "translate(" + xPosition(d) + "," + yPosition(d) + ")";
    });

  // add new links
  var link = svg.selectAll("path").data(l, pathKeyFunc);

  link.enter()
    .append("path")
    .attr("d", enterDiagonal)
    .attr("class", edgeClassFunc)
    .on("click", edgeClickFunc);

  link.transition()
    .duration(duration)
    .attr("d", diagonal)
    .attr("class", edgeClassFunc);
}

// initialize the page on load
function boilerplateActivate(){
  // get all the testsuites in boilerplate
  routeMap.loadAllTestsuites(boilerplateStart);
}

function boilerplateStart(testsuites){
  // add testsuites as children of the boilerplate tree
  boilerplateData.children = testsuites;

  // initialize the boilerplate tree
  boilerplateTree = d3.layout.tree(boilerplateData);
  var nodes = boilerplateTree(boilerplateData);
  var links = boilerplateTree.links(nodes);

  // reset the starting position of testsuite nodes
  setTestsuitePosition(nodes);

  // draw the nodes

  var node = svg.selectAll("g.node")
      .data(nodes, nodeKeyFunc);

  var nodeEnter = node.enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function(d){return "translate(" + xPosition(d) + "," + yPosition(d) + ")";})
      .on("click", nodeClickFunc);

  nodeEnter.append("circle")
    .attr("r", nodeRadius)
    .attr("class", circleClassFunc);

  // add labels
  nodeEnter.append("foreignObject")
    .attr("width", labelWidth)
    .attr("height", labelHeight)
    .attr("y", labelYPosFunc)
    .attr("x", labelXPosFunc)
    .append("xhtml:body")
    .html(labelTextFunc);


  // draw the links
  svg.selectAll("path")
    .data(links, pathKeyFunc)
    .enter()
    .append("path")
    .attr({
      d: diagonal,
      // need to set the stroke and stroke width to insure straight lines
      // appear.  looks like default bezier uses the fill property only to
      // show lines
      class: edgeClassFunc
    })
    .on("click", edgeClickFunc);

}

boilerplateActivate();

function loadMockTestsuites(callback) {
  // get array of children id's
  var childIds = entityChildren["a1"];
  // lookup children
  var childArr = childIds.map(function(currentValue, idx, arr) {
    return entityDetails[currentValue];
  });

  callback(childArr);
}

// Mock Data Access Functions
function loadMockEntities(suiteId, source) {
  // get array of children id's
  var childIds = entityChildren[suiteId];
  // lookup children
  var childArr = childIds.map(function(currentValue, idx, arr) {
    return entityDetails[currentValue];
  });
  // set source's children and expand
  source.children = childArr;
  expandNode(source);
}

function loadMockCriteria(testId) {
  var childIds = entityChildren[testId];
  var childArr =  childIds.map(function(currentValue, idx, arr) {
    return entityDetails[currentValue];
  });
  criteriaCache[testId] = childArr;
  displayCriteria(childArr);
}
