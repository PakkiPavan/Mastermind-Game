import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';


class MMHome extends React.Component
{
	render()
	{
		return(
			<div>
				<Link to="/play"><button style={{position:'absolute',left:'35%',backgroundColor:'pink',border:'none',cursor:'pointer',padding:'15px',fontSize:'20px',margin:'10px'}}>Play game</button><br/></Link>
				<Link to="/rules"><button style={{position:'absolute',left:'35%',top:'172px',backgroundColor:'pink',border:'none',cursor:'pointer',padding:'15px',fontSize:'20px',margin:'10px'}}>How to Play</button><br/></Link>
				<div className="copyrights">
					&copy; Copyrights Pavan Pakki 2019
				</div>
			</div>
		
		);
	}
}

export default MMHome;
