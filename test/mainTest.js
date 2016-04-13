import mirror from '../index'
import { assert } from 'chai'

describe( "obj-mirror test" , () => {

	describe( "a function test", () => {	// F constructor invoke get result equal F instance get result
		it( "F() instanceof F should equal true", () => {
			assert.isTrue( new F() instanceof F );
		});
	});

	describe( "an exmple" , () => {
		it( "Can be omitted when using 'new' keyword" , () => {
			function Add(){
				var _add = mirror( Add );
				_add.arr = [...arguments];
				return _add;
			};
			Add.prototype.arr = [];
			Add.prototype.sum = function(){
				var result = 0;
				for( let v of this.arr)
					result += v;
				return result;
			};
			var adder = Add( 1 , 2 , 3 , 5 , 6 , 7 , 8 , 9 , 10 ),
				result = adder.sum();
				
			assert.isTrue( new F() instanceof F );
			assert.equal( result , 51 );
		});
	});

});
function F(){
}