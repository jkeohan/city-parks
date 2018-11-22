 let mapJSON = 'https://raw.githubusercontent.com/jkeohan/D3-Tutorials/master/Mapping/nyc.json'

 let parksTSV = 'https://raw.githubusercontent.com/jkeohan/D3-Tutorials/master/Mapping/city-parks.tsv'

 let artistsCSV = 'https://raw.githubusercontent.com/jkeohan/city-parks/master/js/artists.csv'
 
 d3.json(mapJSON).then( d => renderMap(d))

 let allParks = [];
 let filteredParks = [];
 
 setTimeout( () => { 
 	d3.tsv(parksTSV,  (d,i) => { 
 		let obj = {...d, id:i} 
 		return obj
 	})
 	.then( d => {
 		allParkData = d
 		renderBarChart(d)
 		renderParks(d)
 		renderTopParks(d)
 		// renderBoroughList(d)
 })
}, 1000)

 // let urls = [mapJSON, parksTSV]

 // let reqs = urls.map( (d,i) => {
 // 	let obj;
 // 	if(i == 0) { obj = d3.json(mapJSON) }
 // 	else { 	d3.tsv(parksTSV,  (d,i) => { 
 // 		obj = {...d, id:i} 
 // 	})}
 // 	return obj
 // })

 //Promise.all(reqs).then(d => {console.log(d)})//map( d => console.log(d))









