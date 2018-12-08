  // LEGEND
  renderLegend()

  function renderLegend(data){
    // let legend = d3.scaleOrdinal()
    // .domain(['Very Good', 'Mediocre', 'Poor']) 
    // //.range(['#3e85b5','#807d7d', '#e78410'])
    // .range(['#3e85b5','#d9d916', '#e78410'])

  let gLegendsContainer = container.append('g')
    .attr('transform','translate(20,20)')

  let gLegends = gLegendsContainer.selectAll('g').data(legend.domain())
    .enter().append('g')
    .attr('transform',(d,i) => `translate(0,${i*20})`)
    .attr('class', d => `legend ${d}`)
    .on('click', d => {
      filterCircles(d)
    }) // filterCircles is in legend.js

  gLegends.append('rect')
    .attr('width', 13).attr('height', 13)
    .attr('fill', d => legend(d))
    .style('stroke','none')

  gLegends.append('text')
    .attr('x', 20).text(d => d)
    .attr('dy','1em').attr('stroke','#575758').attr('fill','#575758')
    .style('font-size',10).style('font-family', 'sans-serif').style('font-weight',100)
    .style('letter-spacing', '1px')
  }