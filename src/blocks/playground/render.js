import { render } from "@wordpress/element";
import Playground from '../../components/playground';

const elements = document.getElementsByClassName( 'wordsgain-playground' );

for ( let i = 0; i < elements.length; i++ ) {
	render( <Playground />, elements[ i ] );
}
