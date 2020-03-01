import { Component } from '@wordpress/element';
import { Icon } from '@wordpress/components';
import { getElementClassName } from '../../blocks/helpers';
import Button from '../button';
import icons from '../../blocks/icons';

class Testing extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			currentWordIndex: 0,
			chosenTermId: 0,
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
		return <div className={ getElementClassName( this.getBlockClassName(), 'control-buttons' ) }>
			<Button
					handleButtonClick={ this.handleCloseButtonClick }
					width="narrow"
					color="dark-gray"
				><Icon icon={ icons.close } /></Button>

			<Button
				handleButtonClick={ this.handleContinueButtonClick }
				color="blue"
				width="narrow"
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
		return this.state.currentWordIndex === this.props.words.length - 1;
	}

	finish() {
		if ( 'free' === this.props.mode ) {
			this.setState( {
				chosenTermId: 0,
				currentWordIndex: 0,
			} );

			return this.props.handleReload();
		} else {
			return this.props.handleResult( this.getResultData() );
		}
	}

	handleAnswerClick( data ) {
		const state = {};

		state.passedWordsCount = this.state.passedWordsCount + 1;
		state.chosenTermId = data.term_id;

		if ( this.props.words[ this.state.currentWordIndex ].right_term.term_id === data.term_id ) {
			state.rightAnswersCount = this.state.rightAnswersCount + 1;

			if ( this.isLastWord() ) {
				setTimeout( () => this.finish(), 1000 );
			} else {
				setTimeout( () => this.setState( {
					chosenTermId: 0,
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
			chosenTermId: 0,
			showControlButtons: false,
			currentWordIndex: this.state.currentWordIndex + 1,
		} );
	}

	render() {
		return (
			<div className={ this.getBlockClassName() }>
				<div className={ getElementClassName( 'wordsgain-playground', 'label' ) }>
					<span>{this.props.words[ this.state.currentWordIndex ].post.post_type }</span>
				</div>

				<h2 className={ getElementClassName( 'wordsgain-playground', 'title' ) }>
					{ this.props.words[ this.state.currentWordIndex ].post.post_title }
				</h2>

				<div className={ getElementClassName( this.getBlockClassName(), 'answers' ) }>
					{ this.props.words[ this.state.currentWordIndex ].terms.map( term => {
						let color = 'blue';
						let handleClickFunction = this.handleAnswerClick;
						let isDisabled = false;

						if ( this.state.chosenTermId ) {
							handleClickFunction = () => {};
							isDisabled = true;

							if ( term.term_id !== this.props.words[ this.state.currentWordIndex ].right_term.term_id ) {
								color = 'gray';

								if ( term.term_id === this.state.chosenTermId ) {
									color = 'red';
								}
							} else {
								color = 'green';
							}
						}

						return <Button
							key={ term.term_id }
							handleButtonClick={ handleClickFunction }
							data={ { term_id: term.term_id } }
							color={ color }
							width="wide"
							isDisabled={ isDisabled }
						>
							{ term.name }
						</Button>
					} ) }
				</div>


				{ this.state.showControlButtons ? this.getControlButtons() : null }
			</div>
		);
	}
}

export default Testing;
