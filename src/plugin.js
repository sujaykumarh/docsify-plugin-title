/**
 * @license
 *
 * docsify-plugin-title/plugin.js REL_VER_NUMBER
 * (https://github.com/Sujaykumarh/docsify-plugin-title/)
 *
 * Copyright (c) 2021 Sujaykumar.Hublikar <hello@sujaykumarh.com>
 * Github (@sujaykumarh)
 *
 * Licensed under Apache License, Version 2.0
 */


// javascript policy
'use strict';

// config options
const customPageTitleOptions = {
    prefix: false,
    suffix: false,
    seprator: '|',
    debug: false,
}

// main function
function customPageTitle(hook, vm) {

    // before hook
    // hook.beforeEach(function (content) {
    // });

    // after hook
    hook.doneEach(function () {
        var _title = document.title;   // title from docsify

        debug('customPageTitleOptions: ' + customPageTitleOptions);
        debug('page title [before]: ' + document.title);
        if (customPageTitleOptions.prefix != '' || customPageTitleOptions.prefix != false) {
            _title = customPageTitleOptions.prefix + " " + customPageTitleOptions.seprator + " " + _title;
            debug('new title [prefix]:' + _title);
        }

        if (customPageTitleOptions.suffix != '' || customPageTitleOptions.suffix != false) {
            _title = _title + " " + customPageTitleOptions.seprator + " " + customPageTitleOptions.suffix;
            debug('new title [suffix]:' + _title);
        }

        document.title = _title;
    });
}

function debug(msg) {
    if (customPageTitleOptions.debug) console.log('[customPageTitle] log: ' + msg);
}

function error(msg) {
    if (customPageTitleOptions.debug) console.error('[customPageTitle] err: ' + msg);
}


// find customPageTitle plugin options
window.$docsify.customPageTitle = Object.assign(
    customPageTitleOptions,
    window.$docsify.customPageTitle
);

// Set docsify plugin
window.$docsify.plugins = [].concat(
    customPageTitle,
    window.$docsify.plugins
);