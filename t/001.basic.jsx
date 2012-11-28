// tests are borrowed from Google Closure Library
// https://developers.google.com/closure/library/

import "test-case.jsx";
import "js/web.jsx";

import "../lib/mvq.jsx";


class _Test extends TestCase {

    function assertEquals(expect : number[], got : M44) : void {
        var status = got.equals(new M44(expect));
        if (!status) {
            this.diag(got.toString());
            this.diag(new M44(expect).toString());
        }
        this.expect(status).toBe(true);
    }

    function assertEquals(expect : number, got : number) : void {
        this.expect(got).toBe(expect);
    }

    function testConstructor() : void {
        var m0 = new M44();
        this.assertEquals(
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], m0);

        var m1 = new M44(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        this.assertEquals(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], m1);

        var m2 = m1.clone();
        this.assertEquals(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], m1);
        this.assertEquals(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], m2);

        // row major
        var m3 = new M44(
             1, 5,  9, 13,
             2, 6, 10, 14,
             3, 7, 11, 15,
             4, 8, 12, 16);
        this.assertEquals(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], m3);
    }

    function testSet() : void {

        var m0 = new M44();
        var m1 = new M44(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        m0.set(m1);
        this.assertEquals(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], m0);

        // row major
        m0.set(
             2, 6, 10, 14,
             3, 7, 11, 15,
             4, 8, 12, 16,
             5, 9, 13, 17);
        this.assertEquals(
            [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], m0);
    }

    function testAdd() : void {
        var m0 = new M44([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        var m1 = new M44([
            9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8]);
        var m2 = m0.clone().add(m1);
        this.assertEquals(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], m0);
        this.assertEquals(
            [9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8], m1);
        this.assertEquals(
            [10, 12, 14, 16, 18, 20, 22, 24, 10, 12, 14, 16, 18, 20, 22, 24], m2);

        m0.add(m1);
        this.assertEquals(
            [9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8], m1);
        this.assertEquals(
            [10, 12, 14, 16, 18, 20, 22, 24, 10, 12, 14, 16, 18, 20, 22, 24], m0);
    }

    function testSub() : void {
        var m0 = new M44([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        var m1 = new M44([
            9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8]);
        var m2 = m0.clone().sub(m1);

        this.assertEquals(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], m0);
        this.assertEquals(
            [9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8], m1);
        this.assertEquals(
            [-8, -8, -8, -8, -8, -8, -8, -8, 8, 8, 8, 8, 8, 8, 8, 8], m2);

        m1.sub(m0);
        this.assertEquals(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], m0);
        this.assertEquals(
            [8, 8, 8, 8, 8, 8, 8, 8, -8, -8, -8, -8, -8, -8, -8, -8], m1);
    }

    function testMul() : void {
        var m0 = new M44([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        var m1 = new M44([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

        var m2 = m0.clone().mul(m1);
        this.assertEquals(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], m0);
        this.assertEquals(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], m1);
        this.assertEquals(
            [90, 100, 110, 120, 202, 228, 254, 280,
             314, 356, 398, 440, 426, 484, 542, 600], m2);

        m1.mul(m0);
        this.assertEquals(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], m0);
        this.assertEquals(
            [90, 100, 110, 120, 202, 228, 254, 280,
             314, 356, 398, 440, 426, 484, 542, 600], m1);
    }

    function testTranspose() : void {
        var m0 = new M44([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        var m1 = new M44([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

        m0.transpose(m1);
        this.assertEquals(
            [1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, 16], m0);
        this.assertEquals(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], m1);

        m0.transpose();
        this.assertEquals(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], m0);
    }

    function testDet() : void {
        var m0 = new M44([
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        this.assertEquals(0, m0.det());
        this.assertEquals(
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], m0);

        m0.set([
             1, 2, 3, 4, 2, 3, 4, 1, 3, 4, 1, 2, 4, 1, 2, 3]);
        this.assertEquals(160, m0.det());
        this.assertEquals(
            [1, 2, 3, 4, 2, 3, 4, 1, 3, 4, 1, 2, 4, 1, 2, 3], m0);
    }

    function testInverse() : void {
        var m0 = new M44([
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        this.expect(m0.inverse()).toBe(null);
        this.assertEquals(
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], m0);

        m0.set([
             1, 2, 3, 4, 2, 3, 4, 1, 3, 4, 1, 2, 4, 1, 2, 3]);

        this.expect(m0.inverse()).notToBe(null);
        this.assertEquals(
            [-0.225, 0.025, 0.025, 0.275, 0.025, 0.025, 0.275, -0.225,
             0.025, 0.275, -0.225, 0.025, 0.275, -0.225, 0.025, 0.025], m0);

        m0.setScale(0.01);
        this.expect(m0.inverse()).notToBe(null);
        var m1 = new M44();
        m1.setScale(100);
        this.assertEquals(m1.array(), m0);
    }
}

// vim: set expandtab:
