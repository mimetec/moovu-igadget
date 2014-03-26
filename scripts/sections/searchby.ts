# $('./body') {
#   insert_top("header", class: "_header") {
#     Move stuff here
#   }
# }

$(".//div[@id='Header']") {

	attribute("data-ur-set", "toggler")

	  $("./div[@id='Logo']") {
	    # Move top menu into #Logo container
	    move_here("../../../div[@id='TopMenu']", "top") {
	    # Remove unwanted top menu items from upper menu
	    remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
	  	} #end move here

	  		$("./div[@id='TopMenu']") {
	  			$(".//li[1]") { 
	  				add_class("sprites-user")
	  				#remove anchor text
	  				$(".//a") { text("") }
	  			 } #end li for user
	  			$(".//li[2]") { 
	  				add_class("sprites-cart")
	  				move_to("..", "top")
	  				#remove anchor text
	  				$(".//a") { text("") }
	  			 } #end li for cart
	  		}# end div TopMenu

	  } #end logo

	insert("div", class: "mw_header_bottom") {
	insert("div", class: "mw_search")
	insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
	} #end inserts into mw_header_bottom

		# Fill search HTML
		$("..//div[@class='mw_search']") {
		  # Move search form into container element
		  move_here("//div[@id='SearchForm']", "bottom") {
		  remove("./p")

			  	$("./form") {
			      remove("./label")
			      # Change search button background image
			      $("./input[@type='image']") {
			        wrap("div", class: "mw_search_btn sprites-search")
			      } #end wrap
			      $("./input[@type='text']") {
			        attribute("placeholder", "Search...")
			      } #end placeholder
			    }#end form scope
		  }#end move_here function
		} #end search HTML

	move_here("../div[@id='Menu']", "bottom") {
		attribute("data-ur-toggler-component", "content")
		# Move "Category List" element on bottom of #Menu element
		move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
		$$("li") {
			add_class("mw_bar2")
		}# end li
	}# end move_here function		

} #end header scope

#Get the div for the search form and add a sprite class so it has a background
$("//div[@id='SearchForm']/form//input[@type='image']") {
  wrap("div", class: "mw_search_btn sprites-search")
  attribute("style", "opacity:0;")
}
