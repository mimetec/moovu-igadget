$$("body") {
	# Adding a class for page-specific styling
	add_class("_login")
}#end body

#use index to add a class and count all h2 in this page
$$("h2") { add_class(index()) }

$(".//div[@id='Wrapper']") {

	$(".//div[contains(@class, 'Left')]") { 

		$(".//div[@id='SideNewProducts']") { remove() }#end SideNewProducts
		$(".//div[@id='SideNewsletterBox']") { remove() }#end SideNewsletterBox
		$(".//div[contains(@class, 'Breadcrumb')]") { remove() }#end Breadcrumb

	}#end left

	$("./div[contains(@class, 'Content')]") { 

		$(".//div[@id='LoginForm']//div[contains(@class, 'CreateAccount')]") { 
			move_to("../div[contains(@class, 'AccountLogin')]")
			$(".//ul") { 
				add_class("create_account")
			}
			$(".//a") { 
				add_class("create_click_here")
			}
		}#end CreateAccount

		insert("div", class:"use_fetch_function") {
			$account_message = fetch("//div[contains(@class, 'AccountLogin')]/h2/text()")
			insert("div", class:"account_message") {
				text("If you already have an account, please ")
				insert("a", href:"https://mlocal.igadgetcommerce.com/account.php"){
					text($account_message)
					}#end a
			}#end insert account_message
		}#end insert use_fetch_function

	}#end content

}#end wrapper

#testing my xpaths because some classes were being added twice,
#means page was running through moov server twice
#log("RUNNING TWICE? _________________________________________")