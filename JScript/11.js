function fillCity()
{
   var i=state.selectedIndex
   switch(i)
   {
    case 1:
     var mp=[['Choose City..','None'],['Gwalior',1000000],['Indore',1200000],['Bhopal',700000],['Morena',100000],['Datia',300000]]
      
     fillDD(mp)
     break;
    case 2:
     var up=['Choose City..','Jhansi','Lucknow','Kanpur','Banaras','Noida']
     
     fillDD(up)
     break;
    case 3:
     var gj=['Choose City..','Gandhi Nagar','Ahmedabad','Surat','Vadodra','Bhuj']
     fillDD(gj)
     break;
     

     }

}

function fillDD(cityarray)
{      removeOptions()
        for(i=0;i<cityarray.length;i++)
        {
           var opt=document.createElement('option')
           opt.text=cityarray[i][0]
           opt.value=cityarray[i][1]
           city.add(opt)
        }
}


function removeOptions()
{
   for(j=city.options.length-1;j>=0;j--)
   {
    city.remove(j);
   }

}

function showDetails()
{
var msg=`${state.value}<br>${city.options[city.selectedIndex].text}<br>${city.value}`
result.innerHTML=msg
}







