import { getPosts } from "./posts.js";

const postsSection = document.querySelector("#posts");
const postsSectionTitle = postsSection.querySelector("h2");
const postsForwardBtn = document.querySelector("#forward-posts");
const postsBackBtn = document.querySelector("#back-posts");

const postFunction = (posts) => {
	postsSectionTitle.textContent =
		postsTitleText +
		" (" +
		(postPagination + 1) +
		" - " +
		(postPagination + postsLimit) +
		")";
	const postList = document.createElement("ul");
	postList.id = "posts-list";
	posts.forEach((post) => {
		const postEl = document.createElement("li");
		const title = document.createElement("h3");
		title.append(post.title);
		const body = document.createElement("p");
		body.append(post.body);
		const postContainer = document.createElement("article");
		postContainer.append(title, body);
		postEl.append(postContainer);
		postList.append(postEl);
	});
	postsSection.append(postList);
};

let postPagination = 0;
let postsLimit = 30;
const postsTotal = 150;
const postsTitleText = "Posts";

// page load
getPosts(postFunction, postPagination);

postsForwardBtn.addEventListener("click", () => {
	postPagination += postsLimit;
	if (postPagination === postsTotal) {
		postPagination = 0;
	}
	// clear existing posts
	clearPosts();
	getPosts(postFunction, postPagination);
});
postsBackBtn.addEventListener("click", () => {
	postPagination -= postsLimit;
	if (postPagination < 0) {
		postPagination = 120;
	}
	// clear existing posts
	clearPosts();
	getPosts(postFunction, postPagination);
});

const clearPosts = () => {
	const postsList = document.querySelector("#posts-list");
	if (postsList) {
		postsList.remove();
	}
};
