import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import Select from 'react-select';
import Button from '../button';
import Loader from '../loader';
import { getElementClassName, getFreeModeNumberOfWords } from '../../blocks/helpers';

class Welcome extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			title: '',
			content: '',
			selectedLanguage: '',
			isLoading: true,
		};

		this.handleLanguageSelectChange = this.handleLanguageSelectChange.bind( this );
	}

	setLanguages() {
		apiFetch( { path: '/wordsgain/v1/playground/languages/' } ).then( languages => {
			this.setState( {
				title: __( 'Chose Language to Learn', 'wordsgain' ),
				content: this.getLanguageSelect( languages ),
				isLoading: false,
			} );
		} );
	}

	componentDidMount() {
		this.setLanguages();
	}

	handleLanguageSelectChange( selectedOption ) {
		this.setState( {
			title: __( 'Chose Number of Words', 'wordsgain' ),
			content: this.getNumberOfWords(),
			selectedLanguage: selectedOption
		} );
	}

	getLanguageSelect( languages ) {
		return <Select onChange={ this.handleLanguageSelectChange } options={ languages } />;
	}

	getNumberOfWords() {
		return [
			<div className={ getElementClassName( 'wordsgain-playground', 'buttons' ) }>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 10, language: this.state.selectedLanguage } } color="blue" width='half'>{ __( '10 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 20, language: this.state.selectedLanguage } } color="blue" width='half'>{ __( '20 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 30, language: this.state.selectedLanguage } } color="blue" width='half'>{ __( '30 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 40, language: this.state.selectedLanguage } } color="blue" width='half'>{ __( '40 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 50, language: this.state.selectedLanguage } } color="blue" width='half'>{ __( '50 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 75, language: this.state.selectedLanguage } } color="blue" width='half'>{ __( '75 Words', 'wordsgain' ) }</Button>
			</div>,
			<div className={ getElementClassName( 'wordsgain-playground', 'buttons' ) }>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 100, language: this.state.selectedLanguage } } color="blue" width='wide'>{ __( '100 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'free', numberOfWords: getFreeModeNumberOfWords(), language: this.state.selectedLanguage } } color="dark-gray" width='wide'>{ __( 'Freemode', 'wordsgain' ) }</Button>
			</div>
		];
	}

	render() {
		if ( this.state.isLoading ) {
			return <Loader />;
		}

		return (
			<div className="wordsgain-playground-welcome">
				<h2 className={ getElementClassName( 'wordsgain-playground', 'title' ) }>
					{ this.state.title }
				</h2>

				{ this.state.content }
			</div>
		);
	}
}

export default Welcome;
