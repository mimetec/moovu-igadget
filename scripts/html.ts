# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()
<<<<<<< HEAD
  
  # Add the mobile meta tags 
  clean_mobile_meta_tags()
=======

    
  # Add the mobile meta tags 
  clean_mobile_meta_tags()

>>>>>>> 82a800fed607a26981db3c5f30184775fc31fee5
    
  # Needed to begin mobilizing
  remove_all_styles()
  remove_html_comments()

  # Late load all the images on the site
  # lateload()
  
<<<<<<< HEAD
=======



>>>>>>> 82a800fed607a26981db3c5f30184775fc31fee5
  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
<<<<<<< HEAD

  #remove AjaxLoading div from top of each page
  $("//div[@id='AjaxLoading']") {
    remove()
  } #end

  #remove Breadcrumb div from each page
  $("//div[contains(@class,'Breadcrumb')]") {
    remove()
  } #end

=======
>>>>>>> 82a800fed607a26981db3c5f30184775fc31fee5
}

