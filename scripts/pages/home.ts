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
}

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
		

	}# end content

}# end wrapper