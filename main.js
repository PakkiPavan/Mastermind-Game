import React from 'react';
import './MM.css';
import {connect} from 'react-redux';
import {mapStateToProps,mapDispatchToProps} from './MMStore';
//import styled from 'styled-components';

class MM1 extends React.Component
{
	componentDidMount()
	{
		var u=[]
		while(u.length<4)
		{
			var rn=Math.floor(Math.random()*7);
			if(u.indexOf(rn)===-1)
				u.push(rn)
		}
		
		
		//console.log(u)
		for(var i=0;i<u.length;i++)
		{
			this.props.code.push(this.props.colors[u[i]])
		}
		console.log(this.props.code)
		/*var board=document.getElementById('board')
		for(i=0;i<4;i++)
		{
			board.childNodes[board.childNodes.length-1].childNodes[i].style.backgroundColor=this.props.code[i]
		}*/
		//console.log()
	}
	change(e)
	{
		//var x=document.getElementById(e.target.id);
		//x.style.backgroundColor=this.props.color;
		//console.log(x.style)
		var board=document.getElementById("board");
		//console.log(e.target.id);
		var c=0;
	    
		console.log(board.childNodes[this.props.index-1].childNodes[e.target.id[1]-1])
		if(e.target.id.length===2)
		{
			board.childNodes[this.props.index-1].childNodes[e.target.id[1]-1].style.backgroundColor=this.props.color;
		}	
		else
		{
			board.childNodes[this.props.index-1].childNodes[e.target.id[2]-1].style.backgroundColor=this.props.color;
		}
		for(var i=0;i<4;i++)
		{
			if(board.childNodes[this.props.row].childNodes[i].style.backgroundColor==="")
			{
				c++;
			}				
		}
		if(c===0)
		{
			//console.log("c=0")
			if(this.props.flag)
			{
				this.props.enableCheck()
				this.props.setFlag()
			}
				
		}
			
	}
	enable(e)
	{
		var board=document.getElementById("board");
		//console.log(board.childNodes[this.props.index-1])
		var temp=[]
		for(var i=0;i<4;i++)
		{
			temp.push(board.childNodes[this.props.index-1].childNodes[i].style.backgroundColor);	
		}
		var u=[]
		for(i=0;i<4;i++)
		{
			if(u.indexOf(board.childNodes[this.props.index-1].childNodes[i].style.backgroundColor)===-1)
			{
				u.push(board.childNodes[this.props.index-1].childNodes[i].style.backgroundColor);	
			}
			
		}
		console.log(u.length)
		console.log(temp.length)
		
		if(temp.length!==u.length)
			alert("Duplicate colors not allowed")
		else
		{
			board.childNodes[this.props.index].style.pointerEvents="auto";
			board.childNodes[this.props.index-1].style.pointerEvents="none";
			//console.log("CHECK");
			//console.log(board.childNodes[this.props.index-1].childNodes[e.target.id[1]-1])
			this.props.enableCheck();
			this.props.incIndex();
			this.props.incRow();
			this.props.setFlag();
			console.log(board.childNodes[this.props.index-1].childNodes[0].style.backgroundColor);
			var cp=0,cc=0;
			for(i=0;i<4;i++)
			{
				if(this.props.code[i]===board.childNodes[this.props.index-1].childNodes[i].style.backgroundColor)
					cp++;
				else if(this.props.code.includes(board.childNodes[this.props.index-1].childNodes[i].style.backgroundColor))
					cc++;
			}
			console.log(`cp=${cp} cc=${cc}`)
			if(cp===4)
				alert(`You won the game in ${this.props.index-1} attempts`)
			else
			{
				console.log(board.childNodes[this.props.index-1].childNodes[5].childNodes[0])
				for(i=0;i<cp;i++)
				{
					board.childNodes[this.props.index-1].childNodes[5].childNodes[i].style.backgroundColor="green"
				}
				for(i=cp;i<cp+cc;i++)
				{
					board.childNodes[this.props.index-1].childNodes[5].childNodes[i].style.backgroundColor="red"
				}
			}
		}
		
	}
	lose()
	{
		this.props.remQuestion();
		var board=document.getElementById('board')
		for(var i=0;i<4;i++)
		{
			board.childNodes[board.childNodes.length-1].childNodes[i].style.backgroundColor=this.props.code[i]
		}
		alert("Game Over")
	}
	render()
	{
		return( 
			<div id="board">
				<div className="colors">
					<button className="green" value="green" onClick={this.props.currentColor}></button>
					<button className="red" value="red" onClick={this.props.currentColor}></button>
					<button className="yellow" value="yellow" onClick={this.props.currentColor}></button>
					<button className="blue" value="blue" onClick={this.props.currentColor}></button>
					<button className="pink" value="pink" onClick={this.props.currentColor}></button>
					<button className="skyblue" value="skyblue" onClick={this.props.currentColor}></button>
					<button className="black" value="black" onClick={this.props.currentColor}></button>
				</div>
				<div className="">
					<button className="circle" value="11" id="11" onClick={this.change.bind(this)}></button>
					<button className="circle" value="12" id="12" onClick={this.change.bind(this)}></button>
					<button className="circle" value="13" id="13" onClick={this.change.bind(this)}></button>
					<button className="circle" value="14" id="14" onClick={this.change.bind(this)}></button>					
					<button value="15" id="15" onClick={this.enable.bind(this)} disabled={this.props.enable} className="check">Check</button>
					<div className="hint"><button className="hint-up" style={{left:'5px'}}></button><button className="hint-up" style={{right:'5px'}}></button><button className="hint-down" style={{left:'5px'}}></button><button style={{right:'5px'}} className="hint-down"></button></div>
				</div>
				<div className="row">
					<button className="circle" value="21" id="21" onClick={this.change.bind(this)}></button>
					<button className="circle" value="22" id="22" onClick={this.change.bind(this)}></button>
					<button className="circle" value="23" id="23" onClick={this.change.bind(this)}></button>
					<button className="circle" value="24" id="24" onClick={this.change.bind(this)}></button>					
					<button value="25" id="25" onClick={this.enable.bind(this)} disabled={this.props.enable} className="check">Check</button>
					<div className="hint"><button className="hint-up" style={{left:'5px'}}></button><button className="hint-up" style={{right:'5px'}}></button><button className="hint-down" style={{left:'5px'}}></button><button style={{right:'5px'}} className="hint-down"></button></div>
				</div>
				<div className="row">
					<button className="circle" value="31" id="31" onClick={this.change.bind(this)}></button>
					<button className="circle" value="32" id="32" onClick={this.change.bind(this)}></button>
					<button className="circle" value="33" id="33" onClick={this.change.bind(this)}></button>
					<button className="circle" value="34" id="34" onClick={this.change.bind(this)}></button>				
					<button onClick={this.enable.bind(this)} disabled={this.props.enable} className="check">Check</button>			
					<div className="hint"><button className="hint-up" style={{left:'5px'}}></button><button className="hint-up" style={{right:'5px'}}></button><button className="hint-down" style={{left:'5px'}}></button><button style={{right:'5px'}} className="hint-down"></button></div>
				</div>
				<div className="row">
					<button className="circle" value="41" id="41" onClick={this.change.bind(this)}></button>
					<button className="circle" value="42" id="42" onClick={this.change.bind(this)}></button>
					<button className="circle" value="43" id="43" onClick={this.change.bind(this)}></button>
					<button className="circle" value="44" id="44" onClick={this.change.bind(this)}></button>					
					<button onClick={this.enable.bind(this)} disabled={this.props.enable} className="check">Check</button>
					<div className="hint"><button className="hint-up" style={{left:'5px'}}></button><button className="hint-up" style={{right:'5px'}}></button><button className="hint-down" style={{left:'5px'}}></button><button style={{right:'5px'}} className="hint-down"></button></div>
				</div>
				<div className="row">
					<button className="circle" value="51" id="51" onClick={this.change.bind(this)}></button>
					<button className="circle" value="52" id="52" onClick={this.change.bind(this)}></button>
					<button className="circle" value="53" id="53" onClick={this.change.bind(this)}></button>
					<button className="circle" value="54" id="54" onClick={this.change.bind(this)}></button>					
					<button onClick={this.enable.bind(this)} disabled={this.props.enable} className="check">Check</button>
					<div className="hint"><button className="hint-up" style={{left:'5px'}}></button><button className="hint-up" style={{right:'5px'}}></button><button className="hint-down" style={{left:'5px'}}></button><button style={{right:'5px'}} className="hint-down"></button></div>
				</div>
				<div className="row">
					<button className="circle" value="61" id="61" onClick={this.change.bind(this)}></button>
					<button className="circle" value="62" id="62" onClick={this.change.bind(this)}></button>
					<button className="circle" value="63" id="63" onClick={this.change.bind(this)}></button>
					<button className="circle" value="64" id="64" onClick={this.change.bind(this)}></button>					
					<button onClick={this.enable.bind(this)} disabled={this.props.enable} className="check">Check</button>
					<div className="hint"><button className="hint-up" style={{left:'5px'}}></button><button className="hint-up" style={{right:'5px'}}></button><button className="hint-down" style={{left:'5px'}}></button><button style={{right:'5px'}} className="hint-down"></button></div>
				</div>
				<div className="row">
					<button className="circle" value="71" id="71" onClick={this.change.bind(this)}></button>
					<button className="circle" value="72" id="72" onClick={this.change.bind(this)}></button>
					<button className="circle" value="73" id="73" onClick={this.change.bind(this)}></button>
					<button className="circle" value="74" id="74" onClick={this.change.bind(this)}></button>					
					<button onClick={this.enable.bind(this)} disabled={this.props.enable} className="check">Check</button>
					<div className="hint"><button className="hint-up" style={{left:'5px'}}></button><button className="hint-up" style={{right:'5px'}}></button><button className="hint-down" style={{left:'5px'}}></button><button style={{right:'5px'}} className="hint-down"></button></div>
				</div>
				<div className="row">
					<button className="circle" value="81" id="81" onClick={this.change.bind(this)}></button>
					<button className="circle" value="82" id="82" onClick={this.change.bind(this)}></button>
					<button className="circle" value="83" id="83" onClick={this.change.bind(this)}></button>
					<button className="circle" value="84" id="84" onClick={this.change.bind(this)}></button>					
					<button onClick={this.enable.bind(this)} disabled={this.props.enable} className="check">Check</button>
					<div className="hint"><button className="hint-up" style={{left:'5px'}}></button><button className="hint-up" style={{right:'5px'}}></button><button className="hint-down" style={{left:'5px'}}></button><button style={{right:'5px'}} className="hint-down"></button></div>
				</div>
				<div className="row">
					<button className="circle" value="91" id="91" onClick={this.change.bind(this)}></button>
					<button className="circle" value="92" id="92" onClick={this.change.bind(this)}></button>
					<button className="circle" value="93" id="93" onClick={this.change.bind(this)}></button>
					<button className="circle" value="94" id="94" onClick={this.change.bind(this)}></button>					
					<button onClick={this.enable.bind(this)} disabled={this.props.enable} className="check">Check</button>
					<div className="hint"><button className="hint-up" style={{left:'5px'}}></button><button className="hint-up" style={{right:'5px'}}></button><button className="hint-down" style={{left:'5px'}}></button><button style={{right:'5px'}} className="hint-down"></button></div>
				</div>
				<div className="row">
					<button className="circle" value="101" id="101" onClick={this.change.bind(this)}></button>
					<button className="circle" value="102" id="102" onClick={this.change.bind(this)}></button>
					<button className="circle" value="103" id="103" onClick={this.change.bind(this)}></button>
					<button className="circle" value="104" id="104" onClick={this.change.bind(this)}></button>					
					<button onClick={this.lose.bind(this)} disabled={this.props.enable} className="check">Check</button>	
				</div>
				<div className="code">
					<button className="circle">{this.props.question}</button>
					<button className="circle">{this.props.question}</button>
					<button className="circle">{this.props.question}</button>
					<button className="circle">{this.props.question}</button>					
				</div>
				
			</div>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(MM1);
