  let circleActive = false;

  function updateInfo(d,clasName){
    let parkImage =  d3.select('#image')
    let imageTitle  = d3.select('#title')
    let circles = d3.selectAll('.parks')
    console.log('circleActive is: ', circleActive, d)
    if(!circleActive || isInputActive) {
      console.log(1)
      circles.transition().duration(500).style('opacity',0)
      d3.select(`.park${d.id}`)
        .transition().duration(500).style('opacity',1)
        parkImage.style('background-image', `url(${d.URL})`)
        imageTitle.html(d.Name)

      d3.selectAll('.rect-circle').transition().duration(500).style('opacity',.3)
      d3.selectAll(`.rect-circle.park${d.id}`).transition().duration(500).style('opacity',1)

      d3.selectAll('.neighborhoods rect').transition().duration(500).style('opacity',.3)
      circleActive = true

    } else if(activeLegend && isBoroughActive) {
      console.log(2, boroughChoice, circleActive)
      circles.transition().duration(500).style('opacity', d => {
        return  d['Overall court grouping'] == activeLegend && d['Borough'] == boroughChoice
        ? 1 : 0 
      })

        d3.select('#court input').attr('value','')
        circleActive = false
    }
     else if(activeLegend) {
      console.log(3, activeLegend)
      circles.transition().duration(500).style('opacity', d => {
        return  d['Overall court grouping'] == activeLegend ? 1 : 0 
      })
        d3.select('#court input').attr('value','')
      circleActive = false
    }
     else if(circleActive) {
      console.log(3, activeLegend)
      circles.transition().duration(500).style('opacity', 1)
      d3.select('#court input').attr('value','')
      circleActive = false
    }
   
  }
