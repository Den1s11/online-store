document.addEventListener("DOMContentLoaded", function () {
    const purchaseForm = document.getElementById("purchase-form");

    purchaseForm.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const nameInput = document.getElementById("name");
        const userName = nameInput.value;

        
        alert(`${userName}, благодарим за поръчката!`);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("review-form");
    const reviewContainer = document.querySelector(".user-reviews");

    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const commentInput = document.getElementById("comment");
        const userComment = commentInput.value;

        
        commentInput.value = "";

        
        const newReview = document.createElement("div");
        newReview.classList.add("review");
        newReview.innerHTML = `<p>${userComment}</p>`;
        reviewContainer.prepend(newReview); 
    });
});

