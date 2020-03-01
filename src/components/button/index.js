import { getElementClassName, getModifierClassName } from '../../blocks/helpers';

function checkColor( color ) {
	const colorList = [
		'blue',
		'green',
		'gray',
		'red',
		'dark',
		'dark-gray',
	];

	return colorList.indexOf( color ) > -1;
}

function checkWidth( width ) {
	const widthList = [
		'narrow',
		'half',
		'wide',
	];

	return widthList.indexOf( width ) > -1;
}

function Button( props ) {
	const classNameList = [ getElementClassName( 'wordsgain-playground', 'button' ) ];

	if ( props.color && checkColor( props.color ) ) {
		classNameList.push( getModifierClassName( classNameList[0], props.color ) );
	}

	if ( props.width && checkWidth( props.width ) ) {
		classNameList.push( getModifierClassName( classNameList[0], props.width ) );
	}

	function handleClick() {
		props.handleButtonClick( props.data );
	}

	return (
		<button
			type="button"
			onClick={ handleClick }
			className={ classNameList.join( ' ' ) }
			disabled={ props.isDisabled }
		>{ props.children }</button>
	);
}

export default Button;
