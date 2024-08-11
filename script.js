document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    toggleButton.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        toggleButton.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
        localStorage.setItem('theme', newTheme);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');
    
    // Fetch the JSON file containing blog posts
    fetch('data/posts.json')
        .then(response => response.json())
        .then(posts => {
            // Iterate over each blog post and create an HTML structure to display it
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('blog-post');
                
                const titleElement = document.createElement('h2');
                titleElement.textContent = post.title;
                
                const dateElement = document.createElement('p');
                dateElement.textContent = `Posted on: ${post.date}`;
                dateElement.classList.add('blog-date');
                
                const contentElement = document.createElement('p');
                contentElement.textContent = post.content;
                contentElement.classList.add('blog-content');
                
                postElement.appendChild(titleElement);
                postElement.appendChild(dateElement);
                postElement.appendChild(contentElement);
                
                blogList.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
});
