
    const TweeterModule = function (){
        let commentIdCounter = 0
        let postIdCounter = 2
        const _posts = [
            {
                text: "First post!",
                id: "p1",
                comments: [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            {
                text: "Aw man, I wanted to be first",
                id: "p2",
                comments: [
                    { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            }
        ]
         
        const getPosts = function (){
            return _posts
        }
    
        const addPost = function (text){
            postIdCounter++
            const newPost = {id: "p" + postIdCounter, text, comments : []}
            _posts.push(newPost)
        }
    
        const removePost = function(postID){
            postIdCounter = postIdCounter -1
            for (let i = 0; i < _posts.length; i++) {
                if (_posts[i].id === postID) {
                    _posts.splice(i, 1);
                    break;
                }
            }
        }
            const addComment = function (postID, text){
                for (let i = 0; i < _posts.length; i++) {
                    if (_posts[i].id === postID) {
                        commentIdCounter++;
                        const newComment = { id: "c" + commentIdCounter, text: text };
                        _posts[i].comments.push(newComment);
                        break;
                    }
                }
    
            }
    
            const removeComment = function (postId, commentId) {
                for (let i = 0; i < _posts.length; i++) {
                    if (_posts[i].id === postId) {
                        const comments = _posts[i].comments;
                        for (let j = 0; j < comments.length; j++) {
                            if (comments[j].id === commentId) {
                                comments.splice(j, 1);
                                return;
                            }
                        }
                        
                    }
                }
                
            }
            return {getPosts, addPost, removePost, addComment, removeComment}
    
        }    