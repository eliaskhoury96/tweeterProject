const Renderer = function () {
  const renderPost = function (_posts) {
      $("#posts").empty();
       
      
      for (let post of _posts) {
          const postHTML = $(`<div class="post" data-id="${post.id}"><span class="post-text">${post.text}</span> <button class="delete-post-button">Delete Post</button> <input class="comment-input" type="text" placeholder="addComment"><button class="add-comment-button">Add Comment</button>
          </div>`);
          $("#posts").append(postHTML);

          for (let comment of post.comments) {
              const cmntHTML = $(`<div class="comment" data-id="${comment.id}"><button class="delete-comment">X</button> ${comment.text}
              </div>`);
              postHTML.append(cmntHTML);
          }
      }
  };

  return { renderPost };
};

