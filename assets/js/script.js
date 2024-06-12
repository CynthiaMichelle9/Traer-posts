async function getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const postData = document.getElementById('post-data');

    try {
        const response = await fetch(url);
        const data = await response.json();

        postData.innerHTML = '';

        const ul = document.createElement('ul');

        data.forEach(post => {
            const li = document.createElement('li');
            const title = document.createElement('h3');
            title.textContent = post.title;
            li.appendChild(title);

            const body = document.createElement('p');
            body.textContent = post.body;
            li.appendChild(body);

            ul.appendChild(li);
        });

        postData.appendChild(ul);
    } catch (error) {
        console.error('Error al obtener los posts:', error);
        postData.textContent = 'Error al obtener los posts. Por favor, inténtalo de nuevo más tarde.';
    }
}
