  let margin = { top: 20, left: 10 };
  let main = d3.select('main').node()
  let barChartContainer = d3.select('#chart').node()
  let mainWidth = barChartContainer.clientWidth
  let mainHeight = main.clientHeight

  //console.log(data);
  let yScale = d3
    .scaleBand()
    .range([0, 10000 - margin.top])
    .padding(0.2);

  let xScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0,660 - margin.left]);

  let xAxis = g =>
    g
      .attr("transform", "translate(200,-20)")
      .call(d3.axisBottom(xScale))
      .call(g => {
        g.select(".domain").remove();
      });

  let svg = d3.select("#chart").append("svg");
  let gBottom = svg.append("g").attr("transform", "translate(10,20)");
  let gText = gBottom
    .append("g")
    .attr("transform", "translate(0,0)")
    .attr("class", "gText");
  let gBar = gBottom
    .append("g")
    .attr("transform", "translate(200,0)")
    .attr("class", "gBar");
  let gScale = gBottom
    .append("g")
    //.attr('transform', 'translate(200,-20)')
    .attr("class", "gScale");

  gScale.call(xAxis);

function renderBarChart(data,filter) {
  if(!allParks.length) {allParks = data}
  
  data = data.sort((a, b) => d3.descending(+a.Overall, +b.Overall));
  console.log('this is allParks from renderBarChart: ',data)
  yScale.domain(data.map((d, i) => i))
  //console.log('this is renderBarChart: ', data)
  let n = d3.nest().key( d => d.Neighborhood)
    .rollup( l => ({
      'parks': l, 
      'total': d3.sum(l, d =>  d.Overall),  
      'avg': d3.mean(l, d =>  d.Overall),
      'borough': l[0].Borough
    })).entries(data)
  
  n.sort( (a,b) => { return d3.descending(a.value.avg, b.value.avg)})
  console.log('this is n: ', n)
  let text = gText.selectAll("text").data(n, d => d.key)
  text
    .enter()
    .append("text")
    .attr("x", 0)
    .attr("y", (d, i) => yScale(i))
    //.attr("y", (d, i) => i * 34)
    .text(d => d.key)
    .attr("dy", "1em")
    .attr('class', d => {
      //console.log(d)
      return `barText ${d.key}`
    })

  text
    .transition().duration(1000)
    .attr("y", (d, i) => yScale(i))
    //.attr("y", (d, i) => i * 34)

  text.exit().remove()


  let rects = gBar.selectAll("rect").data(n);

  rects
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", (d, i) => yScale(i))
    //.attr("y", (d, i) => i * 34)
    .attr("width", d => xScale(d.value.total/d.value.parks.length))
    .attr("height", yScale.bandwidth())
    .style("fill", "ccc")
    .attr('class', d => `${d.key}`)
    .on('mousemove', d => toolTip(d))
    .on('mouseout', removeToolTipBar)

  rects
    .transition().duration(1000)
    //.attr("y", (d, i) => i * 34)
     .attr("y", (d, i) => yScale(i))
    //.attr("height", yScale.bandwidth())

  rects.exit().remove()

  let gCircle= gBar.selectAll("g.circles").data(n)
      .enter().append('g').attr('class','circles')
      .attr('transform', (d, i) => {
        let mid = yScale.bandwidth();
        let y = yScale(i);
        return `translate(0,${y})`
    })

  let circles = gCircle.selectAll('circle').data(d => d.value.parks)


  circles.enter().append("circle")
    .attr("cx", d => xScale(+d.Overall))
    .attr("cy", (d, i) => {
      let mid = yScale.bandwidth() / 2;
      return mid;
    })
    .attr("r", 5)
    //.style('fill','rgb(90, 85, 85)')
    .attr('fill', d =>  legend(d['Overall court grouping']))
    .attr('class', (d,i) => `parks park${d.id}`)
    .on('click',updateInfo)
    .on('mouseover', toolTipBarCircle)
    .on('mouseout', removeToolTipBar)

  circles
      .transition().duration(1000)
      .attr("cy", (d, i) => {
        let mid = yScale.bandwidth() / 2;
        return mid;
    })

  //circles.exti().remove()
}

