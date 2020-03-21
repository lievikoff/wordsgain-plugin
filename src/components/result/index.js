import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/components';
import { getElementClassName } from '../../blocks/helpers';
import Button from '../button';
import icons from '../../blocks/icons';

function Result( props ) {
	function getBlockClassName() {
		return 'wordsgain-playground-resutl';
	}

	return (
		<div className={ getBlockClassName() }>
			<h2 className={ getElementClassName( 'wordsgain-playground', 'title' ) }>{ __( 'Your Result', 'wordsgain' ) }</h2>
			<hr />
			<h3 className={ getElementClassName( 'wordsgain-playground', 'title' ) }> { props.rightAnswersCount } / { props.passedWordsCount }</h3>

			<div className={ getElementClassName( 'wordsgain-playground', 'control-buttons' ) }>
				<Button
					handleButtonClick={ props.handleReload }
					width="narrow"
					color="blue"
					singlePosition="center"
				><Icon icon={ icons.reload } /></Button>
			</div>
		</div>
	);
}

export default Result;
