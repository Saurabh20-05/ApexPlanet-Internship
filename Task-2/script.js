document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".form").addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const nameCheck = /^[A-Za-z\s]+$/;
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            return alert("Name is required.");
        } else if (!nameCheck.test(name)) {
            return alert("Name can only contain letters.");
        }

        if (!email) {
            return alert("Please enter your email address.");
        }

        if (!emailCheck.test(email)) {
            return alert("Please enter a valid email address.");
        }

        alert("Form Submitted Successfully!");
        e.target.submit();
    });
});





document.addEventListener("DOMContentLoaded", function () {

    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("task-list");
    
    document.getElementById("add-task").addEventListener("click", function () {
        const task = taskInput.value.trim();
        if (task) {
            const li = document.createElement("li");
            li.textContent = task;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-task");
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-task")) {
            e.target.parentElement.remove();
        }
    });




    const imageUrlInput = document.getElementById("image-url");
    const gallery = document.getElementById("image");
    
    document.getElementById("add-image").addEventListener("click", function () {
        const imageUrl = imageUrlInput.value.trim();
        if (imageUrl) {
            const div = document.createElement("div");
            div.classList.add("image-container");
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = "Gallery Image";
            img.onerror = function () {
                img.src = 'image.jpg';
                img.alt = 'Image unable to load.';
            };
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-image");
            div.appendChild(img);
            div.appendChild(deleteBtn);
            gallery.appendChild(div);
            imageUrlInput.value = "";
        }
    });

    gallery.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-image")) {
            e.target.parentElement.remove();
        }
    });

    

});
