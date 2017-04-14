//define cats array with cat objects
//to store cat names and image url
var currentCat=null;
var cats= [{
	name: "cat1",
	image: 
	"https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr07/4/16/enhanced-16354-1396642706-25.jpg?no-auto",
	alt: "picture of an ugly cat",
	clicks: 0

},{
	name:"cat2",
	image: 
	"https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr04/10/12/enhanced-buzz-29081-1397145781-14.jpg?downsize=715:*&output-format=auto&output-quality=auto",
	alt: "picture of an ugly cat",
	clicks: 0
},{
	name: "cat3",
	image: 
	"https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr02/9/12/enhanced-buzz-11844-1397060009-22.jpg?downsize=715:*&output-format=auto&output-quality=auto",
	alt: "picture of an ugly cat",
	clicks: 0
},{
	name: "cat4",
	image: 
	"https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr07/9/14/enhanced-18798-1397069417-26.jpg?downsize=715:*&output-format=auto&output-quality=auto",
	alt: "picture of an ugly cat",
	clicks: 0
},{
	name: "cat5",
	image: 
	"https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr03/9/14/enhanced-20729-1397069470-8.jpg?downsize=715:*&output-format=auto&output-quality=auto",
	alt: "picture of an ugly cat",
	clicks: 0
}];


//create list with cat names

function makeCatList() {
	cats.forEach(function(cat, index){
		var idCat=cat.name+index;
		$("#catList").append('<li id="'+index+'">'+cat.name+'</li>');
	});
}
//display the image and name of clicked cat
var catImage;
$("#catList").click("click", function (e) {
	var id=e.target.id;
	var catUrl=cats[id].image;
	currentCat=cats[id];
	//console.log(e.target);//	catSelection();
	//console.log(id);
	//console.log(cats[id]);
	//console.log(catUrl);
	$("#catName").text(cats[id].name);
	$("#catCounter").text("Count="+currentCat.clicks);
	$("#catPic").error(function(){
		alert("Image is a NO SHOW.")
	}).attr("src",catUrl);
});

//create clicker counter and display counter from clicks
var catCount;
$("#catPic").click("click", function(e) {
	//console.log("clicking");
	console.log(currentCat);
	currentCat.clicks=currentCat.clicks+1;
	console.log(currentCat.clicks);
	$("#catCounter").text("Count ="+currentCat.clicks);
});



makeCatList();




//$(document).ready(function() {









    // Variables for functions
    //var cat = cats[i];
    // Append cats to page
/*
    $('#catList').append('<p id="cat' + i + '"><a href="#">' + cat.name + 
           '</p></a>');

    // Add cats to main cat div when clicked
    $('#cat' + i).click((function(catImage) {
        return function() {
            // Remove a cat if there's already one
            if ($('.catList')) {
                $('.catList').detach();
            }
        }
    

            // Add the new cat
            /*$('#cat-container').append('<div id="cat-main' + i + 
                          '" class="cat cat-main">'
                          <img class="catimage" src="' + catCopy.image + 
                          '" alt="' + catCopy.alt + '">
                          <div class="catname modal">' + catCopy.name + 
                          '</div></div>');
        }
    })(cat));*/

/*function displayCats() {
			var allCats = controller.getAllCats();
			var htmlString = '';
			var cat = '';
			allCats.forEach(function(currentValue, index){
				cat = 'cat' + (index + 1);
				htmlString += '<li class="cat_list_item">' +
					currentValue[cat].name +
					'</li>';
			});
			$('#cat_list').html(htmlString);
		}*/
//if the image of displayed cat is clicked increase increment count

