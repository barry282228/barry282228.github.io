var width = 960,
  height = 450,
  margin = 30,
  color = d3.scale.category10(),
  n = d3.format(",d"),
  p = d3.format("%"),

  data = [
    { sex: "INTC", state: "半導體", value: 59.85 },
    { sex: "QCOM", state: "半導體", value: 88.23 },
    { sex: "TSM", state: "半導體", value: 58.1 },
    { sex: "JNJ", state: "生物製藥", value: 145.87 },
    { sex: "MRK", state: "生物製藥", value: 90.95 },
    { sex: "PFE", state: "生物製藥", value: 39.18 },
    { sex: "BAC", state: "金融銀行", value: 35.22 },
    { sex: "GS", state: "金融銀行", value: 229.93 },
    { sex: "JPM", state: "金融銀行", value: 139.4 },
    { sex: "AAL", state: "航空", value: 28.68 },
    { sex: "DAL", state: "航空", value: 58.48 },
    { sex: "UAL", state: "航空", value: 88.90 },
    { sex: "Adobe", state: "軟體開發", value: 329.81 },
    { sex: "Microsoft", state: "軟體開發", value: 157.7 },
    { sex: "Oracle", state: "軟體開發", value: 52.98 },
    { sex: "T", state: "通訊電信", value: 39.08 },
    { sex: "TMUS", state: "通訊電信", value: 78.42 },
    { sex: "VZ", state: "通訊電信", value: 61.4 },
    { sex: "CMCSA", state: "傳統媒體", value: 44.97 },
    { sex: "DIS", state: "傳統媒體", value: 144.63 },
    { sex: "FB", state: "傳統媒體", value: 205.25 },
    { sex: "CVX", state: "塑化石油", value: 120.51 },
    { sex: "TREX", state: "塑化石油", value: 89.88 },
    { sex: "WST", state: "塑化石油", value: 150.33 },
    { sex: "AAPL", state: "網路", value: 293.65 },
    { sex: "AMZN", state: "網路", value: 1847.84 },
    { sex: "GOOG", state: "網路", value: 1337.02 }
  ];

  data2 = [
    { sex: "INTC", state: "半導體", value: 63.93 },
    { sex: "QCOM", state: "半導體", value: 85.31 },
    { sex: "TSM", state: "半導體", value: 53.94 },
    { sex: "JNJ", state: "生物製藥", value: 148.87 },
    { sex: "MRK", state: "生物製藥", value: 85.44 },
    { sex: "PFE", state: "生物製藥", value: 37.24 },
    { sex: "BAC", state: "金融銀行", value: 32.83 },
    { sex: "GS", state: "金融銀行", value: 237.75 },
    { sex: "JPM", state: "金融銀行", value: 132.36 },
    { sex: "AAL", state: "航空", value: 26.84 },
    { sex: "DAL", state: "航空", value:  55.74},
    { sex: "UAL", state: "航空", value: 74.8 },
    { sex: "Adobe", state: "軟體開發", value: 351.14 },
    { sex: "Microsoft", state: "軟體開發", value: 170.23 },
    { sex: "Oracle", state: "軟體開發", value: 52.45 },
    { sex: "T", state: "通訊電信", value: 37.62 },
    { sex: "TMUS", state: "通訊電信", value: 79.19 },
    { sex: "VZ", state: "通訊電信", value: 59.44 },
    { sex: "CMCSA", state: "傳統媒體", value: 43.19 },
    { sex: "DIS", state: "傳統媒體", value: 138.31 },
    { sex: "FB", state: "傳統媒體", value: 201.91 },
    { sex: "CVX", state: "塑化石油", value: 107.14 },
    { sex: "TREX", state: "塑化石油", value: 98.24 },
    { sex: "WST", state: "塑化石油", value: 155.95 },
    { sex: "AAPL", state: "網路", value: 309.51 },
    { sex: "AMZN", state: "網路", value: 2008.72 },
    { sex: "GOOG", state: "網路", value: 1434.23 }
  ];

  data3 = [
    { sex: "INTC", state: "半導體", value: 55.25 },
    { sex: "QCOM", state: "半導體", value: 78.3 },
    { sex: "TSM", state: "半導體", value: 53.84 },
    { sex: "JNJ", state: "生物製藥", value: 134.48 },
    { sex: "MRK", state: "生物製藥", value: 76.56 },
    { sex: "PFE", state: "生物製藥", value: 33.42 },
    { sex: "BAC", state: "金融銀行", value: 28.5 },
    { sex: "GS", state: "金融銀行", value: 200.77 },
    { sex: "JPM", state: "金融銀行", value: 116.11 },
    { sex: "AAL", state: "航空", value: 19.05 },
    { sex: "DAL", state: "航空", value: 46.13 },
    { sex: "UAL", state: "航空", value: 61.59 },
    { sex: "Adobe", state: "軟體開發", value: 345.12 },
    { sex: "Microsoft", state: "軟體開發", value: 162.01 },
    { sex: "Oracle", state: "軟體開發", value: 49.46 },
    { sex: "T", state: "通訊電信", value: 35.22 },
    { sex: "TMUS", state: "通訊電信", value: 90.16 },
    { sex: "VZ", state: "通訊電信", value: 54.16 },
    { sex: "CMCSA", state: "傳統媒體", value: 40.43 },
    { sex: "DIS", state: "傳統媒體", value: 117.65 },
    { sex: "FB", state: "傳統媒體", value: 192.47 },
    { sex: "CVX", state: "塑化石油", value: 93.34 },
    { sex: "TREX", state: "塑化石油", value: 95.65 },
    { sex: "WST", state: "塑化石油", value: 150.56 },
    { sex: "AAPL", state: "網路", value: 273.36 },
    { sex: "AMZN", state: "網路", value: 1883.75 },
    { sex: "GOOG", state: "網路", value: 1339.33 }
  ];

  data4 = [
    { sex: "INTC", state: "半導體", value: 54.12 },
    { sex: "QCOM", state: "半導體", value: 67.65 },
    { sex: "TSM", state: "半導體", value: 47.79 },
    { sex: "JNJ", state: "生物製藥", value: 131.13 },
    { sex: "MRK", state: "生物製藥", value: 76.94 },
    { sex: "PFE", state: "生物製藥", value: 32.64 },
    { sex: "BAC", state: "金融銀行", value: 21.23 },
    { sex: "GS", state: "金融銀行", value: 154.59 },
    { sex: "JPM", state: "金融銀行", value: 90.3 },
    { sex: "AAL", state: "航空", value: 12.19 },
    { sex: "DAL", state: "航空", value: 28.53 },
    { sex: "UAL", state: "航空", value: 31.55 },
    { sex: "Adobe", state: "軟體開發", value: 318.24 },
    { sex: "Microsoft", state: "軟體開發", value: 157.71 },
    { sex: "Oracle", state: "軟體開發", value: 48.33 },
    { sex: "T", state: "通訊電信", value: 29.15 },
    { sex: "TMUS", state: "通訊電信", value: 83.9 },
    { sex: "VZ", state: "通訊電信", value: 53.73 },
    { sex: "CMCSA", state: "傳統媒體", value: 34.38 },
    { sex: "DIS", state: "傳統媒體", value: 96.6 },
    { sex: "FB", state: "傳統媒體", value: 166.8 },
    { sex: "CVX", state: "塑化石油", value: 72.46 },
    { sex: "TREX", state: "塑化石油", value: 80.14 },
    { sex: "WST", state: "塑化石油", value: 152.25 },
    { sex: "AAPL", state: "網路", value: 254.29 },
    { sex: "AMZN", state: "網路", value: 1949.72 },
    { sex: "GOOG", state: "網路", value: 1162.18 }
  ];

  data5 = [
    { sex: "INTC", state: "半導體", value: 59.98 },
    { sex: "QCOM", state: "半導體", value: 78.67 },
    { sex: "TSM", state: "半導體", value: 53.13 },
    { sex: "JNJ", state: "生物製藥", value: 150.54 },
    { sex: "MRK", state: "生物製藥", value: 79.34 },
    { sex: "PFE", state: "生物製藥", value: 38.36 },
    { sex: "BAC", state: "金融銀行", value: 24.5 },
    { sex: "GS", state: "金融銀行", value: 183.42 },
    { sex: "JPM", state: "金融銀行", value: 95.76 },
    { sex: "AAL", state: "航空", value: 12.01 },
    { sex: "DAL", state: "航空", value: 25.91 },
    { sex: "UAL", state: "航空", value: 29.58 },
    { sex: "Adobe", state: "軟體開發", value: 343.84 },
    { sex: "Microsoft", state: "軟體開發", value: 179.21 },
    { sex: "Oracle", state: "軟體開發", value: 52.97 },
    { sex: "T", state: "通訊電信", value: 30.47 },
    { sex: "TMUS", state: "通訊電信", value: 87.8 },
    { sex: "VZ", state: "通訊電信", value: 57.45 },
    { sex: "CMCSA", state: "傳統媒體", value: 37.63 },
    { sex: "DIS", state: "傳統媒體", value: 108.15 },
    { sex: "FB", state: "傳統媒體", value: 204.71 },
    { sex: "CVX", state: "塑化石油", value: 92 },
    { sex: "TREX", state: "塑化石油", value: 95.22 },
    { sex: "WST", state: "塑化石油", value: 189.26 },
    { sex: "AAPL", state: "網路", value: 293.8 },
    { sex: "AMZN", state: "網路", value: 2474 },
    { sex: "GOOG", state: "網路", value: 1348.66 }
  ];

  

