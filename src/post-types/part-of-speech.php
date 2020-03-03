<?php

namespace WordsGain\Post_Types;

function register_all_parts_of_speech_post_types() {
	$parts_of_speech = get_parts_of_speech();

	foreach ( $parts_of_speech as $part_of_speech_key => $part_of_speech_labels ) {
		register_post_type(
			$part_of_speech_key,
			array(
				'labels'             => $part_of_speech_labels,
				'public'             => true,
				'publicly_queryable' => true,
				'show_ui'            => true,
				'show_in_menu'       => true,
				'query_var'          => true,
				'capability_type'    => 'post',
				'has_archive'        => false,
				'hierarchical'       => false,
				'menu_icon'          => 'dashicons-translation',
				'menu_position'      => get_menu_position( 'noun' ),
				'supports'           => array( 'title' ),
			)
		);
	}
}
add_action( 'init', __NAMESPACE__ . '\register_all_parts_of_speech_post_types' );

function word_exists( $post_id, $post_name, $post_type ) {
	global $wpdb;

	$query = $wpdb->prepare(
		"SELECT ID FROM $wpdb->posts WHERE ID != %d AND post_name = %s AND post_type = %s LIMIT 1",
		$post_id,
		$post_name,
		$post_type
	);

	return $wpdb->get_var( $query );
}

function set_word_exists_notice() {
	return update_option( 'wg_word_exists_notice', '1' );
}

function has_word_exists_notice() {
	return '1' === get_option( 'wg_word_exists_notice' );
}

function delete_word_exists_notice() {
	return delete_option( 'wg_word_exists_notice' );
}

function prevent_word_duplicates( $post_id, $post ) {
	if ( 'publish' === $post->post_status && in_array( $post->post_type, get_parts_of_speech( 'keys' ) ) ) {
		$sanitized_title = sanitize_title( $post->post_title );
		$word_exists = word_exists( $post_id, $sanitized_title, $post->post_type );

		if ( $word_exists ) {
			// $taxonomy = 'ru-' . $post->post_type;
			// $post_terms = wp_get_post_terms( $post_id, $taxonomy, array( 'fields' => 'names' ) );

			// wp_set_post_terms( $word_exists, $post_terms, $taxonomy );
			wp_delete_post( $post_id );

			set_word_exists_notice();

			wp_safe_redirect( get_edit_post_link( $word_exists, '' ) );
			exit;
		}

	}
}
add_action( 'save_post', __NAMESPACE__ . '\prevent_word_duplicates', 10, 2 );

function word_exists_notice() {
	$screen = get_current_screen();

	if ( 'post' == $screen->base && 'add' !== $screen->action ) {
		if ( has_word_exists_notice() ) {
			printf(
				'<div class="notice notice-error is-dismissible"><p>%s</p></div>',
				__( 'The word you were trying to add already exists. This is the word edit page.' )
			);

			delete_word_exists_notice();
		}
	}
}
add_action( 'admin_notices', __NAMESPACE__ . '\word_exists_notice', 10, 2 );
