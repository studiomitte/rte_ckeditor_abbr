<?php
$EM_CONF[$_EXTKEY] = [
    'title' => 'CKEditor Plugin for abbr tag',
    'description' => 'Add Abbreviations information through the ckeditor',
    'category' => 'be',
    'state' => 'stable',
    'clearCacheOnLoad' => true,
    'author' => 'Georg Ringer',
    'author_email' => 'gr@studiomitte.com',
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.0-10.4.99',
            'rte_ckeditor' => '9.5.0-10.4.99'
        ],
    ],
];
