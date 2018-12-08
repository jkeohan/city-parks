  let legendActive = false;
  let activeLegend = ''
  
  function filterCircles(d,viaBorough){
    
    let legendOptions = d3.selectAll('.legend')
    let circles = d3.selectAll('.parks')
    let legend = d

     if(activeLegend && isBoroughActive && viaBorough) {
      console.log('first')
      circles.transition().duration(500).style('opacity', d => {
        return  d['Overall court grouping'] == legend && d['Borough'] == boroughChoice
        ? 1 : 0 
      })
    }
    else if(activeLegend && isBoroughActive && activeLegend == legend) {
      console.log('second', activeLegend, isBoroughActive)
      circles.transition().duration(500).style('opacity', d => {
            return  d['Borough'] == boroughChoice
            ? 1 : 0 })
      legendOptions.style('opacity',1)
      activeLegend = ''
    }
    else if(activeLegend && isBoroughActive){
      console.log('third', activeLegend, legend)
      circles.transition().duration(500).style('opacity', d => {
        return  d['Borough'] == boroughChoice
        ? 1 : 0 
      })
      activeLegend = ''
      legendOptions.style('opacity',1)
    }
    else if(legend && isBoroughActive) {
      console.log('fourth',activeLegend, boroughChoice)
      circles.transition().duration(500).style('opacity', d => {
        return  d['Overall court grouping'] == legend && d['Borough'] == boroughChoice
        ? 1 : 0 
      })
      activeLegend = legend
      legendOptions.style('opacity', d => {
        return d == legend ? 1 : .4
      })
    }
     else if(activeLegend == legend && isBoroughActive == false){
      console.log('5',activeLegend, boroughChoice)
       circles.transition().duration(500).style('opacity',1)
      activeLegend = ''
      legendOptions.style('opacity', 1)
    }
     else if(activeLegend && isBoroughActive == false){
       circles.transition().duration(500).style('opacity', d => {
        console.log('6', activeLegend)
        return  d['Overall court grouping'] == legend 
          ? 1 : 0 })
      activeLegend = legend
      legendOptions.style('opacity', d => {
        return d == legend ? 1 : .4
      })
    }
    else if(!activeLegend  && isBoroughActive == false){
      console.log('7', activeLegend)
      circles.transition().duration(500).style('opacity', d => {
          return  d['Overall court grouping'] == legend 
          ? 1 : 0 })
      activeLegend = legend
      legendOptions.style('opacity', d => {
        return d == legend ? 1 : .4
      })
    }
    else if(isBoroughActive) {
      console.log('8', activeLegend, isBoroughActive)
      circles.transition().duration(500).style('opacity', d => {
            return  d['Borough'] == boroughChoice
            ? 1 : 0 })
    }
    else if(activeLegend) {
      console.log('9')
      circles.transition().duration(500).style('opacity', d => {
          return  d['Overall court grouping'] == legend 
          ? 1 : 0 })
      activeLegend = legend
      legendOptions.style('opacity', d => {
        return d == legend ? 1 : .4
      })
    }
    else if(!activeLegend) {
      console.log('10')
      circles.transition().duration(500).style('opacity', d => {
          return  d['Overall court grouping'] == legend 
          ? 1 : 0 })
       activeLegend = legend
       legendOptions.style('opacity', d => {
        return d == legend ? 1 : .4
      })
    }
}




