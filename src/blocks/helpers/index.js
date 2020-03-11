import { __ } from '@wordpress/i18n';

export function getElementClassName( className, element ) {
	return className + '__' + element;
}

export function getModifierClassName( className, modifier ) {
	return className + '--' + modifier;
}

export function shuffle( arr ) {
	arr = arr.slice( 0 );

	for ( let i = arr.length - 1; i > 0; i-- ) {
		const j = Math.floor( Math.random() * ( i + 1 ) );

		[ arr[ i ], arr[ j ] ] = [ arr[ j ], arr[ i ] ];
	}

	return arr;
}

export function getFreeModeNumberOfWords() {
	return 50;
}

export function capitalizeFirstLetter( string ) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
}

export const getSelectCustomTheme = theme => ({
	...theme,
	borderRadius: 0,
	colors: {
		...theme.colors,
		primary: '#54a0ff',
		primary25: '#54a0ff',
	},
} );

export const getSelectCustomStyles = {
	option: ( provided, state ) => ( {
		...provided,
		color: state.isFocused ? 'white' : provided.color,
	} ),
};
