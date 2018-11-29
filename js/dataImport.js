 let mapJSON = 'https://raw.githubusercontent.com/jkeohan/D3-Tutorials/master/Mapping/nyc.json'
 let mapJSONCounties ='https://raw.githubusercontent.com/jkeohan/D3-Tutorials/master/Mapping/us-10m.v1.json'
 let parksTSV = 'https://raw.githubusercontent.com/jkeohan/D3-Tutorials/master/Mapping/city-parks.tsv'

 let allParks = [];
 let filteredParks = [];

Promise.all([
     d3.json(mapJSON),
     d3.tsv(parksTSV,  (d,i) => { 
	 		let obj = {...d, id:i} 
	 		return obj
	 	}),
]).then(function(files) {
    renderMap(files[0])
    allParkData = files[1]
	renderBarChart(files[1])
	renderParks(files[1])
	renderTopParks(files[1])
}).catch(function(err) {
    // handle error here
})










