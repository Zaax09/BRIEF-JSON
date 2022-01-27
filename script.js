
// let Désig = document.getElementById('des')
// let ID = document.getElementById('id')
// let price = document.getElementById('price')
// let	Catégo = document.getElementById('Catégorie')
// let Dispo = document.getElementById('dispo')












                              $(document).ready(function(){
                                $("#searc").on("keyup", function() {
                                  var value = $(this).val().toLowerCase();
                                  $("#tbody tr").filter(function() {
                                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                                  });
                                });
                              });

$(document).ready( function () {
     $.getJSON("file.json", function(product) {
    console.log(product);
    for(var i =0; i<=10;i++){
document.getElementById('tbody').innerHTML+=`
<tr>
  <td>${product[i].id}</td>
  <td>${product[i].title}</td>
  <td>${product[i].type}</td>
  <td>${product[i].description}</td>
  <td>${product[i].height}</td>
  <td>${product[i].width}</td>
  <td>${product[i].price}</td>
  <td>${product[i].rating}</td>


  </tr>
`
    }
   
     
    
    
        });
        });
        th = document.getElementsByTagName('th');

        for(let c=0; c < th.length; c++){

            th[c].addEventListener('click',item(c))
        }


function item(c){

    return function(){
      console.log(c)
      sortTable(c)
    }
}


function sortTable(c) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("Table");
  switching = true;
  
  while (switching) {
    
    switching = false;
    rows = table.rows;
    
    
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;

      
      x = rows[i].getElementsByTagName("TD")[c];
      y = rows[i + 1].getElementsByTagName("TD")[c];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
 
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}







// ________Z
// ________ZZZ
// ______Z_ZZZZZ
// ______ZZZZZZZZZ
// _______ZZZZZAOZZZ
// ________ZZZZZZZZZZZ
// _________ZZZZZZZZZ
// _________ZZZZZZZZZZ
// _________ZZZZZZZZZZZ
// _________ZZZZZZZZZZZ ZZ
// _________ZZZZZZZZZZZ ZZZ
// _________ZZZZZZZZZZZ ZZZZZZ
// _________ZZZZZZZZZZZ ZZZZZZZZ
// _________ZZZZZZZZZZZ ZZZZZZZZZ
// __________ZZZZZZZZZZ ZZZZZZZZZZZ_
// ___________ZZZZZZZZZ ZZZZZZZZZZZZZZZZZ
// ___________ZZZZZZZZZ ZZZZZZZZZZZZZZZZZZZZ
// _____________ZZZZZZZ ZZZZZZZZZZZZZZZZZZZZ ZZ
// ______________ZZZZZZ ZZZZZZZZZZZZZZZZZZZZ ZZZ
// ______________ZZZZZZ ZZZZZZZZZZZZZZZZZZZZ ZZZZ
// _______________ZZZZZ ZZZZZZZZZZZZZZZZZZZZ ZZZZZ
// _______________ZZZZZ ZZZZZZZZZZZZZZZZZZZZ ZZZZZZ
// ________________ZZZZ __ZZZ____ZZZZZZZZZZZ ZZZZZZZ
// _________________ZZ_ __ZZZ_____ZZZZZZZZZZ ZZZZZZZZ       Z
// _________________ZZ_ __ZZZ_____ZZZZZZZZZZ ZZZZZZZZZZZ___ZZ
// _________________ZZ_ __ZZZ______ZZZZZZZZZ ZZZZ_ZZZZZZZZZZZ
// _________________ZZ_ __ZZZ______ZZZZZZZZZ ZZZZZ_ZZZZZZZZZ

