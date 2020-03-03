<?php

namespace WordsGain\Taxonomies;

use function WordsGain\Post_Types\get_parts_of_speech;

function register_translation_taxonomy( $taxonomy, $post_type, $label ) {
	register_taxonomy(
		$taxonomy . '-' . $post_type,
		$post_type,
		array(
			'label' => $label,
			'hierarchical' => false,
		)
	);
}

function register_all_translation_taxonomies() {
	$languages  = get_translation_languages( 'all', get_locale() );
	$parts_of_speech = get_parts_of_speech( 'keys' );
	$locale = get_locale();

	foreach ( $languages as $language_key => $language_label ) {
		foreach ( $parts_of_speech as $part_of_speech ) {
			register_translation_taxonomy( $language_key, $part_of_speech, $language_label );
		}
	}
}
add_action( 'init', __NAMESPACE__ . '\register_all_translation_taxonomies' );
