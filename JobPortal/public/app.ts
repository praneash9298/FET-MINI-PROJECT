const jobListings = [
    { title: "Software Engineer", company: "XYZ Tech", location: "City" },
    { title: "Web Developer", company: "ABC Solutions", location: "Town" },
    { title: "Graphic Designer", company: "Design Studio", location: "Creative City" },
    { title: "Marketing Specialist", company: "Marketing Pros", location: "Metro City" }
];

function renderJobListings(listings) {
    const jobListingsElement = document.querySelector('.job-listings');
    if (jobListingsElement) {
        jobListingsElement.innerHTML = ''; // Clear existing content
        listings.forEach(listing => {
            const jobCard = document.createElement('div');
            jobCard.classList.add('job-card');
            jobCard.innerHTML = `
                <h3>${listing.title}</h3>
                <p>Company: ${listing.company}</p>
                <p>Location: ${listing.location}</p>
                <button class="apply-now">Apply Now</button>
            `;
            jobListingsElement.appendChild(jobCard);
        });
    }
}
// Render the initial job listings
renderJobListings(jobListings);
// Example of adding event listener
document.querySelector('.search-bar button')?.addEventListener('click', () => {
    const searchTerm = (document.querySelector('.search-bar input') as HTMLInputElement).value.toLowerCase();
    const filteredListings = jobListings.filter(listing => listing.title.toLowerCase().indexOf(searchTerm) !== -1);
    renderJobListings(filteredListings);
});

// Adding event listener for "Apply Now" buttons
document.querySelectorAll('.apply-now').forEach(button => {
    button.addEventListener('click', () => {
        // Handle Apply Now button click event here
        // For example, you can redirect to the application form page
        window.location.href = 'job_application_form_ajax.html';
    });
});
