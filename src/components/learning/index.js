import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { getElementClassName } from '../../blocks/helpers';
import LearningNavigation from '../learning-navigation';

class Learning extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			currentStep: 1,
		};

		this.handleButtonClick = this.handleButtonClick.bind( this );
	}

	getBlockClassName() {
		return 'wordsgain-playground-learning';
	}

	handleButtonClick( data ) {
		switch ( data.action ) {
			case 'prev' :
				return this.setState( { currentStep: this.state.currentStep - 1 } );
			case 'next' :
				return this.setState( { currentStep: this.state.currentStep + 1 } );
			case 'begin' :
				return this.props.begin();
		}
	}

	render() {
		return (
			<div className={ this.getBlockClassName() }>
				<div className={ getElementClassName( 'wordsgain-playground', 'label' ) }>
					<span>{this.props.words[ this.state.currentStep - 1 ].post.post_type }</span>
				</div>
				<h2 className={ getElementClassName( 'wordsgain-playground', 'title' ) }>{ this.props.words[ this.state.currentStep - 1 ].post.post_title }</h2>
				<hr />
				<h3 className={ getElementClassName( 'wordsgain-playground', 'title' ) }>{ this.props.words[ this.state.currentStep - 1 ].right_term.name }</h3>

				<LearningNavigation
					handleButtonClick={ this.handleButtonClick }
					currentStep={ this.state.currentStep }
					numberOfSteps={ this.props.words.length }
				/>
			</div>
		);
	}
}

export default Learning;
