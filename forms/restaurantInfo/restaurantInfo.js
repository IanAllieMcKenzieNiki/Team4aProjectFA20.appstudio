btnSubmitRestaurantRegistration.onclick = function() {
  name = inptRestaurantInfoName.value
  address  = inptRestaurantInfoAddress.value
  city = inptRestaurantInfoCity.value
  state = inptRestaurantInfoState.value
  zipcode  = inptRestaurantInfoZipCode.value
  phone_num = inptRestaurantInfoPhone.value
  owner_num  = inptRestaurantInfoOwnerName.value

    query = "INSERT INTO restaurant (name,address,city,state,phone_num,owner_name,zipcode) VALUES ('" + name + "','" + address + "'+'" + city + "','" + state + "'+'" + phone_num + "','" + owner_name + "'+'" + zipcode + "')"
    console.log(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amj88804&pass=RDJ!&database=375groupa4&query=" + query)
  } else {
    inptRestaurantInfoName.value = ""
    inptRestaurantInfoAddress.value = ""
   inptRestaurantInfoCity.value = ""
   inptRestaurantInfoState.value = ""
    inptRestaurantInfoZipCode.value = ""
   inptRestaurantInfoPhone.value = ""
  inptRestaurantInfoOwnerName.value = ""
  }
  if (req.status == 200) {
    ChangeForm(restaurantHomepage)
  }
}
