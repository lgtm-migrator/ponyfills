"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assign_1 = tslib_1.__importStar(require("../assign"));
describe('assign', function () {
    test('having the original assign if available', function () {
        if (Object.hasOwnProperty('assign')) {
            expect(Object.assign).toBe(assign_1.default);
        }
    });
    test('ensure skipping null/undefined sources', function () {
        var obj1 = {};
        var obj2 = null;
        var obj3 = undefined;
        var result = assign_1.assignPolyfill(obj1, obj2, obj3);
        expect(result).toBe(obj1);
        expect(result).toEqual(obj1);
    });
    test('assign values right to left', function () {
        var obj1 = {};
        var obj2 = { test: true };
        var result = assign_1.assignPolyfill(obj1, obj2);
        expect(result).toBe(obj1);
        expect(result).not.toBe(obj2);
        expect(result).toEqual({ test: true });
    });
});
//# sourceMappingURL=assign.js.map