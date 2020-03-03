import { __ } from '@wordpress/i18n';

function Loader() {
	return <div class="loader">{ __( 'Loading...', 'wordsgain' ) }</div>;
}

export default Loader;