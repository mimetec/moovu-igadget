$$("body") {
	# Adding a class for page-specific styling
	add_class("_login")
}#end body

$(".//div[@id='Wrapper']") {

	$(".//div[contains(@class, 'Left')]") { 

		$(".//div[@id='SideNewProducts']") { remove() }#end SideNewProducts
		$(".//div[@id='SideNewsletterBox']") { remove() }#end SideNewsletterBox
		
	}#end left

	$(".//div[contains(@class, 'Content')]") { 

		$(".//div[contains(@class, 'Breadcrumb')]") { remove() }#end Breadcrumb

			$(".//div[@id='CartContent']") {
				$(".//form/div/input") {
					add_class("addtocart-single")
					attribute("type","submit")
					attribute("src","")
					attribute("value","Update Quantities")
				}#end form
			}#end CartContent

	}#end content

	$(".//div[contains(@class, 'Right')]") { 

	$("//div[@id='SideProductRecentlyViewed']") { 

			$("./div") { 
				attribute("data-ur-set", "carousel")
				attribute("data-ur-carousel-component", "view_container")
				attribute("data-ur-autoscroll", "enabled")
				attribute("data-ur-autoscroll-delay", "5000")
				attribute("data-ur-id", "NewProductsCarousel")
				$(".//ul") { 
				attribute("data-ur-carousel-component", "scroll_container")
					$(".//li") { 
					attribute("data-ur-carousel-component", "item")
					} # end li
				} # end ul
				insert("div",class:"carousel_navigation"){
					#insert("span",data-ur-carousel-component:"count","-- count --")
					#insert("div",class:"Previous",data-ur-carousel-component:"button",data-ur-carousel-button-type:"prev","Back")
					#insert("div",class:"Dots",data-ur-carousel-component:"dots")
					#insert("div",class:"Next",data-ur-carousel-component:"button",data-ur-carousel-button-type:"next","Forward")
				}#end div to contain count
			} # end div child of SideProductRecentlyViewed

		}#end SideProductRecentlyViewed

	}#end right

}#end wrapper
