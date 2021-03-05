const posts = [
	{
		id: 2,
		url: 'https://record-collection-xl.herokuapp.com/',
		title: 'Record Collection',
		img: null,
		body:
			"Record Collection is an app created to catalog and organize your music records. It's built on React, JavaScript, Django, Python and PostgreSQL.",
		videoLink: 'https://www.youtube.com/embed/-OSjIRVcOYA',
		github: 'https://github.com/chavierto/record-collection',
	},
	{
		id: 1,
		url: 'https://glacial-plateau-84495.herokuapp.com/',
		title: 'Tern',
		img:
			'https://user-images.githubusercontent.com/62493112/95257720-bf6cf100-07f2-11eb-9870-efd5ebd6b13e.png',
		body:
			"Tern is a to-do app I made in collaboration with three other developers. We wanted to have a place where we could add to-do items and be able to edit them and mark them as complete. We then though about adding a number value so we could prioritize items and give them a visual reference of the priority. Finally, we added a to-do view and a completed view, in order to only see relevant to-do's. I worked primarily on the backend, where we used MongoDB, Mongoose and Express (and React on the frontend), resulting in the ability to perform full CRUD operations to the database in order to add, edit and delete to-do items.",
		videoLink: null,
		github: 'https://github.com/tern-app/frontend',
	},
	{
		id: 0,
		url: 'https://secure-peak-57532.herokuapp.com/',
		title: 'Carpe Diem Dashboard',
		img: null,
		body:
			"Carpe Diem is a dashboard designed to get users ready for the day. Relevant information helps users decide how to go about it by showing them the top news and an inspirational quote. Coming updates will incorporate their To-Do's a weather info panel and their schedule for a more rounded overview.",
		videoLink: 'https://www.youtube.com/embed/CslKNkWcGa4',
		github: 'https://github.com/chavierto/carpe-diem',
	},
];

export default posts;
