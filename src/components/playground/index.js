import { Fragment, Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import Welcome from '../welcome';
import Learning from '../learning';
import Testing from '../testing';
import Result from '../result';
import Loader from '../loader';
import { shuffle, getFreeModeNumberOfWords } from '../../blocks/helpers';

class Playground extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isLoading: true,
			screen: null,
			mode: null,
			words: [],
		};

		this.handleWelcomeButtonClick = this.handleWelcomeButtonClick.bind( this );
		this.setWelcomeScreen         = this.setWelcomeScreen.bind( this );
		this.setLearningScreen        = this.setLearningScreen.bind( this );
		this.setTestingScreen         = this.setTestingScreen.bind( this );
		this.setResultScreen          = this.setResultScreen.bind( this );
		this.reloadTestingScreen      = this.reloadTestingScreen.bind( this );
	}

	componentDidMount() {
		this.setWelcomeScreen();
	}

	handleWelcomeButtonClick( data ) {
		const callback = 'free' === data.mode ? this.setTestingScreen : this.setLearningScreen;

		this.setData( data, callback );
	}

	setWelcomeScreen() {
		this.setState( {
			screen: <Welcome handleButtonClick={ this.handleWelcomeButtonClick } />,
			isLoading: false
		} );
	}

	setData( data, callback) {
		this.setState( {
			isLoading: true,
		} );
		console.log(data)

		apiFetch( {
			path: `/wordsgain/v1/playground/words/${data.language}/${data.numberOfWords}`
		} ).then( words => {
			this.setState( {
				words: words,
				numberOfWords: words.legnth,
				mode: mode,
				isLoading: false,
			} );

			callback();
		} );
	}

	setLearningScreen() {
		this.setState( {
			screen: <Learning
				begin={ this.setTestingScreen }
				words={ this.state.words }
			/>,
			endCallback: this.setResultScreen,
			words: shuffle( this.state.words )
		} );
	}

	reloadTestingScreen() {
		this.setData( getFreeModeNumberOfWords(), this.setTestingScreen, 'predefined' );
	}

	setTestingScreen() {
		this.setState( {
			screen: <Testing
				handleResult={ this.setResultScreen }
				handleReload={ this.reloadTestingScreen }
				mode={ this.state.mode }
				words={ this.state.words }
			/>
		} );
	}

	setResultScreen( data ) {
		this.setState( {
			screen: <Result
				handleReload={ this.setWelcomeScreen }
				rightAnswersCount={ data.rightAnswersCount }
				passedWordsCount={ data.passedWordsCount }
			/>
		} );
	}

	render() {
		if ( this.state.isLoading ) {
			return <Loader />
		}

		return (
			<Fragment>
				{ this.state.screen }
			</Fragment>
		);
	}
}

export default Playground;
