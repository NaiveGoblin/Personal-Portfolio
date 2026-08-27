document.addEventListener("DOMContentLoaded", () => {

    // Create the modal
    const modal = document.createElement("div");

    modal.className = "Contact_Modal";
    modal.id = "contactModal";
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
        <div class="Contact_Modal_Backdrop"></div>

        <div
            class="Contact_Modal_Content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contactModalTitle">

            <button
                class="Contact_Modal_Close"
                type="button"
                aria-label="Close contact form">
                ×
            </button>

            <div class="Contact_Modal_Header">

                <span class="Section_Label">
                    CONTACT
                </span>

                <h2 id="contactModalTitle">
                    Let's talk.
                </h2>

                <p>
                    Have a project in mind, an idea you want to explore,
                    or just want to say hello?
                </p>

            </div>

            <form class="Contact_Form" action="https://formsubmit.co/5c6235fb87763499c92dcf9d8063c66c" method="POST">

                <div class="Contact_Form_Row">

                    <label>
                        <span>Name</span>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required>
                    </label>

                    <label>
                        <span>Email</span>

                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            required>
                    </label>

                </div>

                <label>
                    <span>Message</span>

                    <textarea
                        type="text"
                        name="message"
                        rows="6"
                        placeholder="Tell me a little about your project..."
                        required></textarea>
                </label>

                <button
                    class="Contact_Form_Submit"
                    type="submit">
                    Send message →
                </button>

            </form>

        </div>
    `;

    // Add modal to the page
    document.body.appendChild(modal);


    // Elements
    const backdrop = modal.querySelector(".Contact_Modal_Backdrop");
    const closeButton = modal.querySelector(".Contact_Modal_Close");
    const firstInput = modal.querySelector("input");


    // Open
    window.openContactModal = function () {

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("modal-open");

        setTimeout(() => {
            firstInput.focus();
        }, 300);
    };


    // Close
    window.closeContactModal = function () {

        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modal-open");
    };


    // Close button
    closeButton.addEventListener("click", closeContactModal);


    // Click outside modal
    backdrop.addEventListener("click", closeContactModal);


    // Escape key
    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("is-open")
        ) {
            closeContactModal();
        }

    });

});
