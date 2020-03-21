<?php

namespace WordsGain\Rest_API;

use function WordsGain\Post_Types\get_parts_of_speech;
use function WordsGain\Taxonomies\get_translation_languages;

defined( 'ABSPATH' ) || exit;

function get_playground_words( $number_of_words, $language ) {
	global $wpdb;

	$taxonomy_like = $wpdb->esc_like( $language . '-' ) . '%';

	$words_query = $wpdb->prepare(
		"
		SELECT          p.ID post_id, p.post_title, p.post_type, t.term_id, t.name term_name
		FROM            {$wpdb->prefix}term_taxonomy tt
		INNER JOIN      {$wpdb->prefix}term_relationships tr
						ON tr.term_taxonomy_id = tt.term_taxonomy_id
		INNER JOIN      {$wpdb->prefix}posts p
						ON p.ID = tr.object_id
						AND p.post_status = 'publish'
		INNER JOIN      {$wpdb->prefix}terms t
						ON t.term_id = tt.term_id
		WHERE           tt.taxonomy LIKE %s
						AND tt.count > 0
		ORDER BY        RAND()
		LIMIT           %d
		",
		$taxonomy_like,
		$number_of_words
	);

	$data = array(
		'words' => $wpdb->get_results( $words_query ),
	);

	if ( ! $data['words'] ) {
		return;
	}

	$option_index = 0;
	$number_of_options = 3;

	foreach ( $data['words'] as $word ) {
		$options_query = $wpdb->prepare(
			"
			SELECT DISTINCT ID post_id, post_title
			FROM            wp_posts
			WHERE           ID != %d
							AND post_type = %s
							AND post_status = 'publish'
			ORDER BY        RAND()
			LIMIT           %d
			",
			$word->post_id,
			$word->post_type,
			$number_of_options
		);

		$data['options'][ $option_index ] = $wpdb->get_results( $options_query );

		if ( ! $data['options'][ $option_index ] ) {
			return;
		}

		$data['options'][ $option_index ][] = array(
			'post_id'    => $word->post_id,
			'post_title' => $word->post_title,
		);

		shuffle( $data['options'][ $option_index ] );

		$option_index += 1;
	}

	return $data;
}

function get_playground_languages() {
	$translation_languages = get_translation_languages( 'all', get_locale() );
	$playground_languages = array();

	foreach ( $translation_languages as $language_key => $language_label  ) {
		$playground_languages[] = array(
			'value' => $language_key,
			'label' => $language_label
		);
	}

	return $playground_languages;
}
