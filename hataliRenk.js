

var one_day=1000*60*60*24;
let count=0;
var rows = document.getElementsByTagName("table")[0].rows;
let satirSayisi = document.getElementsByTagName("table")[0].rows.length;
console.log(satirSayisi);




console.log(rows[0].cells[2])


for(i=0;i<satirSayisi;i++)
{
    var currentRow = rows[i];
    var cell = currentRow.cells[1];
    
    var cell2 = currentRow.cells[2];

    date1=new Date(cell.textContent);
    date2=new Date(cell2.textContent);
    if(cell2.textContent.length<1){
        date2=new Date();
    }
   
    console.log(date1);
    
    console.log(date2);
    let gunFarki=(date2-date1)/one_day;
    
    if(gunFarki<14 && rows[i].style.backgroundColor=="red"){
        count++;

    }
    
    if(gunFarki>14 && rows[i].style.backgroundColor!=="red"){
        count++;

    }    
}
console.log(count);




//tarih=new Date();

//console.log((date2-date1)/one_day);

//rows[0].style.backgroundColor





console.log(count);


