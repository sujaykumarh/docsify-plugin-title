/*
 * docsify-plugin-title.js v0.0.1
 * (https://github.com/Sujaykumarh/docsify-plugin-title/)
 * Copyright (c) 2021 Sujaykumar.Hublikar <hello@sujaykumarh.com>
 * Github (@sujaykumarh)
 * Licensed under Apache License, Version 2.0
 */


// javascript policy
'use strict';

const customPageTitleOptions = {
    prefix:     '',
    addPrefix:  false,
    suffix:     '',
    addSuffix:  false,
    seprator:   '|',
	debug:		false,
}

// main function
function customPageTitle( hook, vm ) {

	// get the `@customPageTitle:` data
	hook.beforeEach( function( content ) {
    });

    // set page title
	hook.doneEach( function() {
        console.log(document.title);
    });
}


// find heading plugin options
window.$docsify.customPageTitle = Object.assign(
	customPageTitleOptions,
	window.$docsify.customPageTitle
);
window.$docsify.plugins = [].concat(
	customPageTitle,
	window.$docsify.plugins
);