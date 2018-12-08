  let svgBoroughs = d3.select('#map').node()
  let height = svgBoroughs.clientHeight 
  let width = svgBoroughs.clientWidth
  let container = d3.select("#map #boroughs")

  let legend = d3.scaleOrdinal()
    .domain(['Very Good', 'Mediocre', 'Poor'])
    .range(['green','#FF9933', '#003399'])
    //.range(['#3e85b5','#c2c21a', '#e78410'])

  let projection = d3
    .geoMercator()
    .center([-73.93, 40.68])
    .scale(56000)
    .translate([width / 2, height / 2 + 20]);

  let path = d3.geoPath().projection(projection);

function renderMap(nyb) {
    container
      // .attr("id", "boroughs")
      .selectAll(".state")
      .data(nyb.features)
      .enter()
      .append("path")
      .attr("class", d => d.properties.name)
      .attr("d", path);
}

// function renderMap(nyb) {
//     container
//       .attr("id", "boroughs")
//       .selectAll(".state")
//       .data(topojson.feature(us, us.objects.counties).features)
//       .enter()
//       .append("path")
//       .attr("class", function(d) {
//         return d.properties.name;
//       })
//       .attr("d", path);

//     container.append("path")
//       .attr("class", "county-borders")
// }






