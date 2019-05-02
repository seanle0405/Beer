const baseURL = `https://sandbox-api.brewerydb.com/v2/`
const api = `key=a31a5d42fca9a21b3b49895bc601e550`

// const beerData = $.ajax({
//     url: "https://sandbox-api.brewerydb.com/v2/beers/?key=a31a5d42fca9a21b3b49895bc601e550"
// })
// console.log(beerData)
const beerArray = []

const belgianStyles = [{name: "Belgian Dubbel", number: 58},{name: "Belgian Tripel", number: 59},{name:"Belgian Quad", number: 60},{name: "Belgian Blonde", number: 61}, {name: "Belgian Pale", number: 62}, {name: "Belgian Pale Strong", number: 63}, {name: "Belgian Dark Strong", number: 64},{name: "Witbier", number: 65},{name: "Lambic", number: 66},{name: "Gueze", number: 67},{name: "Fruit Lambic", number: 68},{name: "Belgian Table Beer", number: 69}, {name: "Saison", number: 72}]



$(()=>{	

	const seeTripel = () =>{$.ajax({
		    url: "https://sandbox-api.brewerydb.com/v2/beers/?key=a31a5d42fca9a21b3b49895bc601e550",
		    type: "GET",
		    data: { 
		    	 "styleId": 59,
		    	 "withBreweries": "Y" 
		    }
			}).then((info) =>{
				for(let i = 0; i < info.data.length; i++){
					
				}
				const $options = $("<div>").addClass("options")
				$options.insertAfter("#tripel")
				$options.html(`
					<h2>${info.data[0].name}   ABV ${info.data[0].abv}%</h2>
					<p>${info.data[0].description}</p>
					`)
				console.log(info)
			}, (error) =>{
				console.error(error)
			});
	}
	seeTripel()
})