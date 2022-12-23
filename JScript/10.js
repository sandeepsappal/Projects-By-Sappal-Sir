function fillCity()
{
   var i=state.selectedIndex
   switch(i)
   {
    case 1:
     var mp=['Choose City..','Gwalior','Indore','Bhopal','Morena','Datia']
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
           opt.text=cityarray[i]
           opt.value=cityarray[i]
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








