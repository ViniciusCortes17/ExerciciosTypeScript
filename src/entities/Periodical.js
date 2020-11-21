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
exports.Periodical = void 0;
var Document_js_1 = require("./Document.js");
var Periodical = /** @class */ (function (_super) {
    __extends(Periodical, _super);
    function Periodical(issn, volume, issue, title, subtitle, publishedAt, author) {
        var _this = _super.call(this, title, subtitle, publishedAt, author) || this;
        _this.issn = issn;
        _this.volume = volume;
        _this.issue = issue;
        return _this;
    }
    return Periodical;
}(Document_js_1["default"]));
exports.Periodical = Periodical;
exports["default"] = Periodical;
