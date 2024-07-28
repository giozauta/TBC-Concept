
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-button');
    const dropdownContainer = document.getElementById('dropdown-container');
    const fullWidthDropdown = document.getElementById('full-width-dropdown');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = button.getAttribute('data-target');
            const targetDropdown = document.getElementById(targetId);

            // Set position and width of dropdown container based on the button
            dropdownContainer.style.left = '0'; // Align to the left of the container
            dropdownContainer.style.width = '100%'; // Span the entire width

            // Set position and width of the individual dropdown
            targetDropdown.style.left = `${button.offsetLeft}px`; // Align with button
            targetDropdown.style.width = `${button.offsetWidth}px`;
            targetDropdown.style.top = `${button.offsetHeight-79}px`; // Position directly below the button
            
            // Toggle the individual dropdown
            targetDropdown.classList.toggle('active');
            
            // Toggle the full-width dropdown visibility
            if (targetDropdown.classList.contains('active')) {
                fullWidthDropdown.style.display = 'block'; // Show full-width dropdown
            } else {
                fullWidthDropdown.style.display = 'none'; // Hide full-width dropdown
            }
            
            // Show the dropdown container
            dropdownContainer.style.display = 'block';
            
            // Hide all other dropdowns except the clicked one
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                if (dropdown !== targetDropdown) {
                    dropdown.classList.remove('active');
                }
            });
        });
    });


    // Close the dropdown container if clicking outside of it
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-panel') && !event.target.closest('#dropdown-container') && !event.target.closest('#full-width-dropdown')) {
            dropdownContainer.style.display = 'none';
            fullWidthDropdown.style.display = 'none'; // Hide the full-width dropdown
            
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});




/* for making bakground images*/

        var images = [
            'src/img/night.png',
            'src/img/umbrela.jpg',
            'src/img/carservic.png',
            'src/img/tegeta.png',
            'src/img/pool.png',
            'src/img/colosseum.png'
        ];

        // Array of class names
        var classNames = [
            'banner-image1',
            'banner-image2',
            'banner-image3',
            'banner-image4',
            'banner-image5',
            'banner-image6'
        ];

        // Loop through each class name and set the background image
        for (var i = 0; i < classNames.length; i++) {
            var element = document.querySelector('.' + classNames[i]);
            if (element && i < images.length) {  // Check if the element exists and the index is within the range of images
                element.style.backgroundImage = `url('${images[i]}')`;
            }
        }

/*for magnifire display*/
const showButton = document.querySelector('.magnifire');
const hideButton = document.querySelector('.magnifying-svg');
const container = document.querySelector('.search-magnifying');

showButton.addEventListener('click', () => {
    container.style.display = 'block';
});

hideButton.addEventListener('click', () => {
    container.style.display = 'none';
});



/*for stiky button functionality*/

document.querySelector(".toggle-button").addEventListener("click", () => {  
    const elements = document.querySelectorAll(".h-button-toggle");
    const dotsvg = document.querySelector(".dot-svg");
    const xsvg = document.querySelector(".x-svg");        

    elements.forEach(element => {
        element.classList.toggle("active");           
    });

    dotsvg.classList.toggle("active");
    xsvg.classList.toggle("active2");
});