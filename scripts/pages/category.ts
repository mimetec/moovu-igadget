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
			}
		}
	}#end content

} # end wrapper