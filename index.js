"use strict";

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
  return !!this.match(/^\s*$/);
}

Array.prototype.last = function() {
  return this.slice(-1)[0];
}

// Defines a phrase object
function Phrase(content) {
  this.content = content;

  this.processedContent = function() {
    return this.processor(this.content);
  } 

  // Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function () {
    return this.content.toUpperCase();
  }

  this.processor = function(string) {
    return string.toLowerCase();
  }
}
