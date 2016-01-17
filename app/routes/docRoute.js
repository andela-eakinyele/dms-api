(function() {
  'use strict';
  var docFunc = require('./../controllers').docFunc;
  var routeMethods = require('./helpers');
  var bKeys = ['username', 'documentName', 'title', 'content', 'role'];

  var docRoutes = {
    createDoc: function(req, res) {
      // generate object for new doc data
      req.body.username = req.headers.username;
      var docData = routeMethods.parseReq(bKeys, req.body);
      docFunc.createDocument(docData).then(function(result) {
        res.status(result.status).json(result);
      }).catch(function(err) {
        routeMethods.dberrors(res, 'creating doc', err); // db error
      });
    },

    updateDoc: function(req, res) {
      var docData = routeMethods.parseReq(bKeys, req.body);
      docFunc.updateDocument(docData, req.params.id, req.headers.username)
        .then(function(result) {
          res.status(result.status).json(result);
        }).catch(function(err) {
          routeMethods.dberrors(res, 'updating doc', err); // db error
        });
    },

    getDoc: function(req, res) {
      docFunc.getDocument(req.params.id, req.headers.username)
        .then(function(result) {
          res.status(result.status).json(result);
        }).catch(function(err) {
          routeMethods.dberrors(res, 'getting doc', err); // db error
        });
    },

    getAllDocs: function(req, res) {
      docFunc.getAllDocuments(req.body.limit)
        .then(function(result) {
          res.status(result.status).json(result);
        }).catch(function(err) {
          routeMethods.dberrors(res, 'getting docs', err); // db error
        });
    },

    deleteDoc: function(req, res) {
      docFunc.deleteDocument(req.params.id, req.headers.username)
        .then(function(result) {
          res.status(result.status).json(result);
        }).catch(function(err) {
          routeMethods.dberrors(res, 'deleting doc', err); // db error
        });
    },

    getDocsById: function(req, res) {
      docFunc.getDocsByOwnerId(req.params.id)
        .then(function(result) {
          res.status(result.status).json(result);
        }).catch(function(err) {
          routeMethods.dberrors(res, 'getting doc', err); // db error
        });
    },

    getDocsByDate: function(req, res) {
      docFunc.getDocsByDate(req.body.date)
        .then(function(result) {
          res.status(result.status).json(result);
        }).catch(function(err) {
          routeMethods.dberrors(res, 'getting doc', err); // db error
        });
    }

  };
  module.exports = docRoutes;
})();
