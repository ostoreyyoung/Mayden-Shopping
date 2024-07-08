const { JSDOM } = require('jsdom');

global.localStorage = new JSDOM('<!DOCTYPE html>').window.localStorage;