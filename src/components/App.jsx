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
  		<div>
      		<a className="btn btn-danger" href="#">Hi World!</a>
    	</div>
    );
  }
});