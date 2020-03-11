import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import Select from 'react-select';
import Button from '../button';
import Loader from '../loader';
import {
	getElementClassName,
	getFreeModeNumberOfWords,
	getSelectCustomTheme,
	getSelectCustomStyles
} from '../../blocks/helpers';

class Welcome extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			title: '',
			content: '',
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
			content: this.getNumberOfWords( selectedOption.value ),
		} );
	}

	getLanguageSelect( languages ) {
		return <Select onChange={ this.handleLanguageSelectChange } options={ languages } theme={ getSelectCustomTheme } styles={ getSelectCustomStyles } />;
	}

	getNumberOfWords( language ) {
		return [
			<div className={ getElementClassName( 'wordsgain-playground', 'buttons' ) }>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 10, language: language } } color="blue" width='half'>{ __( '10 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 20, language: language } } color="blue" width='half'>{ __( '20 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 30, language: language } } color="blue" width='half'>{ __( '30 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 40, language: language } } color="blue" width='half'>{ __( '40 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 50, language: language } } color="blue" width='half'>{ __( '50 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 75, language: language } } color="blue" width='half'>{ __( '75 Words', 'wordsgain' ) }</Button>
			</div>,
			<div className={ getElementClassName( 'wordsgain-playground', 'buttons' ) }>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 100, language: language } } color="blue" width='wide'>{ __( '100 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ this.props.handleButtonClick } data={ { mode: 'free', numberOfWords: getFreeModeNumberOfWords(), language: language } } color="dark-gray" width='wide'>{ __( 'Freemode', 'wordsgain' ) }</Button>
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
