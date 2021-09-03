menu_list_array = ["Veg Margherita Pizza","Veggie Deluxe Pizza","Paneer Tikka Pizza","Veg Extravaganza Pizza","Veg Supreme Pizza"//add more items,
                    ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        
        document.getElementById("display_menu").innerHTML = menu_list_array;
        //give the appropriate id name as display_menu  
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
        // use the sort function as - menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }
function sort(){
 var sort=document.getElementById("sort_item").value;
 menu_list_array.sort(item);
 sort_item();
}
function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
