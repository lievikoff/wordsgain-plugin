<?php

namespace WordsGain\Rest_API;

use function WordsGain\Post_Types\get_parts_of_speech;
use function WordsGain\Taxonomies\get_translation_languages;

defined( 'ABSPATH' ) || exit;

function get_playground_words( $number_of_posts, $language, $limit = 4 ) {
	global $wpdb;

	$parts_of_speech = get_parts_of_speech( 'keys' );
	shuffle( $parts_of_speech );

	$parts_of_speech_count      = count( $parts_of_speech );
	$parts_of_speech_rand       = array();
	$words_added_count          = 0;

	for ( $i = 0; $i < $parts_of_speech_count; $i++ ) {
		if ( $number_of_posts <= $words_added_count ) {
			break;
		}

		$difference = $number_of_posts - $words_added_count;

		if ( $i === $parts_of_speech_count - 1 ) {
			$rand_count = $difference;
		} else {
			$rand_count         = rand( 1, $difference );
			$words_added_count += $rand_count;
		}

		$parts_of_speech_rand[ $parts_of_speech[ $i ] ] = $rand_count;
	}

	$words = array();

	foreach ( $parts_of_speech_rand as $part_of_speech_rand_key => $part_of_speech_rand_count ) {
		$query = $wpdb->prepare(
			"
			SELECT          p.ID post_id, p.post_title, p.post_type, t.term_id, t.name term_name
			FROM            {$wpdb->prefix}term_taxonomy tt
			INNER JOIN      {$wpdb->prefix}term_relationships tr
							ON tr.term_taxonomy_id = tt.term_taxonomy_id
			INNER JOIN      {$wpdb->prefix}posts p
			                ON p.ID = tr.object_id
			INNER JOIN      {$wpdb->prefix}terms t
			                ON t.term_id = tt.term_id
			WHERE           tt.taxonomy = %s
			                AND tt.count > 0
			ORDER BY        RAND()
			LIMIT           %d
			",
			$language . '-' . $part_of_speech_rand_key,
			$part_of_speech_rand_count * 4
		);

		$words = array_merge( $wpdb->get_results( $query ), $words );
	}

	$chunks = array_chunk( $words, 4 );
	$data   = array();

	foreach ( $chunks as $chunk ) {
		$data[] = array(
			'selected' => array_rand( $chunk ),
			'words'    => $chunk,
		);
	}

	shuffle( $data );

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
