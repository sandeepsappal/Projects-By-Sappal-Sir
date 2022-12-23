function fillModel()
{
   var i=company.selectedIndex
   switch(i)
   {
    case 1:
     var kia=[['Choose Model..','None'],['Sonet',1400000],['Seltos',1600000],['Carnival',4000000]]
     fillDD(kia)
     break;
    case 2:
     var tata=[['Choose Model..','None'],['Safari',2200000],['Punch',1000000],['Harrier',2400000]]
     fillDD(tata)
     break;
    case 3:
     var maruti=[['Choose Model..','None'],['Swift',1100000],['Breeza',1000000],['Grand Vitara',1500000]]
     fillDD(maruti)
     break;
     

     }

}

function fillDD(modelArray)
{      removeOptions()
        for(i=0;i<modelArray.length;i++)
        {
           var opt=document.createElement('option')
           opt.text=modelArray[i][0]
           opt.value=modelArray[i][1]
           model.add(opt)
        }
}


function removeOptions()
{
   for(j=model.options.length-1;j>=0;j--)
   {
    model.remove(j);
   }

}

function showDetails()
{ var carname=model.options[model.selectedIndex].text
  var price=parseInt(model.options[model.selectedIndex].value)
  var gst=price*28/100
  var ins=price*12/100
  var orp=price+gst+ins
  var htm="<table border='1' cellspacing='0' width='30%'><caption><h3>On Road Price of "+company.value+" "+carname+"</h3></caption>"
  htm+="<tr><th><img src='"+company.value+".png' width='150'></th><th><img src='"+carname+".png' width='200'></th></tr></table>"
  htm+="<table border='1' cellspacing='0' width='30%'><caption><h4>Price Details</h4></caption>"
  htm+="<tr><th><b><i>Base Price:</i></b></th><th>"+price+"</th></tr>"
  htm+="<tr><th><b><i>GST[28%]:</i></b></th><th>"+gst+"</th></tr>"
  htm+="<tr><th><b><i>Insurance:</i></b></th><th>"+ins+"</th></tr>"
  htm+="<tr><th><b><i>On Road Price:</i></b></th><th>"+orp+"</th></tr></table>"
  result.innerHTML=htm
  
}







