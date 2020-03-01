<?php

namespace WordsGain\Post_Types;

function get_parts_of_speech_list( $type = '' ) {
	$parts_of_speech = array(
		'noun' => array(
			'name'                  => _x( 'Nouns', 'Post type general name', 'wordsgain' ),
			'singular_name'         => _x( 'Noun', 'Post type singular name', 'wordsgain' ),
			'menu_name'             => _x( 'Nouns', 'Admin Menu text', 'wordsgain' ),
			'name_admin_bar'        => _x( 'Noun', 'Add New on Toolbar', 'wordsgain' ),
			'add_new'               => __( 'Add New', 'wordsgain' ),
			'add_new_item'          => __( 'Add New Noun', 'wordsgain' ),
			'new_item'              => __( 'New Noun', 'wordsgain' ),
			'edit_item'             => __( 'Edit Noun', 'wordsgain' ),
			'view_item'             => __( 'View Noun', 'wordsgain' ),
			'all_items'             => __( 'All Nouns', 'wordsgain' ),
			'search_items'          => __( 'Search Nouns', 'wordsgain' ),
			'not_found'             => __( 'No nouns found.', 'wordsgain' ),
			'not_found_in_trash'    => __( 'No nouns found in Trash.', 'wordsgain' ),
			'filter_items_list'     => _x( 'Filter nouns list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'wordsgain' ),
			'items_list_navigation' => _x( 'Nouns list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'wordsgain' ),
			'items_list'            => _x( 'Nouns list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'wordsgain' ),
		),
		'adjective' => array(
			'name'                  => _x( 'Adjectives', 'Post type general name', 'wordsgain' ),
			'singular_name'         => _x( 'Adjective', 'Post type singular name', 'wordsgain' ),
			'menu_name'             => _x( 'Adjectives', 'Admin Menu text', 'wordsgain' ),
			'name_admin_bar'        => _x( 'Adjective', 'Add New on Toolbar', 'wordsgain' ),
			'add_new'               => __( 'Add New', 'wordsgain' ),
			'add_new_item'          => __( 'Add New Adjective', 'wordsgain' ),
			'new_item'              => __( 'New Adjective', 'wordsgain' ),
			'edit_item'             => __( 'Edit Adjective', 'wordsgain' ),
			'view_item'             => __( 'View Adjective', 'wordsgain' ),
			'all_items'             => __( 'All Adjectives', 'wordsgain' ),
			'search_items'          => __( 'Search Adjectives', 'wordsgain' ),
			'not_found'             => __( 'No adjectives found.', 'wordsgain' ),
			'not_found_in_trash'    => __( 'No adjectives found in Trash.', 'wordsgain' ),
			'filter_items_list'     => _x( 'Filter adjectives list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'wordsgain' ),
			'items_list_navigation' => _x( 'Adjectives list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'wordsgain' ),
			'items_list'            => _x( 'Adjectives list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'wordsgain' ),
		),
		'verb' => array(
			'name'                  => _x( 'Verbs', 'Post type general name', 'wordsgain' ),
			'singular_name'         => _x( 'Verb', 'Post type singular name', 'wordsgain' ),
			'menu_name'             => _x( 'Verbs', 'Admin Menu text', 'wordsgain' ),
			'name_admin_bar'        => _x( 'Verb', 'Add New on Toolbar', 'wordsgain' ),
			'add_new'               => __( 'Add New', 'wordsgain' ),
			'add_new_item'          => __( 'Add New Verb', 'wordsgain' ),
			'new_item'              => __( 'New Verb', 'wordsgain' ),
			'edit_item'             => __( 'Edit Verb', 'wordsgain' ),
			'view_item'             => __( 'View Verb', 'wordsgain' ),
			'all_items'             => __( 'All Verbs', 'wordsgain' ),
			'search_items'          => __( 'Search Verbs', 'wordsgain' ),
			'not_found'             => __( 'No verbs found.', 'wordsgain' ),
			'not_found_in_trash'    => __( 'No verbs found in Trash.', 'wordsgain' ),
			'filter_items_list'     => _x( 'Filter verbs list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'wordsgain' ),
			'items_list_navigation' => _x( 'Verbs list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'wordsgain' ),
			'items_list'            => _x( 'Verbs list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'wordsgain' ),
		),
		'adverb' => array(
			'name'                  => _x( 'Adverbs', 'Post type general name', 'wordsgain' ),
			'singular_name'         => _x( 'Adverb', 'Post type singular name', 'wordsgain' ),
			'menu_name'             => _x( 'Adverbs', 'Admin Menu text', 'wordsgain' ),
			'name_admin_bar'        => _x( 'Adverb', 'Add New on Toolbar', 'wordsgain' ),
			'add_new'               => __( 'Add New', 'wordsgain' ),
			'add_new_item'          => __( 'Add New Adverb', 'wordsgain' ),
			'new_item'              => __( 'New Adverb', 'wordsgain' ),
			'edit_item'             => __( 'Edit Adverb', 'wordsgain' ),
			'view_item'             => __( 'View Adverb', 'wordsgain' ),
			'all_items'             => __( 'All Adverbs', 'wordsgain' ),
			'search_items'          => __( 'Search Adverbs', 'wordsgain' ),
			'not_found'             => __( 'No adverbs found.', 'wordsgain' ),
			'not_found_in_trash'    => __( 'No adverbs found in Trash.', 'wordsgain' ),
			'filter_items_list'     => _x( 'Filter adverbs list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'wordsgain' ),
			'items_list_navigation' => _x( 'Adverbs list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'wordsgain' ),
			'items_list'            => _x( 'Adverbs list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'wordsgain' ),
		),
		// 'pronoun' => array(
		// 	'name'                  => _x( 'Pronouns', 'Post type general name', 'wordsgain' ),
		// 	'singular_name'         => _x( 'Pronoun', 'Post type singular name', 'wordsgain' ),
		// 	'menu_name'             => _x( 'Pronouns', 'Admin Menu text', 'wordsgain' ),
		// 	'name_admin_bar'        => _x( 'Pronoun', 'Add New on Toolbar', 'wordsgain' ),
		// 	'add_new'               => __( 'Add New', 'wordsgain' ),
		// 	'add_new_item'          => __( 'Add New Pronoun', 'wordsgain' ),
		// 	'new_item'              => __( 'New Pronoun', 'wordsgain' ),
		// 	'edit_item'             => __( 'Edit Pronoun', 'wordsgain' ),
		// 	'view_item'             => __( 'View Pronoun', 'wordsgain' ),
		// 	'all_items'             => __( 'All Pronouns', 'wordsgain' ),
		// 	'search_items'          => __( 'Search Pronouns', 'wordsgain' ),
		// 	'not_found'             => __( 'No pronouns found.', 'wordsgain' ),
		// 	'not_found_in_trash'    => __( 'No pronouns found in Trash.', 'wordsgain' ),
		// 	'filter_items_list'     => _x( 'Filter pronouns list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'wordsgain' ),
		// 	'items_list_navigation' => _x( 'Pronouns list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'wordsgain' ),
		// 	'items_list'            => _x( 'Pronouns list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'wordsgain' ),
		// ),
		// 'preposition' => array(
		// 	'name'                  => _x( 'Prepositions', 'Post type general name', 'wordsgain' ),
		// 	'singular_name'         => _x( 'Preposition', 'Post type singular name', 'wordsgain' ),
		// 	'menu_name'             => _x( 'Prepositions', 'Admin Menu text', 'wordsgain' ),
		// 	'name_admin_bar'        => _x( 'Preposition', 'Add New on Toolbar', 'wordsgain' ),
		// 	'add_new'               => __( 'Add New', 'wordsgain' ),
		// 	'add_new_item'          => __( 'Add New Preposition', 'wordsgain' ),
		// 	'new_item'              => __( 'New Preposition', 'wordsgain' ),
		// 	'edit_item'             => __( 'Edit Preposition', 'wordsgain' ),
		// 	'view_item'             => __( 'View Preposition', 'wordsgain' ),
		// 	'all_items'             => __( 'All Prepositions', 'wordsgain' ),
		// 	'search_items'          => __( 'Search Prepositions', 'wordsgain' ),
		// 	'not_found'             => __( 'No prepositions found.', 'wordsgain' ),
		// 	'not_found_in_trash'    => __( 'No prepositions found in Trash.', 'wordsgain' ),
		// 	'filter_items_list'     => _x( 'Filter prepositions list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'wordsgain' ),
		// 	'items_list_navigation' => _x( 'Prepositions list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'wordsgain' ),
		// 	'items_list'            => _x( 'Prepositions list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'wordsgain' ),
		// ),
		// 'conjunction' => array(
		// 	'name'                  => _x( 'Conjunctions', 'Post type general name', 'wordsgain' ),
		// 	'singular_name'         => _x( 'Conjunction', 'Post type singular name', 'wordsgain' ),
		// 	'menu_name'             => _x( 'Conjunctions', 'Admin Menu text', 'wordsgain' ),
		// 	'name_admin_bar'        => _x( 'Conjunction', 'Add New on Toolbar', 'wordsgain' ),
		// 	'add_new'               => __( 'Add New', 'wordsgain' ),
		// 	'add_new_item'          => __( 'Add New Conjunction', 'wordsgain' ),
		// 	'new_item'              => __( 'New Conjunction', 'wordsgain' ),
		// 	'edit_item'             => __( 'Edit Conjunction', 'wordsgain' ),
		// 	'view_item'             => __( 'View Conjunction', 'wordsgain' ),
		// 	'all_items'             => __( 'All Conjunctions', 'wordsgain' ),
		// 	'search_items'          => __( 'Search Conjunctions', 'wordsgain' ),
		// 	'not_found'             => __( 'No conjunctions found.', 'wordsgain' ),
		// 	'not_found_in_trash'    => __( 'No conjunctions found in Trash.', 'wordsgain' ),
		// 	'filter_items_list'     => _x( 'Filter conjunctions list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'wordsgain' ),
		// 	'items_list_navigation' => _x( 'Conjunctions list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'wordsgain' ),
		// 	'items_list'            => _x( 'Conjunctions list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'wordsgain' ),
		// ),
		// 'interjection' => array(
		// 	'name'                  => _x( 'Interjections', 'Post type general name', 'wordsgain' ),
		// 	'singular_name'         => _x( 'Interjection', 'Post type singular name', 'wordsgain' ),
		// 	'menu_name'             => _x( 'Interjections', 'Admin Menu text', 'wordsgain' ),
		// 	'name_admin_bar'        => _x( 'Interjection', 'Add New on Toolbar', 'wordsgain' ),
		// 	'add_new'               => __( 'Add New', 'wordsgain' ),
		// 	'add_new_item'          => __( 'Add New Interjection', 'wordsgain' ),
		// 	'new_item'              => __( 'New Interjection', 'wordsgain' ),
		// 	'edit_item'             => __( 'Edit Interjection', 'wordsgain' ),
		// 	'view_item'             => __( 'View Interjection', 'wordsgain' ),
		// 	'all_items'             => __( 'All Interjections', 'wordsgain' ),
		// 	'search_items'          => __( 'Search Interjections', 'wordsgain' ),
		// 	'not_found'             => __( 'No interjections found.', 'wordsgain' ),
		// 	'not_found_in_trash'    => __( 'No interjections found in Trash.', 'wordsgain' ),
		// 	'filter_items_list'     => _x( 'Filter interjections list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'wordsgain' ),
		// 	'items_list_navigation' => _x( 'Interjections list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'wordsgain' ),
		// 	'items_list'            => _x( 'Interjections list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'wordsgain' ),
		// ),
	);

	if ( 'keys' === $type ) {
		return array_keys( $parts_of_speech );
	}

	if ( 'labels' === $type ) {
		return array_values( $parts_of_speech );
	}

	if ( isset( $parts_of_speech[ $type ] ) ) {
		return $parts_of_speech[ $type ];
	}

	return $parts_of_speech;
}

function get_random_part_of_speech() {
	$parts_of_speech = get_parts_of_speech_list( 'keys' );
	$rand_key        = array_rand( $parts_of_speech );

	return $parts_of_speech[ $rand_key ];
}

function get_menu_position( $type ) {
	$positions        = array();
	$parts_of_speech  = get_parts_of_speech_list( 'keys' );
	$initial_position = 30;

	foreach ( $parts_of_speech as $part_of_speech ) {
		$positions[ $part_of_speech ] = ++$initial_position;
	}

	if ( isset( $positions[ $type ] ) ) {
		return $positions[ $type ];
	}

	return null;
}