import React from 'react';
import posts from './posts';

function PostsPanel() {
	// Function for conditional display of video vs. image
	function mediaChooser(post) {
		if (post.videoLink && post.videoLink != null) {
			return (
				<iframe
					title={post.title}
					class='media'
					src={post.videoLink}
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
			);
		} else {
			return <img alt={post.title} className='media' src={post.img}></img>;
		}
	}

	return (
		// map out individual post from 'posts'
		<div>
			<h1>Projects:</h1>
			{posts.map((post) => {
				return (
					<div key={post.id}>
						<h2>
							<a href={post.url} target='_blank' rel='noreferrer'>
								{post.title}
							</a>{' '}
						</h2>
						{mediaChooser(post)}
						<p>{post.body}</p>
					</div>
				);
			})}
		</div>
	);
}

export default PostsPanel;