var nest = d3.nest()
  .key(function(d) {
    return d.state;
  })
  .key(function(d) {
    return d.sex;
  });

var treemap = d3.layout.treemap()
  .mode("slice-dice")
  //.padding(function(d) { return d.depth > 1 ? 2 : 0; })
  .size([width - 3 * margin, height - 2 * margin])
  .children(function(d) {
    return d.values;
  })
  .round(true)
  .sort(null);

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + 2 * margin + "," + margin + ")")
  .datum({
    values: nest.entries(data)
  })
  .call(chart);

console.log(nest.entries(data));

//svg.append("g")
//  .attr("class", "x axis")
//  .attr("transform", "translate(0," + treemap.size()[1] + ")")
//  .call(d3.svg.axis().scale(d3.scale.linear().range([0, treemap.size()[0]])).tickFormat(d3.format("%")));

//svg.append("g")
//  .attr("class", "y axis")
//  .call(d3.svg.axis().scale(d3.scale.linear().range([treemap.size()[1], 0])).tickFormat(d3.format("%")).orient("left"));

function chart(selection) {
  selection.each(function() {
    var cell = d3.select(this).selectAll("g.cell")
      .data(treemap.nodes);
    var cellEnter = cell.enter().append("g")
      .attr("class", "cell");
    var cellUpdate = d3.transition(cell)
      .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
    d3.transition(cell.exit()).remove();

    cellEnter.filter(function(d) {
        return d.depth > 2;
      }).append("rect")
      .style("fill", function(d) {
        return d.children ? null : color(d.state);
      });
    cellUpdate.select("rect")
      .attr("width", function(d) {
        return d.dx;
      })
      .attr("height", function(d) {
        return d.dy;
      })

    cellEnter.append("title")
      .text(function(d) {
        return d.children ? null : title(d);
      });
  });
}

function title(d) {
  return d.state + ": " + d.parent.key + ": " + d.value;
}

function transition() {
  svg.datum({
      values: nest.entries(data)
    })
    .transition()
//    .duration(10)
    .call(chart);
}

function transition1() {
  svg.datum({
      values: nest.entries(data2)
    })
    .transition()
    .duration(1000)
    .call(chart);
}

function transition2() {
  svg.datum({
      values: nest.entries(data3)
    })
    .transition()
    .duration(1000)
    .call(chart);
}

function transition3() {
  svg.datum({
      values: nest.entries(data4)
    })
    .transition()
    .duration(1000)
    .call(chart);
}

function transition4() {
  svg.datum({
      values: nest.entries(data5)
    })
    .transition()
    .duration(1000)
    .call(chart);
}