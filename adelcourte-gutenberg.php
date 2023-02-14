<?php

/**
 * Plugin Name:       Antoine Delcourte's Gutenberg
 * Description:       Custom Guntenberg blocks created for a 5th year of web development studies class.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Antoine Delcourte
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       adelcourte-gutenberg
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_adelcourte_gutenberg_block_init()
{
    $blocks = [
        '1-image-caption',
        '2-image-caption-content',
    ];

    foreach ($blocks as $block) {
        register_block_type(__DIR__ . '/build/' . $block);
    }
}
add_action('init', 'create_block_adelcourte_gutenberg_block_init');

function add_custom_category($categories)
{
    $categories[] = [
        'slug' => 'adelcourte',
        'title' => 'Blocs Antoine Delcourte',
    ];

    return $categories;
}

add_filter('block_categories_all', 'add_custom_category');
