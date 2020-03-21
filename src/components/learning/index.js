import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { getElementClassName, capitalizeFirstLetter } from '../../blocks/helpers';
import LearningNavigation from '../learning-navigation';

class Learning extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			currentStep: 1,
			isStepButtonClicked: false,
		};

		this.handleStepButtonClick = this.handleStepButtonClick.bind( this );
	}

	getBlockClassName() {
		return 'wordsgain-playground-learning';
	}

	handleStepButtonClick( data ) {
		var newData = {};

		if ( ! this.state.isStepButtonClicked ) {
			newData.isStepButtonClicked = true;
		}

		switch ( data.action ) {
			case 'prev' :
				newData.currentStep = this.state.currentStep - 1;

				return this.setState( newData );
			case 'next' :
				newData.currentStep = this.state.currentStep + 1;

				return this.setState( newData );
			case 'begin' :
				return this.props.begin();
		}
	}

	render() {
		const currentWord = this.props.data.words[ this.state.currentStep - 1 ];

		return (
			<div className={ this.getBlockClassName() }>
				<div className={ getElementClassName( 'wordsgain-playground', 'label' ) }>
					<span>{ currentWord.post_type }</span>
				</div>
				<h2 className={ getElementClassName( 'wordsgain-playground', 'title' ) }>
					{ capitalizeFirstLetter( currentWord.term_name ) }
				</h2>
				<hr />
				<h3 className={ getElementClassName( 'wordsgain-playground', 'title' ) }>
					{ capitalizeFirstLetter( currentWord.post_title ) }
				</h3>

				<LearningNavigation
					handleButtonClick={ this.handleStepButtonClick }
					showBeginButton={ this.state.isStepButtonClicked }
					currentStep={ this.state.currentStep }
					numberOfSteps={ this.props.data.words.length }
				/>
			</div>
		);
	}
}

export default Learning;
