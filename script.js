function showQuestion() {
    document.getElementById('question').style.display = 'block';
}

function respond(answer) {
    let responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '';
    
    if (answer === 'Yes') {
        let images = [
            "https://i.ibb.co/0BLzYtV/1.jpg",
            "https://i.ibb.co/grPtGNM/2.jpg",
            "https://i.ibb.co/MBBG78G/3.jpg",
            "https://i.ibb.co/Y3P45Rz/4.jpg",
            "https://i.ibb.co/NWht2sm/5.jpg"
        ];

        let container = document.querySelector('.container');
        let containerRect = container.getBoundingClientRect();
        
        images.forEach(src => {
            let img = document.createElement('img');
            img.src = src;
            img.style.position = 'absolute'; // Ensure the image is positioned absolutely
            
            // Set a fixed width and height for the images
            let imgWidth = 100; // Adjust this value according to your actual image width
            let imgHeight = 100; // Adjust this value according to your actual image height
            
            let newTop = Math.random() * (containerRect.height - imgHeight);
            let newLeft = Math.random() * (containerRect.width - imgWidth);
            
            img.style.width = imgWidth + 'px'; // Set the image width
            img.style.height = imgHeight + 'px'; // Set the image height
            img.style.top = newTop + 'px';
            img.style.left = newLeft + 'px';
            responseDiv.appendChild(img);
        });
    } else {
        responseDiv.innerHTML = "<h2>Oh no! Maybe next time.</h2>";
    }
    responseDiv.style.display = 'block';
}

function moveNoButton() {
    let noButton = document.getElementById('noButton');
    let container = document.querySelector('.container');
    
    let containerRect = container.getBoundingClientRect();
    let buttonRect = noButton.getBoundingClientRect();
    
    let newLeft = Math.random() * (containerRect.width - buttonRect.width);
    let newTop = Math.random() * (containerRect.height - buttonRect.height);
    
    noButton.style.position = 'absolute'; // Ensure the button is positioned absolutely
    noButton.style.left = newLeft + 'px';
    noButton.style.top = newTop + 'px';
}
