var React = require('react');

var About = (props) => {
	return(
		<div>
			<h1 className="text-center">About</h1>
			<p>This is a weather application built on react. I've built this for the complete react webapp developer course.</p>
			<p>Here are some of the tools I've used.</p>
			<ul>
				<li><a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.</li>
				<li><a href="http://openweathermap.org">Open weather map</a> - I used open weather map to search for data by city name.</li>
			</ul>
		</div>
	)
};

module.exports = About;