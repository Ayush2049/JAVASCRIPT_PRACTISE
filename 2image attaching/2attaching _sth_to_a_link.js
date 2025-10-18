// 1---METHOD ONE

//  importing image from chrome by copy image address option

//window.location.href =
// "https://www.shutterstock.com/image-photo/fieldtree-blue-sky-260nw-72879526.jpg";

// 2---METHOD TWO
//  attaching image to a button

//HTML PART
//<!-- Button to Redirect to an Image -->
// <button onclick="redirectToImage()">Click to View Image</button>

//JS PART

//function redirectToImage() {
// window.location.href =
//  "https://upload.wikimedia.org/wikipedia/commons/3/3f/JPEG_example_flower.jpg";
//}


// 3---METHOD three

//image through a clickable link without using html

let link = document.createElement("a"); // Create <a> tag
link.href =
  "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/05/Daredevil-Kingpin.jpg"; // Set image link
link.textContent = "Click here to view image"; // Link text
document.body.appendChild(link); // Append to the document
