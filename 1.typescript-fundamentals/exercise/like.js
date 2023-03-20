"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likes_class_1 = require("./likes-class");
var component = new likes_class_1.Like(100, false);
component.onClick();
console.log("likesCount: ".concat(component.likesCount, " , isSelected: ").concat(component.isSelected));
