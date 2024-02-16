<?php

return [
    // required import configurations of other extensions,
    // in case a module imports from another package
    'dependencies' => ['backend'],
    'tags' => [
        'backend.form',
    ],
    'imports' => [
        // recursive definiton, all *.js files in this folder are import-mapped
        // trailing slash is required per importmap-specification
        '@studiomitte/rte-ckeditor-abbr/' => 'EXT:rte_ckeditor_abbr/Resources/Public/JavaScript/',
    ],
];
