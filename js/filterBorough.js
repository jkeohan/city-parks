// FIND A COURT

// SELECT A BOROUGH
let select = d3.select('#borough')
select.on('change', handleOnSelect)

let isBoroughActive = false;
let boroughChoice = ''
  
// SELECT A BOROUGH (All, Manhattan, Brooklyn)
function handleOnSelect(){
	//console.log('this is allParks: ', allParks)
	// legendActive = false;
 //    activeLegend = ''
	//d3.selectAll('.legend').style('opacity', 1)
	input.attr('value', '')
	let borough = event.target.value
	//let circles = d3.selectAll('.parks')
	if(borough == 'all') {
	  //circles.transition().duration(500).style('opacity', 1)
	  boroughChoice = ''
	  renderBarChart(allParks)
	  renderTopParks(allParks)
	  isBoroughActive = false
	  filterCircles(activeLegend,false)

	} else {
	  // circles.transition().duration(500).style('opacity', d => {
	  //   return d['Borough'] == borough ? 1 : 0
	  // })
	  boroughChoice = borough
	  filteredParks = allParks.filter( d => d['Borough'] == borough)
	  renderBarChart(filteredParks)
	  renderTopParks(filteredParks)
	  isBoroughActive = true
	  filterCircles(activeLegend,true)
	}
}

// function handleOnSelect(){
// 	//console.log('this is allParks: ', allParks)
// 	legendActive = false;
//     activeLegend = ''
// 	d3.selectAll('.legend').style('opacity', 1)
// 	input.attr('value', '')
// 	let borough = event.target.value
// 	let circles = d3.selectAll('.parks')
// 	if(borough == 'all') {
// 	  circles.transition().duration(500).style('opacity', 1)
// 	  boroughChoice = ''
// 	  renderBarChart(allParks)
// 	  isBoroughActive = false
// 	} else {
// 	  circles.transition().duration(500).style('opacity', d => {
// 	    return d['Borough'] == borough ? 1 : 0
// 	  })
// 	  boroughChoice = borough
// 	  filteredParks = allParks.filter( d => d['Borough'] == borough)
// 	  renderBarChart(filteredParks)
// 	  renderTopParks(filteredParks)
// 	  isBoroughActive = true
// 	}
// }





/*
ISSUE: unable to trigger even using form submit
RESOLUTION: change submit to change

ISSUE:  Cannot read property 'length' of undefined
		Occurred when using .merge(n)
RESOLUTION: 

ISSUE: Loosing the context of this going from ('click', functionName) to 
	   ('click', function() {} ) or ('click', () => { functionName() })
RESOLUTION: 

HELPFUL LINKS:
https://bl.ocks.org/ProQuestionAsker/8382f70af7f4a7355827c6dc4ee8817d
https://codepen.io/tarsusi/pen/reovOV?editors=0010
*/