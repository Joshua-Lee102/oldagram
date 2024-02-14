const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function renderPost(post) {
    
    const sectionOne = document.createElement('div');
    sectionOne.className = 'section-one';

    const avatar = document.createElement('img');
    avatar.src = post.avatar;
    avatar.className = 'post-avatar';

    const name = document.createElement('h3');
    name.className = 'name';
    name.textContent = post.name;

    const location = document.createElement('p');
    location.className = 'location';
    location.textContent = post.location;

    const postImage = document.createElement('img');
    postImage.src = post.post;
    postImage.id = 'post';

    const icons = document.createElement('div');
    icons.className = 'icons';

    const iconHeart = document.createElement('img');
    iconHeart.src = 'images/icon-heart.png';
    iconHeart.id = 'heart-icon';

    const iconComment = document.createElement('img');
    iconComment.src = 'images/icon-comment.png';
    iconComment.id = 'comment-icon';

    const iconDm = document.createElement('img');
    iconDm.src = 'images/icon-dm.png';
    iconDm.id = 'dm-icon';

    icons.appendChild(iconHeart);
    icons.appendChild(iconComment);
    icons.appendChild(iconDm);

    const likes = document.createElement('h3');
    likes.className = 'likes';
    likes.textContent = `${post.likes} likes`;

    const comment = document.createElement('p');
    comment.className = 'comment';
    comment.innerHTML = `<span class='comment-username'>${post.username}</span> ${post.comment}`;
    
    const spaceBelow = document.createElement('div')
    spaceBelow.className = 'spaceBelow'
    spaceBelow.texContent = ""
    
    function increaseLikes(){
        post.likes++
        likes.textContent = `${post.likes} likes` 
    }
    
    //Couldn't get dbclick to work
    iconHeart.addEventListener("click", increaseLikes)
    postImage.addEventListener("click", increaseLikes)
    
    sectionOne.appendChild(avatar);
    sectionOne.appendChild(name);
    sectionOne.appendChild(location);

    document.body.appendChild(sectionOne);
    document.body.appendChild(postImage);
    document.body.appendChild(icons);
    document.body.appendChild(likes);
    document.body.appendChild(comment);
    document.body.appendChild(spaceBelow);
}

posts.forEach(post => renderPost(post));
