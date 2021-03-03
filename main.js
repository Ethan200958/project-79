menu_list_array = ["Chicken Tandoori Pizza. ", "Supreme Pizza. ", "Paneer Tikka Pizza. ", "Deluxe Veggie Pizza. ", "Extravaganza Pizza. "];

    function getMenu() {
        var htmldata;
        htmldata="<ol class='menulist'>"
        menu_list_array.sort();
        for(var t=0; t<menu_list_array; t++) {
            htmldata=htmldata+'<li>' + menu_list_array[t] + '</li>'
        }
        htmldata=htmldata+"</ol>"
        document.getElementById("display_menu").innerHTML = htmldata;

        document.getElementById("display_menu").innerHTML = menu_list_array;
        menu_list_array.join(" ");
    }



    function add_item() {
        var htmldata;
        var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        menu_list_array.sort();
        htmldata="<section class='cards'>"
        
        for(var j=0;j<menu_list_array.length;j++) {
            htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' + menu_list_array[j] + '</div>'
        }
        htmldata=htmldata +"</section>"
        document.getElementById("display_addedmenu").innerHTML = htmldata;
        }