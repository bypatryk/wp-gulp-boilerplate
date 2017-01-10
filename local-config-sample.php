<?php
/*
This is a sample local-config.php file
In it, you *must* include the four main database defines
You may include other settings here that you only want enabled on your local development checkouts
*/
define( 'DB_NAME', 'wordpress-boilerplate' );
define( 'DB_USER', 'root' );
define( 'DB_PASSWORD', '' );
define( 'DB_HOST', 'localhost' ); // Probably 'localhost'

define( 'WP_HOME', 'http://localhost/wordpress-boilerplate' );
define( 'WP_SITEURL', WP_HOME . '/wordpress' );

$table_prefix  = 'wp_';
