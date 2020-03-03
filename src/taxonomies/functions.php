<?php

namespace WordsGain\Taxonomies;

function get_translation_languages_list( $type = '' ) {
	$languages = array(
		'ru_RU' => __( 'Russian', 'wordsgain' ),
		'en_US' => __( 'English', 'wordsgain' ),
		'da_DK' => __( 'Danish', 'wordsgain' ),
		'pl_PL' => __( 'Polish', 'wordsgain' ),
		'es_ES' => __( 'Spanish', 'wordsgain' ),
	);

	if ( 'keys' === $type ) {
		return array_keys( $languages );
	}

	if ( 'labels' === $type ) {
		return array_values( $languages );
	}

	if ( isset( $languages[ $type ] ) ) {
		return $languages[ $type ];
	}

	return $languages;
}

