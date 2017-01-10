# WordPress Gulp Boilerplate

This is a repo for streamlining WordPress Theme development.

## Assumptions

* WordPress as a Git submodule in `/wordpress/`
* Custom content directory in `/wp-content/` (cleaner, and also because it can't be in `/wordpress/`)
* `wp-config.php` in the root (because it can't be in `/wordpress/`)
* All writable directories are symlinked to similarly named locations under `/shared/`.
