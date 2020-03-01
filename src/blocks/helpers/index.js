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

export function getLoader() {
	return <div class="loader">{ __( 'Loading...', 'wordsgain' ) }</div>
}
