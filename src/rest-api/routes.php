<?php

namespace WordsGain\Rest_API;

use WP_REST_Response;

defined( 'ABSPATH' ) || exit;

function get_rest_playground_route( $data ) {
	$response = new WP_REST_Response(
		get_playground_words( $data['numberwords'] )
	);
    $response->set_status(200);

    return $response;
}

function register_playground_route() {
	register_rest_route( 'wordsgain/v1', 'playground/(?P<numberwords>\d+)', array(
		'methods'  => 'GET',
		'callback' => __NAMESPACE__ . '\get_rest_playground_route',
	) );
}
add_action( 'rest_api_init', __NAMESPACE__ . '\register_playground_route' );