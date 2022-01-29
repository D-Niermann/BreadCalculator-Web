import React from "react"
import "./ingredientRow.css"

interface IProps{

}

interface IState{

}

export class IngredientRow extends React.Component<IProps, IState>{

	constructor(props){
		super(props)

	}

	render(){
		return(
			<div style={{display: "flex", padding: 3}}>
				<input className = "totals_input" type="text" style={{width : "42%"}}></input>
				<br></br>
			</div>
		)
	}
}