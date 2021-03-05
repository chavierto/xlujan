import React from 'react';
import posts from './posts';

function PostsPanel() {
	// Function mediaChooser defines conditional rendering of post video vs. image
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
		// this can be extracted into its own 'Post' component
		<div>
			<h1>Projects:</h1>
			{posts.map((post) => {
				return (
					<div key={post.id}>
						{/* post title */}
						<h2>
							<a href={post.url} target='_blank' rel='noreferrer'>
								{post.title}
							</a>{' '}
						</h2>
						{/* use mediaChooser function to select what media to display */}
						{mediaChooser(post)}

						{/* Display post body with link to deployed app & github repo */}
						<p>
							{post.body}
							<h3>
								<a href={post.url} target='_blank' rel='noreferrer'>
									Link to deployed app
								</a>
							</h3>
							<h3>
								<a href={post.github} target='_blank' rel='noreferrer'>
									Link to Github repo.
								</a>
							</h3>
						</p>
					</div>
				);
			})}
		</div>
	);
}

export default PostsPanel;
