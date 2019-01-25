import React from "react"
import "./index.css"

export default class TabsContainer extends React.Component{
	constructor(){
		super()
		this.state = { 
			currentIndex : 0
		}
	}

	check_title_index( index ){
		return index === this.state.currentIndex ? "tab_title active" : "tab_title"
	}

	render(  ){
		const {currentIndex}=this.state
		return(
			<div>
				<div className="tab_title_wrap">
					{ 
						React.Children.map( this.props.children , ( element,index ) => {
							return(
								<div 
								  onClick={ () => { this.setState({ currentIndex : index }) } } 
								  className={ this.check_title_index( index ) }
								>
								  { element.props.name }
								</div>
							)
						}) 
					}
					<div className="select_item" style={{left:`${currentIndex * 100}px`}}></div>
				</div>
				<div className="tab_item_wrap">
				  <div className="tab_item_wrap1" style={{marginLeft:`${currentIndex * -300}px`}}>
					{
						React.Children.map(this.props.children,( element )=>{
							return(
								<div className="tab_item">{ element }</div>
							)
						})
					}
				  </div>
				</div>
			</div>
		)
	}
}
