const button = document.getElementById('button')

button.addEventListener('click', () => {
    axios({
        method:'POST',
        url:'https://jsonplaceholder.typicode.com/users',
        data:{
            title:'New Post',
            body:'lorem ipsum',
            UserId: 1
        }
    }).then(res=>console.log(res.data))
})