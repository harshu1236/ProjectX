// Search profiles by name
function searchProfiles() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const profiles = document.getElementsByClassName('profile-card');

    Array.from(profiles).forEach(profile => {
        const name = profile.querySelector('h3').textContent.toLowerCase();
        if (name.includes(input)) {
            profile.style.display = 'block';
        } else {
            profile.style.display = 'none';
        }
    });
}

// Apply filters based on institute, year, and subject
function applyFilters() {
    const institute = document.getElementById('instituteFilter').value;
    const year = document.getElementById('yearFilter').value;
    const subject = document.getElementById('subjectFilter').value;

    const profiles = document.getElementsByClassName('profile-card');

    Array.from(profiles).forEach(profile => {
        const profileInstitute = profile.getAttribute('data-institute');
        const profileYear = profile.getAttribute('data-year');
        const profileSubject = profile.getAttribute('data-subject');

        if (
            (institute === "" || profileInstitute === institute) &&
            (year === "" || profileYear === year) &&
            (subject === "" || profileSubject === subject)
        ) {
            profile.style.display = 'block';
        } else {
            profile.style.display = 'none';
        }
    });
}
