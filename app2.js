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


//create and render list with cat names and admin button

function makeCatList() {
	cats.forEach(function(cat, index){
		var adminButton;
		var idCat=cat.name+index;
		$("#catList").append('<li id="'+index+'">'+cat.name+'</li>');
	//render admin button but hide details	
	});$("#details").hide();
	$("#adminButton").append('Admin');
}
//display the image and name of clicked cat
var catImage;
$("#catList").click("click", function (e) {
	var id=e.target.id;
	var catUrl=cats[id].image;
	currentCat=cats[id];
	//hide details whenever a new cat is clicked
	$("#details").hide();
	//console.log(e.target);//	catSelection();
	//console.log(id);
	//console.log(cats[id]);
	//console.log(catUrl);
	$("#catName").text(cats[id].name);
	$("#catCounter").text("Count="+currentCat.clicks);
	//make error handler in event cat image does not display
	$("#catPic").on('error', function(){
		$("#catCounter").text("Count="+currentCat.clicks+" Alt picture= "+cats[id].alt);
        console.log('error!!!!!!');
		alert("Image is a NO SHOW.");
	}).attr("src",catUrl);
	//listen for admin button click and make details visible
	$("#adminButton").click("click", function(){ 
		$("#details").show();
		( $('[name=clicks]').val(currentCat.clicks) );
		( $('[name=name]').val(cats[id].name) );
		( $('[name=url]').val(catUrl) );
		//cancel admin when cancel button is clicked
		});
});

//create clicker counter and display counter from clicks
var catCount;
$("#catPic").click("click", function(e) {
	console.log(currentCat);
	currentCat.clicks=currentCat.clicks+1;
	console.log(currentCat.clicks);
	$("#catCounter").text("Count ="+currentCat.clicks);
	//hide admin function whenever cat pic is clicked
	$("#details").hide();
});

//cancel admin when cancel button is clicked
var cancel;
$("#cancelDetail").click("click", function(){ 
		$("#details").hide();
});

var updateName, updateClicks, updateUrl;
$("#saveDetail").click("click", function(){ 
	updateClicks=( $('[name=clicks]').val(currentCat.clicks) );
	updateName=( $('[name=name]').val(cats[id].name) );
	updateUrl=( $('[name=url]').val(catUrl) );
	cats[id].name=updateName;
	cats[id].clicks=updateClicks;
	cats[id].url=updateUrl;

});

makeCatList();


