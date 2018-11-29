  let margin = { top: 20, left: 10 };
  let main = d3.select('main').node()
  let barChartContainer = d3.select('#chart').node()
  let mainWidth = barChartContainer.clientWidth
  let mainHeight = main.clientHeight

  //console.log(data);
  let yScale = d3
    .scaleBand()
    //.domain(data.map((d, i) => i))
    .range([0, 10000 - margin.top])
    .padding(0.2);

  let xScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0,660 - margin.left]);

  let xAxis = g =>
    g.attr("transform", "translate(210,0)")
      .call(d3.axisBottom(xScale))
      .call(g => {
        g.select(".domain").remove();
      });

  let svg = d3.select("#chart").append("svg");
  let gBottom = svg.append("g").attr("transform", "translate(10,0)").attr('class','bottom')
  ////
  let svgAxis = d3.select('#axis').append('svg')
    .attr('width', '100%').attr('height', 20)
  let gScale2 = svgAxis.append('g').style('font-size', 14)
  gScale2.call(xAxis)
  ////
  // let gScale = gBottom.append("g").attr("class", "gScale");

  // gScale.call(xAxis);

function renderBarChart(data) {
  if(!allParks.length) {
    allParks = data
    yScale.domain(allParks.map((d, i) => i))
  }
  
  data = data.sort((a, b) => d3.descending(+a.Overall, +b.Overall));
  let n = d3.nest().key( d => d.Neighborhood)
    .rollup( l => ({
      'parks': l, 
      'total': d3.sum(l, d =>  d.Overall),  
      'avg': d3.mean(l, d =>  d.Overall),
      'borough': l[0].Borough
    })).entries(data)
    console.log('this is n: ', n)

  let height = n.length * 33
  svg.style('height', `${height}px`)
  n.sort( (a,b) => { return d3.descending(a.value.avg, b.value.avg)})
  let neighborhoods = gBottom.selectAll('g .neighborhoods').data(n, d => d.key)
  
  let neighborhood = neighborhoods.enter().append('g').attr('class', d => 'neighborhoods')
    .attr('transform', (d,i) => `translate(0,${yScale(i)})`)
  
  neighborhood.append('text')
    .text(d => d.key)
    .attr("dy", "1em")
    .attr('class', d => { return `barText ${d.key}`})

  neighborhood.append('rect')
    .attr("x", 200)
    .attr("width", d => xScale(d.value.total/d.value.parks.length))
    .attr("height", yScale.bandwidth())
    .style("fill", "ccc")
    .attr('class', d => `${d.key}`)
    .on('mousemove', d => rectToolTip(d))
    // .on('mouseout', removeRectToolTip)

  neighborhood.selectAll('circle').data(d => d.value.parks)
    .enter().append('circle')
    .attr("cx", d => xScale(+d.Overall) + 200)
    .attr("cy", (d, i) => {
      let mid = yScale.bandwidth() / 2;
      return mid;
    })
    .attr("r", 5)
    //.style('fill','rgb(90, 85, 85)')
    .attr('fill', d =>  legend(d['Overall court grouping']))
    .attr('stroke','black')
    .attr('class', (d,i) => `rect-circle parks park${d.id}`)
    .on('click',updateInfo)
    .on('mouseover', circleToolTip)
    .on('mouseout', removeCircleToolTip)

  neighborhoods
    .transition().duration(1000)
    .attr('transform', (d,i) => `translate(0,${yScale(i)})`)

  neighborhoods.exit().remove()


}

