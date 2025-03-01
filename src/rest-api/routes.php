<?php

namespace WordsGain\Rest_API;

use WP_Error;
use WP_REST_Response;
use function WordsGain\Taxonomies\get_translation_languages;

defined( 'ABSPATH' ) || exit;

function get_rest_playground_words_route( $data ) {
	if ( ! preg_match( '#^[a-z]{2}(?:_[a-z]{2})?$#', $data['language'] ) || ! in_array( $data['language'], get_translation_languages( 'keys' ) ) ) {
		return;
	}

	$words = get_playground_words( $data['numberwords'], $data['language'] );

	if ( empty( $words ) ) {
		return new WP_Error(
			'wg_no_words_found',
			__( 'There are no words found.', 'wordsgain'  ),
			array(
				'status' => 404
		) );
	}

	$response = new WP_REST_Response( array(
		'data'    => $words,
		'success' => true,
	) );
	$response->set_status( 200 );

    return $response;
}

function get_rest_playground_languages_route() {
	$response = new WP_REST_Response(
		get_playground_languages()
	);
    $response->set_status( 200 );

    return $response;
}

function register_playground_words_route() {
	register_rest_route( 'wordsgain/v1', 'playground/words/(?P<language>\w+)/(?P<numberwords>\d+)/', array(
		'methods'  => 'GET',
		'callback' => __NAMESPACE__ . '\get_rest_playground_words_route',
	) );
}
add_action( 'rest_api_init', __NAMESPACE__ . '\register_playground_words_route' );

function register_playground_languages_route() {
	register_rest_route( 'wordsgain/v1', 'playground/languages', array(
		'methods'  => 'GET',
		'callback' => __NAMESPACE__ . '\get_rest_playground_languages_route',
	) );
}
add_action( 'rest_api_init', __NAMESPACE__ . '\register_playground_languages_route' );

