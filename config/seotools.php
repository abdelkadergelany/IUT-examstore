<?php
/**
 * @see https://github.com/artesaos/seotools
 */

return [
    'meta' => [
        /*
         * The default configurations to be used by the meta generator.
         */
        'defaults'       => [
            'title'        => "Past Papers questions of Islamic University of Technology ", // set false to total remove
            'titleBefore'  => false, // Put defaults.title before page title, like 'It's Over 9000! - Dashboard'
            'description'  => 'Download past exam papers of IUT for free. Download quizzes, final, and midterm exam papers.', // set false to total remove
            'separator'    => ' - ',
            'keywords'     => ['iut','islamic university of technology','islamic university of technology board bazar gazipur','iut-oic','oic'],
            'canonical'    => null, // Set null for using Url::current(), set false to total remove
            'robots'       => false, // Set to 'all', 'none' or any combination of index/noindex and follow/nofollow
        ],
        /*
         * Webmaster tags are always added.
         */
        'webmaster_tags' => [
            'google'    => null,
            'bing'      => null,
            'alexa'     => null,
            'pinterest' => null,
            'yandex'    => null,
            'norton'    => null,
        ],

        'add_notranslate_class' => false,
    ],
    'opengraph' => [
        /*
         * The default configurations to be used by the opengraph generator.
         */
        'defaults' => [
            'title'       => 'Past Papers questions of Islamic University of Technology', // set false to total remove
            'description' => 'Download past exam papers of IUT for free. Download quizzes, final, and midterm exam papers.', // set false to total remove
            'url'         => null, // Set null for using Url::current(), set false to total remove
            'type'        => 'website',
            'site_name'   => config('app.name'),
            'images'      => ["localhost:8000/images/logo/logo-left.jpg"],
        ],
    ],
    'twitter' => [
        /*
         * The default values to be used by the twitter cards generator.
         */
        'defaults' => [
            'card'        => 'summary',
            'site'        => 'IUTEXAMSTORE',
        ],
    ],
    'json-ld' => [
        /*
         * The default configurations to be used by the json-ld generator.
         */
        'defaults' => [
            'title'       => 'Past Papers questions of Islamic University of Technology', // set false to total remove
            'description' => 'Download past exam papers of IUT for free. Download quizzes, final, and midterm exam papers.', // set false to total remove
            'url'         => null, // Set null for using Url::current(), set false to total remove
            'type'        => 'WebPage',
            'images'      => ["localhost:8000/images/logo/logo-left.jpg"],
        ],
    ],
];
