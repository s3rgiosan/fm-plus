=== Fieldmanager Plus ===

Common utility classes for the Fieldmanager plugin on WordPress.

== Usage ==

= Adds a meta box to the new/edit front page screen =

```php
add_action( 'fm_post_page_on_front', function() {
    $fm = new \Fieldmanager_TextField( array(
        'name' => 'demo',
    ) );
    $fm->add_meta_box( 'Basic Field', 'post' );
} );
```

== Changelog ==

= 1.0.0 =
* Initial release.
