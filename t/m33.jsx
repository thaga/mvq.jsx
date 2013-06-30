// tests are borrowed from Google Closure Library
// https://developers.google.com/closure/library/

import "../lib/mvq.jsx";

import "./lib/test-mvq.jsx";

class _Test extends TestMVQ.<M33> {

    function testConstructor() : void {
        var m0 = new M33();
        this.assertEquals(
            [0, 0, 0, 0, 0, 0, 0, 0, 0], m0);

    }

}

// vim: set expandtab:
