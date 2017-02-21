<?php
/**
 * Fieldmanager Plus
 *
 * @link  http://s3rgiosan.com/
 * @since 1.0.0
 *
 * @wordpress-plugin
 * Plugin Name:       Fieldmanager Plus
 * Plugin URI:        https://github.com/s3rgiosan/fm-plus/
 * Description:       Common utility classes for the Fieldmanager plugin on WordPress.
 * Version:           1.0.0
 * Author:            Sérgio Santos
 * Author URI:        http://s3rgiosan.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       fm-plus
 * Domain Path:       /languages
 * GitHub Plugin URI: https://github.com/s3rgiosan/fm-plus
 * GitHub Branch:     master
 */

namespace s3rgiosan\WP\Plugin\Fieldmanager;

if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) {
	require_once dirname( __FILE__ ) . '/vendor/autoload.php';
}

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Adds a meta box to the new/edit front page screen.
 *
 * Usage:
 * ```php
 * add_action( 'fm_post_page_on_front', function() {
 *     $fm = new \Fieldmanager_TextField( array(
 *         'name' => 'demo',
 *     ) );
 *     $fm->add_meta_box( 'Basic Field', 'post' );
 * } );
 * ```
 *
 * @since  1.0.0
 * @param  array $calculated_context Array of context and 'type' information.
 * @return array                     Possibly-modified array of context and 'type' information.
 */
function show_on_front_page( $calculated_context ) {

	if ( empty( $calculated_context ) ) {
		return $calculated_context;
	}

	if ( $calculated_context[0] !== 'post' ) {
		return $calculated_context;
	}

	if ( empty( $calculated_context[1] ) ) {
		return $calculated_context;
	}

	if ( $calculated_context[1] !== 'page' ) {
		return $calculated_context;
	}

	$post_id = false;

	// If we're showing it based on ID, get the current ID
	if ( isset( $_GET['post'] ) ) {
		$post_id = intval( $_GET['post'] );
	} elseif ( isset( $_POST['post_ID'] ) ) {
		$post_id = intval( $_POST['post_ID'] );
	}

	if ( ! $post_id ) {
		return $calculated_context;
	}

	if ( $post_id !== intval( get_option( 'page_on_front' ) ) ) {
		return $calculated_context;
	}

	return array(
		'post',
		'page_on_front',
	);
}
add_filter( 'fm_calculated_context', '\s3rgiosan\WP\Plugin\Fieldmanager\show_on_front_page' );
