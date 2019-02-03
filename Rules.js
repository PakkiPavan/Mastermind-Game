import React from 'react';
import './MM.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';

class Rules extends React.Component
{
	render()
	{
		return(
			<div className="rules">
				<Link to="/"><button style={{backgroundColor:'pink',border:'none',cursor:'pointer',padding:'15px',fontSize:'20px',margin:'10px'}}>Home</button><br/></Link>
				<b>How to play?</b><br/><br/>
				&emsp;At the beginning of each game the computer generates a secret code of four colors. <br/>
				The colors are always chosen from the seven colors. Duplicates are not allowed.<br/>
				The objective is to guess the secret code. You have to guess the colors and put them in the same order as they are in the secret code.<br/>
				Choose four colors in the next available row and then click on the Check button. The computer will score your guess in the following way: <br/>
				&emsp;•For each guess that is right in both color and position you will get a green point <br/> 
				&emsp;•For each guess that is right in color but not in position you will get a red point<br/>
				You have ten chances to guess the correct code, if you exhaust all of them without guessing the code, you lost the game and the secret code will be displayed in the last row.<br/><br/>
				&emsp;Good Luck!
				<div className="copyrights">
					&copy; Copyrights Pavan Pakki 2019
				</div>
		

			</div>
		)
	}
}


export default Rules;
