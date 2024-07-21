// Get the modal
var modal = document.getElementById("storyModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to show modal with the given content
function showModal(content) {
    console.log("showModal function is called.");
    var storyContent = document.getElementById("storyContent");
    storyContent.innerHTML = content;
    modal.style.display = "block";
}

// Content mapping
const contentMap = {
    video1: '<video width="100%" height="400px" controls><source src="images/thvv1.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    image1: '<img src="images/sun1.jpeg"  height="500px" alt="Story Image" width="100%">',
    image2: '<img src="images/sl3.jpeg"  height="500px"alt="Story Image" width:100%">',
    video2: '<video width="100%" height="400px"controls><source src="images/mahi.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    image3: '<img src="images/saree.jpeg"  height="500px"alt="Story Image" width:100%">',
    image4: '<img src="images/rk.jpeg"  height="500px"alt="Story Image" width:100%">',
    image5: '<img src="images/prk.jpeg"  height="500px"alt="Story Image" width:100%">',
    image6: '<img src="images/god5.jpeg"  height="500px"alt="Story Image" width:100%">',
    image7: '<img src="images/MSdhoni.jpeg"  height="500px"alt="Story Image" width:100%">',
    image8: '<img src="images/moon2.jpeg"  height="500px"alt="Story Image" width:100%">',
    image9: '<img src="images/moon1.jpeg"  height="500px"alt="Story Image" width:100%">',
    image10: '<img src="images/moon.jpeg"  height="500px"alt="Story Image" width:100%">',
    image11: '<img src="images/god1.jpeg"  height="500px"alt="Story Image" width:100%">',
    image12: '<img src="images/god2.jpeg"  height="500px"alt="Story Image" width:100%">',
    image13: '<img src="images/god3.jpeg"  height="500px"alt="Story Image" width:100%">',

   
};

// Add event listeners to story images
document.querySelectorAll('.stories-img').forEach((element) => {
    element.addEventListener('click', () => {
        console.log("Story image clicked.");
        const contentKey = element.getAttribute('data-content');
        const content = contentMap[contentKey];
        if (content) {
            console.log("Content found for key:", contentKey);
            showModal(content);
        } else {
            console.error('No content found for key:', contentKey);
        }
    });
});
