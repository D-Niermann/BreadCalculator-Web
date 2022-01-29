import React from "react"
import {IngredientRow} from "./IngredientRow"

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
			<div style={{maxWidth:2000, padding: 20, display : "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 700px))", gap: 20}}>
				<div style = {{fontSize: 24 , color: "white", backgroundColor: "black", borderRadius: 4, padding: 10}}> One: <IngredientRow/><IngredientRow/> <IngredientRow/> </div>
				<div style = {{fontSize: 24 , color: "white", backgroundColor: "black", borderRadius: 4, padding: 10}}> Two </div>
				<div style = {{fontSize: 24 , color: "white", backgroundColor: "black", borderRadius: 4, padding: 10}}> Three </div>
			</div>
		)
	}
}