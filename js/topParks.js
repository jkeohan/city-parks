let topUl = d3.select('#left-top ul')
let bottomUl = d3.select('#left-bottom ul')

function renderTopParks(data){

	let topParksArr = data.slice(0,10)

	d3.selectAll('.must-see').remove()

	let topParks = topUl.selectAll('li .must-see').data(topParksArr, d => d.Name)
	let topULis = topParks.enter().append('li').attr('class', 'must-see')

	topULis.append('span').attr('class', 'parkName').html(d => d.Name)
	topULis.append('span').attr('class', 'rating').html(d => d.Overall)

	d3.selectAll('.stay-away').remove()

	let bottomParksArr = data.slice(data.length-10)
	let bottomParks = bottomUl.selectAll('li').data(bottomParksArr, d => d.Name)
	let bottomULis = bottomParks.enter().append('li').attr('class', 'stay-away')

	bottomULis.append('span').attr('class', 'parkName').html(d => d.Name)
	bottomULis.append('span').attr('class', 'rating').html(d => d.Overall)
}



