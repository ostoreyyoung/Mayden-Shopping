import '@testing-library/jest-dom/vitest';
const { JSDOM } = require('jsdom');

global.localStorage = new JSDOM('<!DOCTYPE html>').window.localStorage;