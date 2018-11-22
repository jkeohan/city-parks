let topUl = d3.select('#left-top ul')
let bottomUl = d3.select('#left-bottom ul')

function renderTopParks(data){
	let topParksArr = data.slice(0,10)
	let bottomParksArr = data.slice(data.length-10)
	let topParks = topUl.selectAll('li').data(topParksArr)
	let topULis = topParks.enter().append('li')
	let bottomParks = bottomUl.selectAll('li').data(bottomParksArr)
	let bottomULis = bottomParks.enter().append('li')

	topULis.append('span').attr('class', 'parkName').html(d => d.Name)
	topULis.append('span').attr('class', 'rating').html(d => d.Overall)
	bottomULis.append('span').attr('class', 'parkName').html(d => d.Name)
	bottomULis.append('span').attr('class', 'rating').html(d => d.Overall)
}