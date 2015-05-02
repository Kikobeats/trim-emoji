/**
 * trim-emoji - Deletes ':' from the begin and the end of an emoji shortcut.
 * @version v1.0.0
 * @link    https://github.com/Kikobeats/trim-emoji
 * @license MIT
 */require=function r(e,t,n){function i(u,f){if(!t[u]){if(!e[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(o)return o(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var p=t[u]={exports:{}};e[u][0].call(p.exports,function(r){var t=e[u][1][r];return i(t?t:r)},p,p.exports,r,e,t,n)}return t[u].exports}for(var o="function"==typeof require&&require,u=0;u<n.length;u++)i(n[u]);return i}({"trim-emoji":[function(r,e,t){"use strict";e.exports=function(r){var r,e,t;return e=r.charAt(0),t=r.charAt(r.length-1),e===t&&":"===e?r.split(":")[1]:r}},{}]},{},[]);