function renderParks(data) {
  let image1 = data[0].URL
  let title = data[0].Name
  let parkImage =  d3.select('#image')
  let imageTitle  = d3.select('#title')
  imageTitle.html(title)
  parkImage.style('background-image', `url(${image1})`)
  
  //console.log('renderParks')
  let circles = container.selectAll(".parks circles").data(data)
  // PARKS RENDERED AS CIRCLES ON THE MAP
  circles.enter().append('circle')
  .attr("transform", function(d) { 
      return "translate(" + projection([+d.Lon, +d.Lat]) + ")" 
  })
  .attr('r', 4)
  .attr('class', (d,i) => `parks park${d.id}`)
  .attr('fill', d =>  legend(d['Overall court grouping']))
  .attr('stroke','black')
  .on('click',updateInfo)
}

