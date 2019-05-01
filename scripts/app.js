const baseURL = `https://sandbox-api.brewerydb.com/v2/`
const api = `key=a31a5d42fca9a21b3b49895bc601e550`

// const beerData = $.ajax({
//     url: "https://sandbox-api.brewerydb.com/v2/beers/?key=a31a5d42fca9a21b3b49895bc601e550"
// })
// console.log(beerData)
const beerArray = []

$(()=>{	

		$.ajax({
	    url: "https://sandbox-api.brewerydb.com/v2/beers/?key=a31a5d42fca9a21b3b49895bc601e550",
	    type: "GET",
	    data: { 
	    	 "p" : 1
	    }
		}).then((info) =>{
		  // alert("Retrieved " + info.data.length + " records from the dataset!");
		  // console.log(info.data[2])
		  let dataArray = info.data
		  for(let i = 0; i < dataArray.length; i++){
		  	beerArray.push(dataArray[i])
		  }
		}, (error) =>{
			console.error(error)
		});
	
	

	console.log(beerArray)
})