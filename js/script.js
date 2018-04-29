// product data, feel free to change the text and image link
var productArrary = [
	{
		name: "平面设计课程",
		img: "img/product-1.jpg",
		time: 48,
		price: 2199,
		tags: ["Photoshop", "Illustrator", "品牌包装"]
	},
	{
		name: "UI/UX交互设计",
		img: "img/product-2.jpg",
		time: 48,
		price: 2199,
		tags: ["界面设计", "用户体验", "Adobe Xd"]
    },
	{
		name: "网站开发课程",
		img: "img/product-3.jpg",
		time: 64,
		price: 3575,
		tags: ["MongoDB", "ReactJS", "NodeJS"]
	},
	{
		name: "App开发课程",
		img: "img/product-4.jpg",
		time: 48,
		price: 3155,
		tags: ["React Native", "iOS", "Android"]
    }
];

/* HTML template for reference
<div class="product">
	<img src="img/product-1.jpg">
	<h2>平面设计课程</h2>
	<div><span>Photoshop</span><span>Illustrator</span><span>Logo设计</span></div>
	<div class="divider">
		<h3 class="left">48课时</h3>
		<h3 class="right">$2,199</h3>
	</div>
</div>
*/

// display product function for both display all and display by searching
var displayProducts = function(query) {
	
	// Your JavaScript code goes to here.

}

// attach event listener to search button and trigger displayProducts function and provide search query parameter
document.getElementById("search-btn").addEventListener("click", function(e) {
	var searchVal = document.getElementById("search-input").value;
	displayProducts(searchVal);
});

// show all products when page loads
displayProducts();
