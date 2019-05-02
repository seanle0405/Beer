const baseURL = `https://sandbox-api.brewerydb.com/v2/`
const api = `key=a31a5d42fca9a21b3b49895bc601e550`

// const beerData = $.ajax({
//     url: "https://sandbox-api.brewerydb.com/v2/beers/?key=a31a5d42fca9a21b3b49895bc601e550"
// })
// console.log(beerData)
const beerArray = []

const belgianStyles = [{name: "Belgian Dubbel", number: 58},{name: "Belgian Tripel", number: 59},{name:"Belgian Quad", number: 60},{name: "Belgian Blonde", number: 61}, {name: "Belgian Pale", number: 62}, {name: "Belgian Pale Strong", number: 63}, {name: "Belgian Dark Strong", number: 64},{name: "Witbier", number: 65},{name: "Lambic", number: 66},{name: "Gueze", number: 67},{name: "Fruit Lambic", number: 68},{name: "Belgian Table Beer", number: 69}, {name: "Saison", number: 72}]



$(()=>{	

		$.ajax({
	    url: "https://sandbox-api.brewerydb.com/v2/beers/?key=a31a5d42fca9a21b3b49895bc601e550",
	    type: "GET",
	    data: { 
	    	 "styleId": 59,
	    	 "withBreweries": "Y" 
	    }
		}).then((info) =>{
		  // alert("Retrieved " + info.data.length + " records from the dataset!");
		  // console.log(info.data[2])
		  console.log(info)
		}, (error) =>{
			console.error(error)
		});
	
})