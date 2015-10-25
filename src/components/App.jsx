import React from 'react';

export default React.createClass({
  render: function() {
    return (
    		<Main/>
    );
  }
});

var Main = React.createClass({ 
  render: function(){
  	return (
  		<div className='main'>
      		<Header/>
      		<Nav/>
      		<Article/>
      		<Footer/>
    	</div>
    );
  }
});


var Header = React.createClass({
	render() {
		return (
			<header className='header'>
				<h1>ListUs</h1>
			</header>
		);
	}
});

var Nav = React.createClass({
	render: function(){
		return (
			<nav className='nav'>
			</nav>
		);
	}
});

var Article = React.createClass({
	render: function(){
		return (
			<article className='article'>

			</article>
		);
	}
});

var Footer = React.createClass({
	render: function(){
		return (
			<footer className='footer'>
			</footer>
		);
	}
});

