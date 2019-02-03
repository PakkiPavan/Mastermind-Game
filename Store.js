

export function mapStateToProps(state)
{
	return{
		color:state.color,
		check:state.check,
		index:state.index,
		row:state.row,
		enable:state.enable,
		colors:state.colors,
		code:state.code,
		flag:state.flag,
		question:state.question
		
	}
}
export function mapDispatchToProps(dispatch)
{
	return{
		currentColor:(e)=>{
			dispatch({type:"currentColor",value:e.target.value});
			//console.log(e.target.value)
		},
		checkEnable:()=>{
			dispatch({type:"checkEnable"})
		},
		incIndex:()=>{
			dispatch({type:"incIndex"})
		},
		incRow:()=>{
			dispatch({type:"incRow"})
		},
		enableCheck:()=>{
			dispatch({type:"enableCheck"})
		},
		setFlag:()=>{
			dispatch({type:"setFlag"})
		},
		remQuestion:()=>{
			dispatch({type:"remQuestion"})
		}
	}
}
