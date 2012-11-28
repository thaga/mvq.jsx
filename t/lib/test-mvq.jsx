
import "test-case.jsx";

class TestMVQ.<T> extends TestCase {

    function assertEquals(expect : number[], got : T) : void {
        var status = got.equals(new T(expect));
        if (!status) {
            this.diag(got.toString());
            this.diag(new T(expect).toString());
        }
        this.expect(status).toBe(true);
    }

    function assertEquals(expect : number, got : number) : void {
        this.expect(got).toBe(expect);
    }

}
