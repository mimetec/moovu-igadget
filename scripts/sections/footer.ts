# $("./body") {
#   insert_bottom("footer", class: "_footer") {
#     Move stuff here
#   }
# }
#<a href='http://www.moovweb.com/' target='_blank'>
#<img src='http://www.jafco.com/dynassets/news_logo/moovweb-logo-ticker.png'>
#</a>

$(".//div[@id='Footer']") {

	inner() {
     replace(/(\.)/, '<br />')
  	}

  	insert("div",id:"powered_by") {
  		text("Powered By:")
  		insert("br")
  		insert("a",href:"http://www.moovweb.com/",target:"_blank","moovweb.com")

  		$("./a") { 
  			inner() {
  			replace(/(moovweb.com)/, '<img src="http://www.jafco.com/dynassets/news_logo/moovweb-logo-ticker.png">')
  			}
  		} #anchor
  	} #div powered_by

}
