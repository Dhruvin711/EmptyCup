document.addEventListener('DOMContentLoaded', function () {
    const shortlistBtns = document.querySelectorAll('.shortlist a');

    // Shortlist toggle functionality
    shortlistBtns.forEach((button, index) => {
        button.addEventListener('click', () => toggleShortlist(index));
    });

    function toggleShortlist(index) {
        const shortlistIcon = document.getElementById(`shortlist-icon-${index}`);
        const card = document.getElementById(`card-${index}`);

        data[index].shortlist = 1 - data[index].shortlist;

        if(data[index].shortlist === 1) {
            shortlistIcon.src = "/static/images/card/shortlist-1.svg";
            shortlistIcon.classList.add("shortlist-1");
            shortlistIcon.classList.remove("shortlist-0");
        } 
        else {
            shortlistIcon.src = "/static/images/card/shortlist-0.svg";
            shortlistIcon.classList.add("shortlist-0");
            shortlistIcon.classList.remove("shortlist-1");
        }

        // Check if the shortlist filter is active
        if (shortlistNavBtn.classList.contains('active')) {
            card.style.display = data[index].shortlist === 1 ? "flex" : "none";
        }
    }

    
    // Shortlisted filter toggle functionality
    const shortlistNavBtn = document.querySelector('.shortlist-nav-icon');

    shortlistNavBtn.addEventListener('click', toggleShortlistFilter);

    function toggleShortlistFilter() {
        if(shortlistNavBtn.classList.contains('active')){
            shortlistNavBtn.src = "/static/images/navbar/shortlisted-0.svg";
        }
        else{
            shortlistNavBtn.src = "/static/images/navbar/shortlisted-1.svg";
        }

        shortlistNavBtn.classList.toggle('active');


        // Update the display of each card based on the shortlist filter
        data.forEach((card, index) => {
            const cardElement = document.getElementById(`card-${index}`);
            const shortlistIcon = document.getElementById(`shortlist-icon-${index}`);

            if(shortlistNavBtn.classList.contains('active')) {
                // If the filter is active, hide or show the card based on shortlist status
                cardElement.style.display = card.shortlist === 1 ? "flex" : "none";
            } 
            else {
                // If the filter is inactive, always show the card
                cardElement.style.display = "flex";
            }
        });
    }
});