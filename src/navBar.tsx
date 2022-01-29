import React from "react"

interface IProps{

}

interface IState{

}

export class NavBar extends React.Component<IProps, IState>{

	constructor(props){
		super(props)

	}

	render(){
		return(
			<div style = {{height:50, color: "black", backgroundColor: "gray", width: "100%", fontSize: 33, padding: 10, fontWeight: "bold"}}>
				Bread Calculator
			</div>
		)
	}
}