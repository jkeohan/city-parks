  function rectToolTip(d) {
    console.log('this is event: ', event)
    let top = event.offsetY;
    let left = event.offsetX;
    let tooltip = d3.select('.rectToolTip')
    let title = d3.select('.title').text(d.key)
    let avg = d3.select('.avg').text(`Avg. Overall Rating: ${Math.floor(d.value.avg)}/100`)
    tooltip
      .style('top', (top + 20) + 'px')
      .style('left', left + 'px')
      .style('opacity',1)
      .style('display','block')
  }

  function removeRectToolTip() {
    let tooltip = d3.select('.rectToolTip')
    tooltip.style('opacity',0)
    .style('display','none')
  }

  function circleToolTip(d){
    console.log('this is circleToolTip d: ', d)
     let top = event.offsetY;
    let left = event.offsetX;
    let tooltip = d3.select('.circleToolTip')
    let title = d3.select('.circleToolTip .title').text(d.Name)
    let neighborhood = d3.select('.neighborhood').text(`${d.Neighborhood}, ${d['Table Name']}`)
    let avg = d3.select('.circleToolTip .avg').text(elem => `Overall: ${d.Overall}/100`)
    tooltip
      .style('top', (top) + 'px')
      .style('left', left + 'px')
      .style('opacity',1)
      .style('display','block')
  }

  function removeCircleToolTip() {
    let tooltipBar = d3.select('.circleToolTip')
    let tooltip = d3.select('.circleToolTip')
    tooltip.style('opacity',0)
    tooltipBar.style('opacity',0).style('display','none')
    
  }







