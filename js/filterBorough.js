let select = d3.select('#boroughs')
select.on('change', handleOnSelect)

let isBoroughActive = false;
let boroughChoice = ''
  
function handleOnSelect(){
	input.attr('value', '')
	let borough = event.target.value
	if(borough == 'all') {
	  boroughChoice = ''
	  renderBarChart(allParks)
	  renderTopParks(allParks)
	  isBoroughActive = false
	  filterCircles(activeLegend,false)

	} else {
	  boroughChoice = borough
	  filteredParks = allParks.filter( d => d['Borough'] == borough)
	  renderBarChart(filteredParks)
	  renderTopParks(filteredParks)
	  isBoroughActive = true
	  filterCircles(activeLegend,true)
	}
}

/*
ISSUE: unable to trigger even using form submit
RESOLUTION: change submit to change

ISSUE: Loosing the context of this going from ('click', functionName) to 
	   ('click', function() {} ) or ('click', () => { functionName() })
RESOLUTION: 

HELPFUL LINKS:
https://bl.ocks.org/ProQuestionAsker/8382f70af7f4a7355827c6dc4ee8817d
https://codepen.io/tarsusi/pen/reovOV?editors=0010
*/