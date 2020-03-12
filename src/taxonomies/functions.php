<?php

namespace WordsGain\Taxonomies;

function get_translation_languages( $type = '', $exclude = '' ) {
	if ( $exclude ) {
		$exclude = strtolower( $exclude );
	}

	$languages = array(
		'ru_ru' => __( 'Russian', 'wordsgain' ),
		'en_us' => __( 'English', 'wordsgain' ),
		// 'da_dk' => __( 'Danish', 'wordsgain' ),
		// 'pl_PL' => __( 'Polish', 'wordsgain' ),
		// 'es_ES' => __( 'Spanish', 'wordsgain' ),
	);

	if ( 'keys' === $type ) {
		return array_keys( $languages );
	}

	if ( 'labels' === $type ) {
		return array_values( $languages );
	}

	if ( 'all' === $type ) {
		if ( $exclude ) {
			if ( is_array( $exclude ) ) {
				foreach ( $exclude as $exclude_item ) {
					if ( isset( $languages[ $exclude_item ] ) ) {
						unset( $languages[ $exclude_item ] );
					}
				}
			} else {
				if ( isset( $languages[ $exclude ] ) ) {
					unset( $languages[ $exclude ] );
				}
			}
		}
	}

	if ( isset( $languages[ $type ] ) ) {
		return $languages[ $type ];
	}

	return $languages;
}

