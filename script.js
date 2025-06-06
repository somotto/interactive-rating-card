document.addEventListener('DOMContentLoaded', () => {
    const ratingCard = document.getElementById('rating-card');
    const thankYouCard = document.getElementById('thank-you-card');
    const ratingBtns = document.querySelectorAll('.rating-btn');
    const submitBtn = document.getElementById('submit-rating');
    const ratingValue = document.getElementById('rating-value');
    
    let selectedRating = null;

    // Handle rating button clicks
    ratingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove selected class from all buttons
            ratingBtns.forEach(b => b.classList.remove('selected'));
            // Add selected class to clicked button
            btn.classList.add('selected');
            selectedRating = btn.value;
        });
    });

    // Handle submit button click
    submitBtn.addEventListener('click', () => {
        if (selectedRating) {
            ratingValue.textContent = selectedRating;
            ratingCard.classList.add('hidden');
            thankYouCard.classList.remove('hidden');
        } else {
            alert('Please select a rating before submitting');
        }
    });
});
