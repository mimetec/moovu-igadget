# Category Page

$$("body") {
	# Adding a class for page-specific styling
	add_class("_category")

	$(".//div[contains(@class, 'NewsletterSubscription')]") {
		remove()
	} #end newsletter

	$(".//div[@id='CategoryBreadcrumb']") {
		remove()
	} #end newsletter
}

$(".//div[@id='Wrapper']") {

	$(".//div[contains(@class, 'Left')]") {
		
		#make drop down accordians
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

		#make drop down accordians
		$(".//div[@id='SideCategoryShopByPrice']") {
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

	} # end left

	$(".//div[contains(@class, 'Content')]") {

		$(".//div[@id='CategoryHeading']") {
			$(".//h2") { 
				add_class("category_heading")
				move_to("../../../../div[contains(@class, 'Left')]", "top")
			}
			$(".//div[contains(@class, 'FloatRight SortBox')]") { 
				add_class("sort_by_dd")
				$(".//form") { 
					insert("div",class:"styled-select")
					$(".//select") { 
						move_to("../div[contains(@class, 'styled-select')]")
					}# end select
				}# end form
			}# end floatright sortbox

		move_to("../../div[contains(@class, 'Left')]", "bottom")
		}# end CategoryHeading

		$(".//div[@id='CategoryContent']") {

			move_here("../..//div[contains(@class, 'SubCategoryList')]", "top")

			$("./form/ul/li") {
				add_class("category_product")
				insert("div",class:"product_info") {
					move_here("../div[contains(@class,'ProductDetails')]")
					move_here("../div[contains(@class,'ProductPriceRating')]")
					move_here("../div[contains(@class,'ProductCompareButton')]")
					move_here("../div[contains(@class,'ProductActionAdd')]")
				}
			}
			insert("br")
			insert("hr")
			insert("br")
		}# end CategoryContent

	}#end content

	$(".//div[contains(@class, 'Right')]") {

		$(".//div[@id='SideCategoryTopSellers']") {

			move_to("../../div[contains(@class, 'Content')]", "bottom")

			$("./div/ul/li") {
				add_class("category_product")
				insert("div",class:"product_info") {
					move_here("../div[contains(@class,'ProductDetails')]")
					move_here("../div[contains(@class,'ProductPriceRating')]")
					move_here("../div[contains(@class,'ProductCompareButton')]")
					move_here("../div[contains(@class,'ProductActionAdd')]")
				}
			}
		}# end SideCategoryTopSellers

		$(".//div[@id='SidePopularProducts']") {

			$("//span[contains(@class,'FeedLink')]") { remove() }

			$("./div") { 
				attribute("data-ur-set", "carousel")
				attribute("data-ur-carousel-component", "view_container")
				attribute("data-ur-id", "SidePopularProducts")
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

		} #end SidePopularProducts

		$(".//div[@id='SideCategoryNewProducts']") {

			$("//span[contains(@class,'FeedLink')]") { remove() }

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

		} #end SideCategoryNewProducts

		$(".//div[@id='SideBrandTagCloud']") { remove() }

	} # end Right

} # end wrapper