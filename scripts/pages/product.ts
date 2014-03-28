# Homepage

$$("body") {
	# Adding a class for page-specific styling
	add_class("_product")
}

$("//div[contains(@class,'Left')]") { 
	remove()
}

$("//a[@id='ImageScrollNext']") { remove() }

$("//div[@id='ProductByCategory']") { remove() }

$("//div[@id='SideProductAddToWishList']") { remove() }

$("//div[@id='SideProductRecentlyViewed']") { remove() }

$(".//div[@id='Wrapper']") {
	$(".//div[contains(@class, 'Content')]") {
		
		$(".//div[@id='ProductBreadcrumb']") { remove() }
		$(".//div[contains(@class,'AddThisButtonBox')]") { remove() }

		$(".//div[contains(@class, 'productAddToCartRight')]") {
			$("./form/div[contains(@class, 'ProductAddToCart')]") {
				$(".//div[contains(@class, 'BulkDiscount')]/input") {
					add_class("addtocart-single")
					attribute("type","submit")
					attribute("src","")
					attribute("value","Add To Cart")
				}
			}#end ProductAddToCart
		}#end productAddToCartRight

	$("//div[@id='SimilarProductsByCustomerViews']") { 

			$("./div") { 
				attribute("data-ur-set", "carousel")
				attribute("data-ur-carousel-component", "view_container")
				attribute("data-ur-autoscroll", "enabled")
				attribute("data-ur-autoscroll-delay", "5000")
				attribute("data-ur-id", "NewProductsCarousel")
				$("./ul") { 
				attribute("data-ur-carousel-component", "scroll_container")
					$("./li") { 
					attribute("data-ur-carousel-component", "item")
					} # end li
				} # end ul
				insert("div",class:"carousel_navigation"){
					#insert("span",data-ur-carousel-component:"count","-- count --")
					#insert("div",class:"Previous",data-ur-carousel-component:"button",data-ur-carousel-button-type:"prev","Back")
					#insert("div",class:"Dots",data-ur-carousel-component:"dots")
					#insert("div",class:"Next",data-ur-carousel-component:"button",data-ur-carousel-button-type:"next","Forward")
				}#end div to contain count
			} # end div child of SimilarProductsByCustomerViews

	}#end SimilarProductsByCustomerViews

	}#end Content

	$(".//div[contains(@class, 'Right')]") {

			$("//div[@id='SideProductRelated']") { 

			$("./div") { 
				attribute("data-ur-set", "carousel")
				attribute("data-ur-carousel-component", "view_container")
				attribute("data-ur-id", "SideProductRelated")
				$("./ul") { 
				attribute("data-ur-carousel-component", "scroll_container")
					$("./li") { 
					attribute("data-ur-carousel-component", "item")
					} # end li
				} # end ul
				insert("div",class:"carousel_navigation"){
					#insert("span",data-ur-carousel-component:"count","-- count --")
					#insert("div",class:"Previous",data-ur-carousel-component:"button",data-ur-carousel-button-type:"prev","Back")
					#insert("div",class:"Dots",data-ur-carousel-component:"dots")
					#insert("div",class:"Next",data-ur-carousel-component:"button",data-ur-carousel-button-type:"next","Forward")
				}#end div to contain count
			} # end div child of SideProductRelated

	}#end SideProductRelated

	}#end Right

}#end wrapper