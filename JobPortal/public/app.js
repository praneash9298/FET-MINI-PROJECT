var _a;
var jobListings = [
    { title: "Software Engineer", company: "XYZ Tech", location: "City" },
    { title: "Web Developer", company: "ABC Solutions", location: "Town" },
    { title: "Graphic Designer", company: "Design Studio", location: "Creative City" },
    { title: "Marketing Specialist", company: "Marketing Pros", location: "Metro City" }
];
function renderJobListings(listings) {
    var jobListingsElement = document.querySelector('.job-listings');
    if (jobListingsElement) {
        jobListingsElement.innerHTML = ''; // Clear existing content
        listings.forEach(function (listing) {
            var jobCard = document.createElement('div');
            jobCard.classList.add('job-card');
            jobCard.innerHTML = "\n                <h3>".concat(listing.title, "</h3>\n                <p>Company: ").concat(listing.company, "</p>\n                <p>Location: ").concat(listing.location, "</p>\n                <button class=\"apply-now\">Apply Now</button>\n            ");
            jobListingsElement.appendChild(jobCard);
        });
    }
}
// Render the initial job listings
renderJobListings(jobListings);
// Example of adding event listener
(_a = document.querySelector('.search-bar button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var searchTerm = document.querySelector('.search-bar input').value.toLowerCase();
    var filteredListings = jobListings.filter(function (listing) { return listing.title.toLowerCase().indexOf(searchTerm) !== -1; });
    renderJobListings(filteredListings);
});
// Adding event listener for "Apply Now" buttons
document.querySelectorAll('.apply-now').forEach(function (button) {
    button.addEventListener('click', function () {
        // Handle Apply Now button click event here
        // For example, you can redirect to the application form page
        window.location.href = 'job_application_form_ajax.html';
    });
});
