// tests are borrowed from Google Closure Library
// https://developers.google.com/closure/library/

import "js/web.jsx";

import "../lib/mvq.jsx";

import "./lib/test-mvq.jsx";

class _Test extends TestMVQ.<M22> {

    function testConstructor() : void {
        var m0 = new M22();
        this.assertEquals(
            [0, 0, 0, 0], m0);

    }

}

// vim: set expandtab:
