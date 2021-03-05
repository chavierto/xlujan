import React from 'react';
import posts from './posts';

function PostsPanel() {
	return (
		<div>
			<h1>Projects:</h1>
			{posts.map((post) => {
				return (
					<div key={post.id}>
						<img alt={post.title} className='media'
                        src={post.img}></img>
						<h2>
							<a href={post.url} target='_blank' rel='noreferrer'>
								{post.title}
							</a>
						</h2>
						<p>{post.body}</p>
					</div>
				);
			})}
		</div>
	);
}

export default PostsPanel;
