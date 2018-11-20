 let mapJSON = 'https://raw.githubusercontent.com/jkeohan/D3-Tutorials/master/Mapping/nyc.json'

 let parksTSV = 'https://raw.githubusercontent.com/jkeohan/D3-Tutorials/master/Mapping/city-parks.tsv'

// async function fetchAsync () {
//   // await response of fetch call
//   let response = await d3.tsv('https://raw.githubusercontent.com/jkeohan/D3-Tutorials/master/Mapping/city-parks.tsv');
//   // only proceed once promise is resolved
//   // only proceed once second promise is resolved
//   return response;
// }

// // trigger async function
// // log response or catch error of fetch promise
// fetchAsync()
//     .then(data => { 
//     	renderMap(data) 
//     	renderBarChart(data)
//     })
//     .catch(reason => console.log(reason.message))


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