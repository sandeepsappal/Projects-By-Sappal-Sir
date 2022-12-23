function showFoodDetails()
{  var i=food.selectedIndex
  //result.innerHTML="Price:"+food.value+"<br>Index:"+i+"<br>Food:"+food.options[i].text
  var msg=`Food:${food.options[i].text}<br>Price:${food.value}`
  result.innerHTML=msg
  fimg.width=300
  fimg.src=food.options[i].text+".png"
  
}





