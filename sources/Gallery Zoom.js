    // Create the zoom overlay
    const overlay = document.createElement("div");
    overlay.id = "imageZoomOverlay";

    overlay.innerHTML = `
        <button id="imageZoomClose" aria-label="Close image">&times;</button>
        <img id="imageZoomed" src="" alt="">
    `;

    document.body.appendChild(overlay);

    const zoomedImage = document.getElementById("imageZoomed");
    const closeButton = document.getElementById("imageZoomClose");

    // Make every project image clickable
    document.querySelectorAll(
        ".Project_Main_Image img, .Project_Gallery_Image img"
    ).forEach(image => {

        image.style.cursor = "zoom-in";

        image.addEventListener("click", () => {
            zoomedImage.src = image.src;
            zoomedImage.alt = image.alt;

            overlay.classList.add("active");
        });
    });

    // Close with X
    closeButton.addEventListener("click", () => {
        overlay.classList.remove("active");
    });

    // Close when clicking the dark background
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.classList.remove("active");
        }
    });

    // Close with Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            overlay.classList.remove("active");
        }
    });