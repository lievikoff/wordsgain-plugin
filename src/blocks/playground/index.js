import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import Playground from '../../components/playground';

registerBlockType( 'wordsgain/playground', {
	title: __( 'WordsGain Playground', 'wordsgain' ),
	icon: 'welcome-learn-more',
	category: 'widgets',
	edit( props ) {
		return (
			<Playground />
		);
	},
	save() {
		return null;
	}
} );
