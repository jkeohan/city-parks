  let legendActive = false;
  let activeLegend = ''
  
  /*
  The series of nested if/else statements can be refactored 
  Another way to approach this is to filter the dataset based
  on the legend and borough choice options and then update filteredParks 
  We would then pass that into filtered Circles and allow enter/update/exit
  to make the updates
  */
  function filterCircles(){
    let legendOptions = d3.selectAll('.legend')
    let circles = d3.selectAll('.parks')
    let legend = d3.select(this).node().textContent 
    console.log('this is filterCircles - isBoroughActive: ', isBoroughActive)
    console.log('this is filterCircles - boroughChoice: ', boroughChoice)
    if(legendActive) {
      if(isBoroughActive) {
        if(activeLegend == legend) {
          circles.transition().duration(500).style('opacity', d => {
            return  d['Borough'] == boroughChoice
            ? 1 : 0 })
          legendOptions.style('opacity',1)
          activeLegend = ''
          legendActive = false
          console.log('if - if - legendActive: ', legendActive)
        } else{
            circles.transition().duration(500).style('opacity', d => {
            return  d['Overall court grouping'] == legend && d['Borough'] == boroughChoice
            ? 1 : 0 })
          legendOptions.style('opacity',.4)
          d3.select(this).style('opacity',1)
          activeLegend = legend
          legendActive = true
          console.log('this is filterCircles - legend')
          }
      } else {
          console.log('borough isnt active', legend)
          circles.transition().duration(500).style('opacity', 1)
          legendOptions.style('opacity',1)
          activeLegend = ''
          legendActive = false
      }
    } else {
        console.log('first time legend is chosen')
        legendOptions.style('opacity',.4)
        d3.select(this).style('opacity',1)
        activeLegend = legend
        legendActive = true
        if(isBoroughActive) {
          circles.transition().duration(500).style('opacity', d => {
            return  d['Overall court grouping'] == legend && d['Borough'] == boroughChoice
            ? 1 : 0 })
        } else {
          circles.transition().duration(500).style('opacity', d => {
            return  d['Overall court grouping'] == legend 
            ? 1 : 0 })
      }
    }
  }


  // if(legendActive) {
  //   if(isBoroughActive) {
  //    if(activeLegend == legend){
  //     // show all circles for that borough
  //     // unfilter the legends 
  //    } else {
  //     // filter circles for chosen legend type and boroughChoice
  //     // change opacity for other legend options
  //     // update activeLegend with that value
  //     }
  //   }
  // } else {
  //     // change opacity for other legend options
  //     // change legendActive to true
  //     // update activeLegend with that value
  //   if(isBoroughActive) {
  //     // filter circles for chosen legend type and boroughChoice
  //   } else {
  //     // filter cirlces for chosen legend only
  //   }
    

  // }





