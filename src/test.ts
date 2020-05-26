// This file is required by karma.conf.js and loads recursively all the .spec and framework files


import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

/**
 * variable used for checking specs file
 */
declare const require: any;

// First, initialize the Angular testing environment.
/**
 * Method for environment init
 */
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
/**
 * context variable to find specs file
 */
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
/**
 * Map context keys
 */
context.keys().map(context);
