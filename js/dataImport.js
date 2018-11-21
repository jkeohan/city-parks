 let mapJSON = 'https://raw.githubusercontent.com/jkeohan/D3-Tutorials/master/Mapping/nyc.json'

 let parksTSV = 'https://raw.githubusercontent.com/jkeohan/D3-Tutorials/master/Mapping/city-parks.tsv'

 d3.json(mapJSON).then( d => renderMap(d))

 //d3.csv(url,(d) => { console.log('first cb', d); return d})
 
 setTimeout( () => { 
 	d3.tsv(parksTSV,  (d,i) => { 
 		let obj = {...d, id:i} 
 		return obj
 	})
 	.then( d => {
 		renderBarChart(d)
 		renderParks(d)
 })
}, 500)

 let urls = [mapJSON, parksTSV]

 let reqs = urls.map( (d,i) => {
 	let obj;
 	if(i == 0) { d3.json(mapJSON) }
 	else { 	d3.tsv(parksTSV,  (d,i) => { 
 		obj = {...d, id:i} 
 	})}
 	return obj
 })

 Promise.all(reqs).then(d => {console.log(d)})//map( d => console.log(d))




