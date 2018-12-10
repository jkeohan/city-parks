  let filters = [{legend:''}, {borough:''},{park:''}]
  
  // user clicks legend...legend confirms borough...filters(cirlces,dropdown)
  // user clicks same legend...legend confirms borough...filters(circles,dropdown)
  // user clicks borough..borough confirms legend...filters(circles,dropdown)
  // user clicks circle...filters(cirlce, dropdown)
  // user clicks same circle...circle confirms legend and borough...filters choice(circle,dropdown)
  // user choose park from drop down...filter choice(map,rect)

  function renderFilterChoices() {
    filteredParks = allParks.filter( d => {
      if(filters[0].legend)  {
        return d['Overall court grouping'] == filters[0].legend
      }
      else {
        return d
      }
    }).filter( d => {
      if(filters[1].borough) {
        return  d['Borough'] == filters[1].borough
      } else {
        return d
      }
    }).filter( d => {
      if(filters[2].park)  {
        return d['parkId'] == filters[2].park
      }
      else {
        return d
      }
    })

    renderParks(filteredParks) 
  }

  function renderUpdatedFilterChoices(data){
    let allParks = d3.selectAll('.parks').data(data)//.enter()

    allParks.transition().duration(500).style('opacity',0)
    debugger
  }


  let circleActive = false;
  // initiated on follow: 
  //  - drop down for individual park
  //  - map or rect cirlce clicked
  // updateInfo is  being  called: 
  //  - barChart circles
  //  - renderMap circles
  //  - filterInput dropdown

  function updateInfo(d,clasName){
    console.log('this  is  legend active from updateInfo', legendActive)
    //console.log('updateInfo - isInputActive: ', isInputActive)
    d3.selectAll('.legend').style('opacity', 1)
    let parkImage =  d3.select('#image')
    let imageTitle  = d3.select('#title')
    //console.log('circleActive is: ', circleActive, d)
    if(!circleActive || isInputActive) {
      d3.selectAll('.parks').transition().duration(500).style('opacity',0)
      d3.selectAll(`.park${d.id}`)
        .transition().duration(500).style('opacity',1)
        parkImage.style('background-image', `url(${d.URL})`)
      imageTitle.html(d.Name)
      // 
      d3.selectAll('.rect-circle').transition().duration(500).style('opacity',.3)
      d3.selectAll(`.rect-circle.park${d.id}`).transition().duration(500).style('opacity',1)

      d3.selectAll('.neighborhoods rect').transition().duration(500).style('opacity',.3)

    } else {
      d3.selectAll('.parks').transition().duration(500)
        .style('opacity',1)
        d3.select('#court input').attr('value','')
        d3.selectAll('.neighborhoods rect').transition().duration(500).style('opacity',1)
    }
    circleActive = !circleActive
  }
