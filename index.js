/*!
 * co-gitlab - index.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var thunkify = require('thunkify-wrap');

/**
 * Expose `wrap`
 */

module.exports = wrap;


var defaultAPI = ['get', 'list', 'create', 'update', 'remove'];

var methods = {
  milestones: [],
  members: [],
  hooks: [],
  globalHooks: [],
  users: [],
  mergeRequests: [],
  repositoryFiles: [],
  repository: [
    'getBranches',
    'protectBranch',
    'unprotectBranch',
    'getBranch',
    'getTags',
    'getCommits',
    'getTree',
    'getBlob'
  ],
  issues: [
    'listNotes',
    'createNote'
  ],
  projects: [
    'getByPath'
  ],
  projectMembers: [],
  groups: [],
  groupMembers: [],
};


function wrap(gitlab) {
  thunkify(gitlab, 'request');
  for (var key in methods) {
    var m = methods[key].concat(defaultAPI);
    thunkify(gitlab[key], m);
  }
  return gitlab;
}
