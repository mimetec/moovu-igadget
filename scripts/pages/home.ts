<<<<<<< HEAD
# Homepage

$$("body") {
	# Adding a class for page-specific styling
	add_class("_home")

	$(".//div[@id='SideNewsletterBox']") {
		remove()
	} #end newsletter

	$(".//span[contains(@class,'FeedLink')]") {
		remove()
	} #end newsletter
}#end body

$(".//div[@id='Wrapper']") {
	$(".//div[contains(@class, 'Left')]") {

		#make drop down accordian
		$(".//div[@id='SideShopByBrand']") {
			attribute("data-ur-set", "toggler")
			$(".//h2") { 
				attribute("data-ur-toggler-component", "button") 
				insert("div",class:"mw_indicator")
 			}#end h2
 			$("./div") { 
 				attribute("data-ur-toggler-component", "content")
 				$(".//li") { add_class("mw_list_item") } # end li
 				$(".//a") { insert("div",class:"mw_arrow") } # end a
 			} # end div child of sideshopbybrand
		} # end sideshopbybrand

	} #end Left

	$(".//div[contains(@class, 'Content')]") {
		
		#make featured products carousel
		$(".//div[@id='HomeFeaturedProducts']") { 
			$("./div") { 
				attribute("data-ur-set", "carousel")
				attribute("data-ur-carousel-component", "view_container")
				attribute("data-ur-autoscroll", "enabled")
				attribute("data-ur-autoscroll-delay", "5000")
				attribute("data-ur-id", "FeaturedProductsCarousel")
				$("./ul") { 
				attribute("data-ur-carousel-component", "scroll_container")
					$("./li") { 
					attribute("data-ur-carousel-component", "item")
					} # end li
				} # end ul
				insert("div",class:"carousel_navigation"){
					#insert("span",data-ur-carousel-component:"count","-- count --")
					insert("div",class:"Previous",data-ur-carousel-component:"button",data-ur-carousel-button-type:"prev","Back")
					insert("div",class:"Dots",data-ur-carousel-component:"dots")
					insert("div",class:"Next",data-ur-carousel-component:"button",data-ur-carousel-button-type:"next","Forward")
				}#end div to contain count
			insert("hr") 	
			} # end div child of featured products
		} # end div HomeFeaturedProducts

		#make New products carousel
		$(".//div[@id='HomeNewProducts']") {
			$("./div") { 
				attribute("data-ur-set", "carousel")
				attribute("data-ur-carousel-component", "view_container")
				attribute("data-ur-id", "NewProductsCarousel")
				$("./ul") { 
				attribute("data-ur-carousel-component", "scroll_container")
					$("./li") { 
					attribute("data-ur-carousel-component", "item")
					} # end li
				} # end ul
				insert("div",class:"carousel_navigation"){
					#insert("span",data-ur-carousel-component:"count","-- count --")
					insert("div",class:"Previous",data-ur-carousel-component:"button",data-ur-carousel-button-type:"prev","Back")
					insert("div",class:"Dots",data-ur-carousel-component:"dots")
					insert("div",class:"Next",data-ur-carousel-component:"button",data-ur-carousel-button-type:"next","Forward")
				}#end div to contain count
			} # end div child of new products
		} # end div HomeNewProducts

	}# end content

	$(".//div[contains(@class, 'Right')]") { 
		remove()
	}

# Attempt at recreating http://uranium.io/interactions/carousel.html
	# exact example to see why my featured products carousel wouldn't work 3.26.14
	#Added new .js to bundles.yml
	# insert("div",data-ur-set:"carousel",data-ur-carousel-component:"view_container",data-ur-id:"MyFirstCarousel") {
	# 	insert("span",data-ur-carousel-component:"count","-- count --")
	# 	insert("div",data-ur-carousel-component:"button",data-ur-carousel-button-type:"prev","Prev")
	# 	insert("div",data-ur-carousel-component:"button",data-ur-carousel-button-type:"next","Next")
	# 	insert("div",data-ur-carousel-component:'scroll_container') {
	# 		insert("span",data-ur-carousel-component:'item') {
	# 			insert("img",src:"http://placekitten.com/g/200/200",alt:"1")
	# 		} #end item 1
	# 		insert("span",data-ur-carousel-component:'item') {
	# 			insert("img",src:"http://placekitten.com/g/200/200",alt:"2")
	# 		} #end item 2
	# 		insert("span",data-ur-carousel-component:'item') {
	# 			insert("img",src:"http://placekitten.com/g/200/200",alt:"3")
	# 		} #end item 3
	# 		insert("span",data-ur-carousel-component:'item') {
	# 			insert("img",src:"http://placekitten.com/g/200/200",alt:"4")
	# 		} #end item 4
	# 		insert("span",data-ur-carousel-component:'item') {
	# 			insert("img",src:"http://placekitten.com/g/200/200",alt:"5")
	# 		} #end item 5
	# 		insert("span",data-ur-carousel-component:'item') {
	# 			insert("img",src:"http://placekitten.com/g/200/200",alt:"6")
	# 		} #end item 6
	# 		insert("span",data-ur-carousel-component:'item') {
	# 			insert("img",src:"http://placekitten.com/g/200/200",alt:"7")
	# 		} #end item 7
	# 		insert("span",data-ur-carousel-component:'item') {
	# 			insert("img",src:"http://placekitten.com/g/200/200",alt:"8")
	# 		} #end item 8
	# 	} #end scroll container
	# }#end myfirstcarousel

}# end wrapper
=======
# Place holder/example file
>>>>>>> 82a800fed607a26981db3c5f30184775fc31fee5
