// FIND A COURT
let input = d3.select('#court input')
input.on('click', handleOnInputClick)

let isInputActive = false
let body = d3.select('body').on('click', resetHandleOnInputClick)
function resetHandleOnInputClick(){
	console.log('inside resetHandleOnInputClick')
	if(isInputActive) {
		d3.select('#parkChoices').style('display','none')
		isInputActive = false
	}
}

// USED FOR CLICKING IN THE INPUT BOX
function handleOnInputClick(){
  event.stopPropagation()
  let parkChoices = d3.select('#parkChoices')
  	.style('display', () => isInputActive ? 'none' : 'block')
  if(!isInputActive) {
	  if(!filteredParks.length) {
	  	inputListItems(allParkData)	  			
	  } else {
	  	inputListItems(filteredParks)
	  }
	}
  else {
  	// DO WHAT? 
  }

  isInputActive = !isInputActive
}
// USED FOR CLICKING ON ITEM IN INPUT LIST
function handleOnInputChange(choice){
	input.attr('value', choice.Name)
	updateInfo(choice)
}
// USED TO BUILD OUT THE LIST OF ITEMS
function inputListItems(parks){
	//console.log('this is inputListItems - isInputActive: ', isInputActive )
	parks = parks.sort( (a,b) => d3.ascending(a.Name,b.Name))
	let parkChoices = d3.select('#parkChoices')
  		.selectAll('.parkChoice').data(parks, d => d.Name)

  	parkChoices.enter().append('div')
  	 .attr('class', (d,i) => `parkChoice park${d.id}`)
  	 .html(d => d.Name).data(filteredParks)

  	parkChoices.exit().remove()

  	d3.selectAll('.parkChoice').on('click', handleOnInputChange)
}
