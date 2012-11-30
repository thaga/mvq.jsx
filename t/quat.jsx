// tests are borrowed from Google Closure Library
// https://developers.google.com/closure/library/

import "js/web.jsx";

import "../lib/mvq.jsx";

import "./lib/test-mvq.jsx";

class _Test extends TestMVQ.<Quat> {

    function testConstructor() : void {
        var q0 = new Quat();
        this.assertEquals(
            [0, 0, 0, 0], q0);
    }

}

// vim: set expandtab:
