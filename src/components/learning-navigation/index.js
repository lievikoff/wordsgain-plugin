import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/components';
import Button from '../button';
import icons from '../../blocks/icons';
import { getElementClassName } from '../../blocks/helpers';

function PreparingNavigation( props ) {
	const prevButton   = <Button key="prev" handleButtonClick={ props.handleButtonClick } data={ { action: 'prev' } } color="dark" width="minimal"><Icon size="24" icon={ icons.arrows.left } /></Button>;
	const actionButton = <Button key="begin" handleButtonClick={ props.handleButtonClick } data={ { action: 'begin' } } color="blue" width="narrow">{ __( 'Go', 'wordsgain' ) }</Button>;
	const nextButton   = <Button key="next" handleButtonClick={ props.handleButtonClick } data={ { action: 'next' } } color="dark" width="minimal" singlePosition='right'><Icon size="24" icon={ icons.arrows.right } /></Button>

	const buttonList = [];

	if ( props.currentStep > 1 ) {
		buttonList.push( prevButton );
	}

	if ( props.showBeginButton ) {
		buttonList.push( actionButton );
	}

	if ( props.currentStep < props.numberOfSteps ) {
		buttonList.push( nextButton );
	}

	return (
		<div className={ getElementClassName( 'wordsgain-playground', 'control-buttons' ) }>
			{ buttonList.map( button => button ) }
		</div>
	);
}

export default PreparingNavigation;
