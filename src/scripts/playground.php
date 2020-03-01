<?php

namespace WordsGain\Scripts;

use function WordsGain\get_plugin_path;
use function WordsGain\get_plugin_url;

function get_playground_script_handle() {
	return 'wordsgain-playground-script';
}

function get_playground_frontend_script_handle() {
	return 'wordsgain-playground-frontend-script';
}

function render_playground_block() {
	wp_enqueue_script( get_playground_frontend_script_handle() );

	return '<div class="wordsgain-playground"></div>';
}

function register_playground_script() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	$asset_file = include( get_plugin_path() . 'build/playground/index.asset.php');
	$asset_frontend_file = include( get_plugin_path() . 'build/playground/frontend.asset.php');

	wp_register_script(
		get_playground_script_handle(),
		get_plugin_url( 'build/playground/index.js' ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_style(
		get_playground_script_handle(),
		get_plugin_url( 'build/playground/style.css' ),
		array(),
		filemtime( get_plugin_path() . 'build/playground/style.css' )
	);

	wp_register_script(
		get_playground_frontend_script_handle(),
		get_plugin_url( 'build/playground/frontend.js' ),
		$asset_frontend_file['dependencies'],
		$asset_frontend_file['version']
	);

	register_block_type( 'wordsgain/playground', array(
		'style'           => get_playground_script_handle(),
		'editor_script'   => get_playground_script_handle(),
		'render_callback' => __NAMESPACE__ . '\render_playground_block',
	) );

	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( get_playground_script_handle(), 'wordsgain' );
	}
}
add_action( 'init', __NAMESPACE__ . '\register_playground_script' );
