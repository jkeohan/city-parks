let input = d3.select('#court input')
// input.on('change', filterName)

let select = d3.select('#borough')
select.on('change', handleOnSelect)

  let isBoroughActive = false;
  let boroughChoice = ''
  
  function handleOnSelect(){
  	console.log('this is allParks: ', allParks)
  	let borough = event.target.value
    let circles = d3.selectAll('.parks')
    if(borough == 'all') {
      circles.transition().duration(500).style('opacity', 1)
      boroughChoice = 'all'
      renderBarChart(allParks)
    } else {
      circles.transition().duration(500).style('opacity', d => {
        return d['Borough'] == borough ? 1 : 0
      })
      boroughChoice = borough
      filteredParks = allParks.filter( d => d['Borough'] == borough)
      renderBarChart(filteredParks)
    }
    isBoroughActive = !isBoroughActive

    // NEED TO FILTER BAR CHART
    //console.log('this is allParks from handleOnSelect: ', allParks)
    
    //console.log('this is filteredParks: ',filteredParks) 
    


    // NEED TO FILTER MUST SEE/STAY AWAY
    //console.log('this is allParks: ', allParks)
  }




/*
ISSUE: unable to trigger even using form submit
RESOLUTION: change submit to change

ISSUE:  Cannot read property 'length' of undefined
		Occurred when using .merge(n)
RESOLUTION: 

HELPFUL LINKS:
https://bl.ocks.org/ProQuestionAsker/8382f70af7f4a7355827c6dc4ee8817d
https://codepen.io/tarsusi/pen/reovOV?editors=0010
*/