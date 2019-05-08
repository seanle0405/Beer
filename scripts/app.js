const baseURL = `https://sandbox-api.brewerydb.com/v2/`
const api = `key=a31a5d42fca9a21b3b49895bc601e550`

const belgianStyles = [{name: "Belgian Dubbel", number: 58},{name: "Belgian Tripel", number: 59},{name:"Belgian Quad", number: 60},{name: "Belgian Blonde", number: 61}, {name: "Belgian Pale", number: 62}, {name: "Belgian Pale Strong", number: 63}, {name: "Belgian Dark Strong", number: 64},{name: "Witbier", number: 65},{name: "Lambic", number: 66},{name: "Gueze", number: 67},{name: "Fruit Lambic", number: 68},{name: "Belgian Table Beer", number: 69}, {name: "Saison", number: 72}]



$(()=>{	

	const seeBeer = (styleId, appendTo) =>{$.ajax({
		    url: "https://sandbox-api.brewerydb.com/v2/beers/?key=a31a5d42fca9a21b3b49895bc601e550",
		    type: "GET",
		    data: { 
		    	 "styleId": styleId,
		    	 "withBreweries": "Y" 
		    }
			}).then((info) =>{
				const $options = $("<div>").addClass("options")
				$options.appendTo(appendTo)
				for(let i = 0; i < info.data.length; i++){
					if(info.data[i].description != null){
						const $beer = $("<div>").addClass("beer")
						$options.append($beer)
						$beer.html(`
							<h2>${info.data[i].name}   <span class = "abv">ABV ${info.data[i].abv}%</span></h2>
							<p>${info.data[i].description}</p>
						`)
					}
				}
					
				console.log(info)
			}, (error) =>{
				console.error(error)
			});
	}

	$("#moreTripel").on("click", () =>{
		seeBeer(59, "#tripel")
		$("#lessTripel").css("display", "inline-block")
		$("#moreTripel").css("display", "none")
	})
	$("#lessTripel").on("click", () =>{
		$("#tripel").children(".options").remove()
		$("#moreTripel").css("display", "inline-block")
		$("#lessTripel").css("display", "none")
	})
	$("#moreBlonde").on("click", () =>{
		seeBeer(61,"#blonde")
		$("#lessBlonde").css("display", "inline-block")
		$("#moreBlonde").css("display", "none")
	})
	$("#lessBlonde").on("click", () =>{
		$("#blonde").children(".options").remove()
		$("#moreBlonde").css("display", "inline-block")
		$("#lessBlonde").css("display", "none")
	})
	$("#moreDubbel").on("click", () =>{
		seeBeer(58,"#dubbel")
		$("#lessDubbel").css("display", "inline-block")
		$("#moreDubbel").css("display", "none")
	})
	$("#lessDubbel").on("click", () =>{
		$("#dubbel").children(".options").remove()
		$("#moreDubbel").css("display", "inline-block")
		$("#lessDubbel").css("display", "none")
	})
	$("#moreQuad").on("click", () =>{
		seeBeer(60,"#quad")
		$("#lessQuad").css("display", "inline-block")
		$("#moreQuad").css("display", "none")
	})
	$("#lessQuad").on("click", () =>{
		$("#quad").children(".options").remove()
		$("#moreQuad").css("display", "inline-block")
		$("#lessQuad").css("display", "none")
	})

})