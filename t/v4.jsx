// tests are borrowed from Google Closure Library
// https://developers.google.com/closure/library/

import "../lib/mvq.jsx";

import "./lib/test-mvq.jsx";

class _Test extends TestMVQ.<V4> {

    function testConstructor() : void {
        var v0 = new V4();
        this.assertEquals(
            [0, 0, 0, 0], v0);
    }

}

// vim: set expandtab:
