$$("body") {
	# Adding a class for page-specific styling
	add_class("_login")
}#end body

$(".//div[@id='Wrapper']") {

	$(".//div[contains(@class, 'Left')]") { 

		$(".//div[@id='SideNewProducts']") { remove() }#end SideNewProducts
		$(".//div[@id='SideNewsletterBox']") { remove() }#end SideNewsletterBox
		$(".//div[contains(@class, 'Breadcrumb')]") { remove() }#end Breadcrumb

	}#end left

	$(".//div[contains(@class, 'Content')]") { 

		$(".//div[@id='LoginForm']//div[contains(@class, 'CreateAccount')]") { 
			move_to("../div[contains(@class, 'AccountLogin')]")
			$(".//ul") { 
				add_class("create_account")
			}
			$(".//a") { 
				add_class("create_click_here")
			}
		}#end CreateAccount

	}#end content

}#end wrapper

#log("RUNNING TWICE? _________________________________________")