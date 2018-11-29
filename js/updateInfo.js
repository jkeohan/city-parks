  let circleActive = false;

  function updateInfo(d,clasName){
    //console.log('updateInfo - isInputActive: ', isInputActive)
    d3.selectAll('.legend').style('opacity', 1)
    let parkImage =  d3.select('#image')
    let imageTitle  = d3.select('#title')
    console.log('circleActive is: ', circleActive, d)
    if(!circleActive || isInputActive) {
      d3.selectAll('.parks').transition().duration(500).style('opacity',0)
      d3.selectAll(`.park${d.id}`)
        // .attr('stroke','rgba(230,230,230, .8)')
        .transition().duration(500).style('opacity',1)
        // .attr('r',10)
        // .attr('stroke-width',10)
        parkImage.style('background-image', `url(${d.URL})`)
      imageTitle.html(d.Name)

      d3.selectAll('.rect-circle').transition().duration(500).style('opacity',.3)
      d3.selectAll(`.rect-circle.park${d.id}`).transition().duration(500).style('opacity',1)
        // .attr('stroke-width',2)

      d3.selectAll('.neighborhoods rect').transition().duration(500).style('opacity',.3)

    } else {
      d3.selectAll('.parks').transition().duration(500)
        .style('opacity',1)
        // .attr('stroke-width',1)
        // .attr('stroke','black')
        // .attr('r',4)
        d3.select('#court input').attr('value','')
        d3.selectAll('.neighborhoods rect').transition().duration(500).style('opacity',1)
    }
    circleActive = !circleActive
  }
