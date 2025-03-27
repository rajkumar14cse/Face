document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.createElement("button");
    
    toggleButton.innerText = "☰";
    toggleButton.style.position = "fixed";
    toggleButton.style.right = "210px";
    toggleButton.style.top = "10px";
    toggleButton.style.color = "red";
    toggleButton.style.border = "none";
    toggleButton.style.padding = "30px"; // Initial size
    toggleButton.style.fontSize = "20px"; // Initial font size
    toggleButton.style.cursor = "pointer";
    toggleButton.style.transition = "all 0.3s ease"; // Smooth transition
    toggleButton.style.width = "20px";  // Reduce button width
    toggleButton.style.height = "30px";
    toggleButton.style.position = "absolute";
    toggleButton.style.backgroundColor ="pink";
   
    
    
    document.body.appendChild(toggleButton);
    
    toggleButton.addEventListener("click", () => {
        if (sidebar.style.right === "0px") {
            sidebar.style.right = "-200px";
        } else {
            sidebar.style.right = "0px";
        }
    }); 
    

    // Add hover effect for sidebar items
    document.querySelectorAll(".sidebar ul li a").forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
        });
        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });
});

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const featureBoxes = document.querySelectorAll(".feature-box");
    const totalCount = document.getElementById("totalCount");
    
    let activeCount = 0;

    featureBoxes.forEach(box => {
        box.addEventListener("click", () => {
            // Toggle active state
            if (box.classList.contains("active")) {
                box.classList.remove("active");
                activeCount--;
            } else {
                box.classList.add("active");
                activeCount++;
            }
            
            // Update total count
            totalCount.innerText = activeCount;
        });
    });
});

