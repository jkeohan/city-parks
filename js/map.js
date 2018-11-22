  let svgBoroughs = d3.select('#map').node()
  let height = svgBoroughs.clientHeight 
  let width = svgBoroughs.clientWidth
  let container = d3.select("#map").append("svg");

  let legend = d3.scaleOrdinal()
    .domain(['Very Good', 'Mediocre', 'Poor']).range(['#3e85b5','#807d7d', '#e78410'])

  let projection = d3
    .geoMercator()
    .center([-73.93, 40.68])
    .scale(56000)
    .translate([width / 2, height / 2 + 20]);

  let path = d3.geoPath().projection(projection);

function renderMap(nyb) {
    container
      .attr("id", "boroughs")
      .selectAll(".state")
      .data(nyb.features)
      .enter()
      .append("path")
      .attr("class", function(d) {
        return d.properties.name;
      })
      .attr("d", path);
}

function renderParks(data) {
  let image1 = data[0].URL
  let title = data[0].Name
  let parkImage =  d3.select('#image')
  let imageTitle  = d3.select('#title')
  imageTitle.html(title)
  parkImage.style('background-image', `url(${image1})`)
  
  console.log('renderParks')
  let circles = container.selectAll(".parks circles").data(data)

  // PARKS RENDERED AS CIRCLES ON THE MAP
  circles.enter().append('circle')
  .attr("transform", function(d) { 
      return "translate(" + projection([+d.Lon, +d.Lat]) + ")" })
  .attr('r', 4)
  // .attr('class', d => `parks park-${d['Overall']}${d['Quality']}${d['Size']}${d['Surface']}`)
  .attr('class', (d,i) => `parks park${d.id}`)
  .attr('fill', d =>  legend(d['Overall court grouping']))
  .on('click',updateInfo)
  // LEGEND
  let gLegendsContainer = container.append('g')
    .attr('transform','translate(20,20)')

   
  let gLegends = gLegendsContainer.selectAll('g').data(legend.domain())
    .enter().append('g')
    .attr('transform',(d,i) => `translate(0,${i*20})`)
    .on('click', filterCircles)

  gLegends.append('rect')
    .attr('width', 13).attr('height', 13)
    .attr('fill', d => legend(d))
    .style('stroke','none')

  gLegends.append('text')
    .attr('x', 20).text(d => d)
    .attr('dy','1em').attr('stroke','#575758').attr('fill','#575758')
    .style('font-size',10).style('font-family', 'sans-serif').style('font-weight',100)
    .style('letter-spacing', '1px')
    

  let legendActive = false;
  let activeLegend = ''
  
  function filterCircles(){
    let circles = d3.selectAll('.parks')
    let legend = d3.select(this).node().textContent 
    if(activeLegend == legend) {
      circles.transition().duration(500).style('opacity', 1)
      activeLegend = ''
    } else {
      circles.transition().duration(500).style('opacity', d => {
        return d['Overall court grouping'] == legend ? 1 : 0
      })
      activeLegend = legend
    }
    legendActive = !legendActive
  }
}





