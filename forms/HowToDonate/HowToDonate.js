hmbrMenu3.onclick=function(s){ 
               console.log(s)       
    if (typeof(s) == "object") { 
       return
    } else {
       switch(s) {
          case "Calendar":
              ChangeForm(Calendar)
                break
            case "How To Donate":
                ChangeForm(HowToDonate)
                break
            case "About Us":
                ChangeForm(AboutUs)
                break
         case "Map":
                ChangeForm(Maps)
                break
            case "Charities":
                ChangeForm(Charities)
                break
            case "Contact Us":
                ChangeForm(ContactUs)
                break      
                
       } 
   } 
}

