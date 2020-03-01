import { __ } from "@wordpress/i18n";
import { Icon } from "@wordpress/components";
import Button from "../button";
import icons from "../../blocks/icons";

function PreparingNavigation( props ) {
	function getBlockClassName() {
		return 'wordsgain-playground-preparing-navigation';
	}

	const prevButton   = <Button key="prev" handleButtonClick={ props.handleButtonClick } data={ { action: 'prev' } } color="dark" width="narrow"><Icon size="24" icon={ icons.arrows.left } /></Button>;
	const actionButton = <Button key="begin" handleButtonClick={ props.handleButtonClick } data={ { action: 'begin' } } color="blue" width="narrow">{ __( 'Go', 'wordsgain' ) }</Button>;
	const nextButton   = <Button key="next" handleButtonClick={ props.handleButtonClick } data={ { action: 'next' } } color="dark" width="narrow"><Icon size="24" icon={ icons.arrows.right } /></Button>

	const buttonList = [];

	if ( props.currentStep > 1 ) {
		buttonList.push( prevButton );
	}

	buttonList.push( actionButton );

	if ( props.currentStep < props.numberOfSteps ) {
		buttonList.push( nextButton );
	}

	return (
		<div className={ getBlockClassName() }>
			{ buttonList.map( button => button ) }
		</div>
	);
}

export default PreparingNavigation;
