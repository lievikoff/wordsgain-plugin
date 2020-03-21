import { Component } from '@wordpress/element';
import { Icon } from '@wordpress/components';
import { getElementClassName, capitalizeFirstLetter } from '../../blocks/helpers';
import Button from '../button';
import icons from '../../blocks/icons';

class Testing extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			currentWordIndex: 0,
			chosenWordId: 0,
			passedWordsCount: 0,
			rightAnswersCount: 0,
			showControlButtons: false,
		};

		this.handleAnswerClick         = this.handleAnswerClick.bind( this );
		this.handleContinueButtonClick = this.handleContinueButtonClick.bind( this );
		this.handleCloseButtonClick    = this.handleCloseButtonClick.bind( this );
	}

	getBlockClassName() {
		return 'wordsgain-playground-testing';
	}

	getControlButtons() {
		return <div className={ getElementClassName( 'wordsgain-playground', 'control-buttons' ) }>
			<Button
					handleButtonClick={ this.handleCloseButtonClick }
					color="dark-gray"
					width="minimal"
				><Icon size="24" icon={ icons.close } /></Button>

			<Button
				handleButtonClick={ this.handleContinueButtonClick }
				color="blue"
				width="minimal"
			><Icon size="24" icon={ icons.arrows.right } /></Button>
		</div>;
	}

	getResultData() {
		return {
			rightAnswersCount: this.state.rightAnswersCount,
			passedWordsCount: this.state.passedWordsCount
		};
	}

	isLastWord() {
		return this.state.currentWordIndex === this.props.data.words.length - 1;
	}

	finish() {
		if ( 'free' === this.props.mode ) {
			this.setState( {
				chosenWordId: 0,
				currentWordIndex: 0,
			} );

			return this.props.handleReload();
		} else {
			return this.props.handleResult( this.getResultData() );
		}
	}

	handleAnswerClick( data ) {
		const state       = {};
		const currentWord = this.props.data.words[ this.state.currentWordIndex ];

		state.passedWordsCount = this.state.passedWordsCount + 1;
		state.chosenWordId = data.post_id;

		if ( currentWord.post_id === data.post_id ) {
			state.rightAnswersCount = this.state.rightAnswersCount + 1;

			if ( this.isLastWord() ) {
				setTimeout( () => this.finish(), 1000 );
			} else {
				setTimeout( () => this.setState( {
					chosenWordId: 0,
					currentWordIndex: this.state.currentWordIndex + 1,
				} ), 1000 );
			}
		} else {
			state.showControlButtons = true;
		}

		this.setState( state );
	}

	handleCloseButtonClick() {
		this.props.handleResult( this.getResultData() );
	}

	handleContinueButtonClick() {
		if ( this.isLastWord() ) {
			return this.finish();
		}

		this.setState( {
			chosenWordId: 0,
			showControlButtons: false,
			currentWordIndex: this.state.currentWordIndex + 1,
		} );
	}

	render() {
		const currentWord    = this.props.data.words[ this.state.currentWordIndex ];
		const currentOptions = this.props.data.options[ this.state.currentWordIndex ];

		return (
			<div className={ this.getBlockClassName() }>
				<div className={ getElementClassName( 'wordsgain-playground', 'label' ) }>
					<span>{ currentWord.post_type }</span>
				</div>

				<h2 className={ getElementClassName( 'wordsgain-playground', 'title' ) }>
					{ capitalizeFirstLetter( currentWord.term_name ) }
				</h2>

				<div className={ getElementClassName( this.getBlockClassName(), 'answers' ) }>
					{ currentOptions.map( option => {
						let color = 'blue';
						let handleClickFunction = this.handleAnswerClick;
						let isDisabled = false;

						if ( this.state.chosenWordId ) {
							handleClickFunction = () => {};
							isDisabled = true;

							if ( currentWord.post_id !== option.post_id ) {
								color = 'gray';

								if ( option.post_id === this.state.chosenWordId ) {
									color = 'red';
								}
							} else {
								color = 'green';
							}
						}

						return <Button
							key={ option.post_id }
							handleButtonClick={ handleClickFunction }
							data={ { post_id: option.post_id } }
							color={ color }
							width="wide"
							isDisabled={ isDisabled }
						>
							{ option.post_title }
						</Button>
					} ) }
				</div>


				{ this.state.showControlButtons ? this.getControlButtons() : null }
			</div>
		);
	}
}

export default Testing;
