"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Book = void 0;
var Document_js_1 = require("./Document.js");
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(isbn, edition, volume, title, subtitle, publishedAt, author) {
        var _this = _super.call(this, title, subtitle, publishedAt, author) || this;
        _this.isbn = isbn;
        _this.edition = edition;
        _this.volume = volume;
        return _this;
    }
    return Book;
}(Document_js_1["default"]));
exports.Book = Book;
exports["default"] = Book;
