import { Fragment, Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import Welcome from '../welcome';
import Learning from '../learning';
import Testing from '../testing';
import Result from '../result';
import Loader from '../loader';
import { getFreeModeNumberOfWords } from '../../blocks/helpers';

class Playground extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isLoading: true,
			screen: null,
			mode: null,
			language: null,
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

	setWelcomeScreen( data ) {
		const defaultData = {
			language: null,
		};

		data = data || defaultData;

		this.setState( {
			screen: <Welcome
				data={ data }
				handleButtonClick={ this.handleWelcomeButtonClick }
			/>,
			isLoading: false
		} );
	}

	setData( data, callback) {
		this.setState( {
			isLoading: true,
		} );

		apiFetch( {
			path: `/wordsgain/v1/playground/words/${data.language}/${data.numberOfWords}`
		} ).then( response => {
			if ( response.success ) {
				this.setState( {
					data: response.data,
					numberOfWords: data.numberOfWords,
					mode: data.mode,
					language: data.language,
					isLoading: false,
				} );
			}

			callback();
		} );
	}

	setLearningScreen() {
		this.setState( {
			screen: <Learning
				begin={ this.setTestingScreen }
				data={ this.state.data }
			/>,
			endCallback: this.setResultScreen,
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
				language={ this.state.language }
				data={ this.state.data }
			/>
		} );
	}

	setResultScreen( data ) {
		this.setState( {
			screen: <Result
				handleReload={ this.setWelcomeScreen }
				rightAnswersCount={ data.rightAnswersCount }
				passedWordsCount={ data.passedWordsCount }
				language={ data.language }
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
