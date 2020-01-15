<
body >
< script
src = "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" > < /script>

  < script >
  let
agents = [];
let resultArray = [];
let mapArray = [];
let superArray = [];

function generateCity(n, agents) {

  const generateMap = (n) => {
    var mas = [];
    for (var i = 0; i < n; i++) {
      mas[i] = [];
      for (var j = 0; j < n; j++) {
        mas[i][j] = 0;
      }
    }
    return mas;
  }

  const pushAgent = (initialMap, agentCoord) => {
    let x = agentCoord[0];
    let y = agentCoord[1];
    let superCoolMap = initialMap;
    superCoolMap[x][y] = 1;
    return superCoolMap;
  }

  let map = generateMap(n);

  const makeCity = (map, agents) => {
    for (let i = 0; i < agents.length; i++) {
      mapArray = pushAgent(map, agents[i]);
    }
  }

  console.log(makeCity(map, agents));
};

generateCity(9, [[1, 5], [2, 0], [4, 3], [8, 8]]);


var map = mapArray


for (var y = 0; y < map.length; y++) {
  for (var x = 0; x < map.length; x++) {
    if (map[y][x] > 0) {
      agents.push({"x": x, "y": y});
      console.log(agents);
    }
  }
}

for (var y = 0; y < map.length; y++) {
  for (var x = 0; x < map.length; x++) {
    var dist = 99;
    for (var i = 0; i < agents.length; i++) {
      var newdistance = mdistance(x, y, agents[i].x, agents[i].y)
      if (newdistance < dist) {
        dist = newdistance;


      }
    }

    $('body').append(dist);

    resultArray.push(dist)

    let size = map.length

    for (let i = 0; i < Math.ceil(resultArray.length / size); i++) {
      superArray[i] = resultArray.slice((i * size), (i * size) + size);
    }


  }
  $('body').append('<br>');
}

function mdistance(x1, y1, x2, y2) {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

console.log(superArray);

superArray.reduce()
maxNumber

  [[], [],]
return [x, y]

  < /script>
  < /body>