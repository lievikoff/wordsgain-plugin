<?php

namespace WordsGain;

function get_plugin_path() {
	return trailingslashit( dirname( __FILE__, 2 ) );
}

function get_plugin_url( $path = '' ) {
	return plugins_url( $path, __DIR__ );
}

function get_src_path() {
	return trailingslashit( dirname( __FILE__ ) );
}

function require_files( $path = '' ) {
	$files = glob( get_src_path() . trailingslashit( $path ) . '*.php' );

	foreach ( $files as $file ) {
		require_once $file;
	}
}

function require_admin_files( $path = '' ) {
	if ( is_admin() ) {
		require_files( $path );
	}
}

function load_files() {
    require_files( 'post-types' );
	require_files( 'taxonomies' );
	require_files( 'scripts' );
	require_files( 'rest-api' );
}
add_action( 'plugins_loaded', __NAMESPACE__ . '\load_files' );

function load_textdomain() {
	load_plugin_textdomain( 'wordsgain', false, basename( get_plugin_path() ) . '/languages' );
}
add_action( 'init', __NAMESPACE__ . '\load_textdomain' );