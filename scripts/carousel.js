$(()=>{
	let currentImgIndex = 0
	let numberOfImg = $(".carousel-images").children().length
	$(".next").on("click" , () =>{
		$(".carousel-images").children().eq(currentImgIndex).css("display", "none")
		currentImgIndex = (currentImgIndex + 1) % numberOfImg
		$(".carousel-images").children().eq(currentImgIndex).css("display", "block")
	})
	$(".previous").on("click", () =>{
		$(".carousel-images").children().eq(currentImgIndex).css("display", "none")
		if(currentImgIndex - 1 < 0){
			currentImgIndex = numberOfImg - 1 
		}else{
			currentImgIndex = currentImgIndex - 1
		}
		$(".carousel-images").children().eq(currentImgIndex).css("display", "block")
	})
})