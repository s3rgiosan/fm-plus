[![Latest Stable Version](https://poser.pugx.org/s3rgiosan/fm-plus/v/stable)](https://packagist.org/packages/s3rgiosan/fm-plus)
[![Total Downloads](https://poser.pugx.org/s3rgiosan/fm-plus/downloads)](https://packagist.org/packages/s3rgiosan/fm-plus)
[![License](https://poser.pugx.org/s3rgiosan/fm-plus/license)](https://packagist.org/packages/s3rgiosan/fm-plus)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6dc6efd8e7594536aaf457d136d01d9b)](https://www.codacy.com/app/s3rgiosan/fm-plus?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=s3rgiosan/fm-plus&amp;utm_campaign=Badge_Grade)
[![Code Climate](https://codeclimate.com/github/s3rgiosan/fm-plus/badges/gpa.svg)](https://codeclimate.com/github/s3rgiosan/fm-plus)

# Fieldmanager Plus #
**Contributors:** [s3rgiosan](https://profiles.wordpress.org/s3rgiosan)  
**Tags:** custom, fields, fieldmanager, library  
**Requires at least:** 4.7  
**Tested up to:** 4.7  
**Stable tag:** 1.0.0  
**License:** GPLv2 or later  
**License URI:** http://www.gnu.org/licenses/gpl-2.0.html  

Common utility classes for the Fieldmanager plugin on WordPress.

## Description ##

Common utility classes for the Fieldmanager plugin on WordPress.

### Usage ###

### Adds a meta box to the new/edit front page screen ###

```php
add_action( 'fm_post_page_on_front', function() {
    $fm = new \Fieldmanager_TextField( array(
        'name' => 'demo',
    ) );
    $fm->add_meta_box( 'Basic Field', 'post' );
} );
```

## Installation ##

Even though Fieldmanager Plus exists as a plugin, it doesn't do anything by
itself, but it does make its classes and functions available so you don't have
to include it as a dependency in every single one of your plugins or themes.

### Dashboard ###

1. Go to the 'Plugins' menu, and choose 'Add New'.
2. Search for 'fm-plus', and then click 'Install Now'.
2. Click 'Activate'.

### FTP ###

1. Download and extract the .zip file.
2. Upload the unzipped folder to the `/wp-content/plugins/` directory.
3. Activate the plugin through the 'Plugins' menu.

### Composer ###

`composer require s3rgiosan/fm-plus`

## Frequently Asked Questions ##

### Where can I report bugs? ###

Bugs can be reported on the [GitHub repository](https://github.com/s3rgiosan/fm-plus/issues).

### How can I contribute? ###

Join in on our [GitHub repository](https://github.com/s3rgiosan/fm-plus) and read our [contribution](https://github.com/s3rgiosan/fm-plus/blob/master/CONTRIBUTING.md) guidelines.

## Changelog ##

### 1.0.0 ###
* Initial release.

## Upgrade Notice ##

### 1.0 ###
Initial release.
