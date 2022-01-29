import React from "react"

interface IProps{

}

interface IState{

}

export class GridRenderer extends React.Component<IProps, IState>{
	/** 
	 * Renders contents in a grid that is dynamically adapting to screen size 
	 * 
	*/
	
	constructor(props){
		
		super(props)
		
	}

	render(){
		return(
			<div style={{maxWidth:2000, padding: 20, display : "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: 20}}>
				<div style = {{color: "white", backgroundColor: "black", borderRadius: 4, padding: 10}}> One </div>
				<div style = {{color: "white", backgroundColor: "black", borderRadius: 4, padding: 10}}> Two </div>
				<div style = {{color: "white", backgroundColor: "black", borderRadius: 4, padding: 10}}> Three </div>
			</div>
		)
	}
}