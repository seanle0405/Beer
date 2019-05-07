$(()=>{
	let currentImgIndex = 0
	let numberOfImg = $(".carousel-divs").children().length
	$(".next").on("click" , () =>{
		$(".carousel-divs").children().eq(currentImgIndex).css("display", "none")
		currentImgIndex = (currentImgIndex + 1) % numberOfImg
		$(".carousel-divs").children().eq(currentImgIndex).css("display", "block")
	})
	$(".previous").on("click", () =>{
		$(".carousel-divs").children().eq(currentImgIndex).css("display", "none")
		if(currentImgIndex - 1 < 0){
			currentImgIndex = numberOfImg - 1 
		}else{
			currentImgIndex = currentImgIndex - 1
		}
		$(".carousel-divs").children().eq(currentImgIndex).css("display", "block")
	})

  $('div').on('click', function() {
      $(this).toggleClass('show-description');
  });
	
})