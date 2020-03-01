<?php

namespace WordsGain\Taxonomies;

function get_translation_languages_list( $type = '' ) {
	$languages = array(
		'ru' => __( 'Russian Translate', 'wordsgain' ),
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

