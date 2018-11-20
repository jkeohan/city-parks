  // HELPER FUNCTIONS
  //getData();
  // function getData() {
  //   let url =
  //     "https://raw.githubusercontent.com/jkeohan/D3-Tutorials/master/Mapping/nyc.json";
  //   //
  //   let storage = localStorage.getItem("nyc");
  //   if (storage) {
  //     //console.log("if: ", storage);
  //     data = JSON.parse(storage);
  //     render(data);
  //     drawParks(data)
  //   } else {
  //     d3.json(url).then(data => {
  //       localStorage.setItem("nyc", JSON.stringify(data));
  //       render(data);
  //       drawParks(data)
  //     });
  //   }
  // }

  function toolTip(d) {
    //console.log(d.value.avg)
    let top = event.pageY;
    let left = event.pageX;
    let tooltip = d3.select('.tooltip')
    let title = d3.select('.title').text(d.key)
    let avg = d3.select('.avg').text(`Avg. Overall Rating: ${Math.floor(d.value.avg)}/100`)
    tooltip
      .style('top', (top + 20) + 'px')
      .style('left', left + 'px')
      .style('opacity',1)
  }

  function removeToolTip() {
    let tooltip = d3.select('.tooltip')
    tooltip.style('opacity',0)
  }

  function toolTipBarCircle(d){
    console.log('this is d: ', d)
    let top = event.pageY;
    let left = event.pageX;
    let tooltip = d3.select('.tooltipBar')
    let title = d3.select('.tooltipBar .title').text(d.Name)
    let neighborhood = d3.select('.neighborhood').text(`${d.Neighborhood}, ${d['Table Name']}`)
    let avg = d3.select('.tooltipBar .avg').text(elem => `Overall: ${d.Overall}/100`)
    tooltip
      .style('top', (top + 20) + 'px')
      .style('left', left + 'px')
      .style('opacity',1)
      .style('display','block')

    
    // let barText = d3.selectAll('.barText').nodes().filter( elem => { 
    //     return elem.innerHTML == d['Neighborhood']
    // })
    // d3.select(barText[0])

  }

  function removeToolTipBar() {

    //console.log('inside removeToolTipBar: ', this)
    let tooltipBar = d3.select('.tooltipBar')
    let tooltip = d3.select('.tooltip')
    tooltip.style('opacity',0)
    tooltipBar.style('opacity',0).style('display','none')
    
  }

  let circleActive = false;
  function updateInfo(d){
    let parkImage =  d3.select('#image')
    let imageTitle  = d3.select('#title')
    console.log('clicked', d, this)
    if(!circleActive) {
      let className = d3.select(this).attr('class').split(' ')[1]
      d3.selectAll('.parks').transition().duration(500).style('opacity',0)
      d3.selectAll(`.${className}`).transition().duration(500).style('opacity',1)
        .attr('stroke-width',2)
      parkImage.style('background-image', `url(${d.URL})`)
      imageTitle.html(d.Name)
    } else {
      d3.selectAll('.parks').transition().duration(500)
        .style('opacity',1)
        .attr('stroke','white').attr('stroke-width',1)
    }
    circleActive = !circleActive
  }




