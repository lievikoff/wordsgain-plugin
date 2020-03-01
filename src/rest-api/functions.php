<?php

namespace WordsGain\Rest_API;

use function WordsGain\Post_Types\get_parts_of_speech_list;

defined( 'ABSPATH' ) || exit;

function get_post_fields( $post ) {
	return array(
		'ID'         => $post->ID,
		'post_title' => $post->post_title,
		'post_type'  => $post->post_type,
	);
}

function get_term_fields( $term ) {
	return array(
		'term_id' => $term->term_id,
		'name'    => $term->name,
	);
}

function get_random_terms( $taxonomy, $exclude, $limit ) {
	global $wpdb;

	$exclude = wp_parse_id_list( $exclude );

	return $wpdb->get_results( $wpdb->prepare(
		"
		SELECT		t.term_id, t.name
		FROM		$wpdb->terms t
		INNER JOIN  $wpdb->term_taxonomy tt
					ON tt.term_id = t.term_id
		WHERE		tt.taxonomy = %s
					AND tt.term_id NOT IN (" . implode( ', ', $exclude ) . ")
		ORDER BY	RAND()
		LIMIT		%d
		",
		$taxonomy,
		$limit
	) );


}

function get_playground_words( $number_of_posts ) {
	$language = 'ru';
	$post_types = get_parts_of_speech_list( 'keys' );

	$posts = get_posts( array(
		'post_type'   => $post_types,
		'numberposts' => $number_of_posts,
		'orderby'     => 'rand',
	) );

	$words = array();

	foreach ( $posts as $post ) {
		$taxonomy = $language . '-' . $post->post_type;

		$post_terms = wp_get_post_terms(
			$post->ID,
			$taxonomy,
			array(
				'fields' => 'ids'
			)
		);

		$random_term_index = array_rand( $post_terms );
		$right_term        = get_term( $post_terms[ $random_term_index ] );

		$words[ $post->ID ] = array(
			'post'          => get_post_fields( $post ),
			'right_term'    => get_term_fields( $right_term ),
		);

		$answer_terms = get_random_terms(
			$taxonomy,
			$post_terms,
			3
		);

		$answer_terms[] = $right_term;

		shuffle( $answer_terms );

		foreach ( $answer_terms as $answer_term ) {
			$words[ $post->ID ]['terms'][] = get_term_fields( $answer_term );
		}
	}

	return array_values( $words );
}
