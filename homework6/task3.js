fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        for (let item of json) {
            if (item.id < 10) {
                console.log(item);
            }
        }
    });
