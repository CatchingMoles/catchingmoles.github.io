        // Prevent Cross-Site Scripting (XSS)
        function sanitizeHTML(str) {
            var temp = document.createElement('div');
            temp.textContent = str;
            return temp.innerHTML;
        }

        // Validate and add comments
        function validateComment() {
            const name = document.getElementById('name').value.trim();
            const comment = document.getElementById('comment').value.trim();

            if (name === "" || comment === "") {
                alert("Both name and comment are required!");
                return false;
            }

            // Sanitize input to prevent XSS
            const sanitizedName = sanitizeHTML(name);
            const sanitizedComment = sanitizeHTML(comment);

            addComment(sanitizedName, sanitizedComment);
            document.getElementById('comment-form').reset();
            return false; // Prevent form submission
        }

        function addComment(name, comment) {
            const commentList = document.getElementById('comment-list');
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;
            commentList.appendChild(newComment);
        }