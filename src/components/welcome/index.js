import { __ } from '@wordpress/i18n';
import Button from '../button';
import { getElementClassName, getFreeModeNumberOfWords } from '../../blocks/helpers';

function Welcome( props ) {
	return (
		<div className="wordsgain-playground-welcome">
			<h2 className={ getElementClassName( 'wordsgain-playground', 'title' ) }>
				{ __( 'Make Your Choice', 'wordsgain' ) }
			</h2>

			<div className={ getElementClassName( 'wordsgain-playground', 'buttons' ) }>
				<Button handleButtonClick={ props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 10 } } color="blue" width='half'>{ __( '10 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 20 } } color="blue" width='half'>{ __( '20 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 30 } } color="blue" width='half'>{ __( '30 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 40 } } color="blue" width='half'>{ __( '40 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 50 } } color="blue" width='half'>{ __( '50 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 75 } } color="blue" width='half'>{ __( '75 Words', 'wordsgain' ) }</Button>
			</div>
			<div className={ getElementClassName( 'wordsgain-playground', 'buttons' ) }>
				<Button handleButtonClick={ props.handleButtonClick } data={ { mode: 'predefined', numberOfWords: 100 } } color="blue" width='wide'>{ __( '100 Words', 'wordsgain' ) }</Button>
				<Button handleButtonClick={ props.handleButtonClick } data={ { mode: 'free', numberOfWords: getFreeModeNumberOfWords() } } color="dark-gray" width='wide'>{ __( 'Freemode', 'wordsgain' ) }</Button>
			</div>
		</div>
	);
}

export default Welcome;
