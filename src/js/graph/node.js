"use strict";

function Node() {
  this.url = "";
  this.start = Date.now();
  this.end = Date.now();
  this.duration = Date.now() - Date.now();
  this.nodes = [new Node()];
}
