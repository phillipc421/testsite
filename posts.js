export const getPosts = (addPostsFunction, skip = 0) => {
	fetch("https://dummyjson.com/posts?skip=" + skip)
		.then((data) => data.json())
		.then((posts) => addPostsFunction(posts.posts));
};
