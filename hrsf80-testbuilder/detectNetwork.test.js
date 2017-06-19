/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */
// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
	// A Mocha test is just a function!
	// If the function throws an error when run, it fails.
	// If it doesn't throw an error when run, it doesn't fail. 
	// To read more about mocha, visit mochajs.org
	// Once you've read and understood this section, please comment it out. 
	// You will not be able to proceed with a failing test. 
	it('Doesn\'t throw an error, so it doesn\'t fail', function() {
		// This test doesn't really test anything at all! It will pass no matter what.
		var even = function(num) {
			return num / 2 === 0;
		}
		return even(10) === true;
	});
	// In tests, we want to compare the expected behavior to the actual behavior.
	// A test should only fail if the expected behavior doesn't match the actual.
	it('Throws an error when expected behavior does not match actual behavior', function() {
		var even = function(num) {
			return num / 2 === 0;
		}
		if (even(10) === true) {
			throw new Error('10 should be even!');
		}
	});
});
describe('Diner\'s Club', function() {
	// Be careful, tests can have bugs too...
	it('has a prefix of 38 and a length of 14', function() {
		//throw new Error('Delete me!');
		if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
			throw new Error('Test failed');
		}
	});
	it('has a prefix of 39 and a length of 14', function() {
		if (detectNetwork('39345678901233') !== 'Diner\'s Club') {
			throw new Error('Test failed');
		}
	});
});
describe('American Express', function() {
	// It can get annoying to keep typing the if/throw, so here is a
	// helper function to throw an error if the input statement isn't true. 
	var assert = function(isTrue) {
		if (isTrue) {
			throw new Error('Test failed');
		}
	};
	it('has a prefix of 34 and a length of 15', function() {
		assert(detectNetwork('343456789012345') !== 'American Express');
	});
	it('has a prefix of 37 and a length of 15', function() {
		assert(detectNetwork('373456789012345') !== 'American Express');
	});
});
describe('Visa', function() {
	// Chai is an entire library of helper functions for tests!
	// Chai provides an assert that acts the same as our previous assert.
	// Search the documentation to figure out how to access it. 
	//   http://chaijs.com/
	var assert = chai.assert;
	it('has a prefix of 4 and a length of 13', function() {
		//assert(detectNetwork('4123456789012') === 'Visa');
		assert.equal(detectNetwork('4123456789012'), "Visa")
	});
	it('has a prefix of 4 and a length of 16', function() {
		assert(detectNetwork('4123456789012345') === 'Visa');
	});
	it('has a prefix of 4 and a length of 19', function() {
		assert(detectNetwork('4123456789012345678') === 'Visa');
	});
});
describe('MasterCard', function() {
	// Chai lets you write more human-readable tests that throw helpful errors.
	// Expect syntax is one way to do this, but there are others. 
	// If you want to know more, check out the documentation. 
	//   http://chaijs.com/api/bdd/
	//var expect = chai.expect;
	var should = chai.should();
	it("has a prefix of 51 and a lenght of 16", function() {
		detectNetwork('5112345678901234').should.equal('MasterCard');
	});
	it("has a prefix of 52 and a lenght of 16", function() {
		detectNetwork('5212345678901234').should.equal('MasterCard');
	});
	it("has a prefix of 53 and a lenght of 16", function() {
		detectNetwork('5312345678901234').should.equal('MasterCard');
	});
	// You can also use should instead of expect, which changes the style
	// slightly. It really doesn't matter which one you use - check out 
	// http://chaijs.com/guide/styles/ for more info, but it's important
	// to be consistent (unlike in this file, where we use BOTH expect
	// and should, but that's just for learning), so once you've gotten 
	// these tests to pass using should syntax, refactor your tests to 
	// use either expect or should, but not both. 
	it('has a prefix of 54 and a length of 16', function() {
		detectNetwork('5412345678901234').should.equal("MasterCard");
	});
	it('has a prefix of 55 and a length of 16', function() {
		detectNetwork('5512345678901234').should.equal("MasterCard");
	})
});
describe('Discover', function() {
	// Tests without a function will be marked as "pending" and not run
	// Implement these tests (and others) and make them pass!
	it('has a prefix of 6011 and a length of 16', function() {
		detectNetwork('6011345678901234').should.equal("Discover");
	})
	it('has a prefix of 6011 and a length of 19', function() {
		detectNetwork('6011345678901234333').should.equal("Discover");
	})
	it('has a prefix of 65 and a length of 16', function() {
		detectNetwork('6511345678901234').should.equal("Discover");
	})
	it('has a prefix of 65 and a length of 19', function() {
		detectNetwork('6511345678901234333').should.equal("Discover");
	})
	for (var prefix = 644; prefix <= 649; prefix++) {
		(function(prefix) {
			it('has a prefix of ' + prefix + ' and a length of 16', function() {
				detectNetwork(prefix + "1345678901234").should.equal("Discover");
			});
		})(prefix)
	}
	for (var prefix = 644; prefix <= 649; prefix++) {
		(function(prefix) {
			it('has a prefix of ' + prefix + ' and a length of 19', function() {
				detectNetwork(prefix + "1345678901234333").should.equal("Discover");
			});
		})(prefix)
	}
});
describe('Maestro', function() {
	// Write full test coverage for the Maestro card
	//
	//////Maestro 12 length
	it("has a prefix of 5018 and a length of 12", function() {
		detectNetwork("501818666123").should.equal("Maestro")
	})
	it("has a prefix of 5020 and a length of 12", function() {
		detectNetwork("501818666123").should.equal("Maestro")
	})
	it("has a prefix of 5038 and a length of 12", function() {
		detectNetwork("501818666123").should.equal("Maestro")
	})
	it("has a prefix of 6304 and a length of 12", function() {
			detectNetwork("501818666123").should.equal("Maestro")
		})
		//////Maestro 13 length
	it("has a prefix of 5018 and a length of 13", function() {
		detectNetwork("5018186661233").should.equal("Maestro")
	})
	it("has a prefix of 5020 and a length of 13", function() {
		detectNetwork("5018186661233").should.equal("Maestro")
	})
	it("has a prefix of 5038 and a length of 13", function() {
		detectNetwork("5018186661233").should.equal("Maestro")
	})
	it("has a prefix of 6304 and a length of 13", function() {
			detectNetwork("5018186661233").should.equal("Maestro")
		})
		//////Maestro 14 length
	it("has a prefix of 5018 and a length of 14", function() {
		detectNetwork("50181866612344").should.equal("Maestro")
	})
	it("has a prefix of 5020 and a length of 14", function() {
		detectNetwork("50181866612344").should.equal("Maestro")
	})
	it("has a prefix of 5038 and a length of 14", function() {
		detectNetwork("50181866612344").should.equal("Maestro")
	})
	it("has a prefix of 6304 and a length of 14", function() {
			detectNetwork("50181866612344").should.equal("Maestro")
		})
		//////Maestro 15 length
	it("has a prefix of 5018 and a length of 15", function() {
		detectNetwork("501818666123555").should.equal("Maestro")
	})
	it("has a prefix of 5020 and a length of 15", function() {
		detectNetwork("501818666123555").should.equal("Maestro")
	})
	it("has a prefix of 5038 and a length of 15", function() {
		detectNetwork("501818666123555").should.equal("Maestro")
	})
	it("has a prefix of 6304 and a length of 15", function() {
			detectNetwork("501818666123555").should.equal("Maestro")
		})
		//////Maestro 16 length
	it("has a prefix of 5018 and a length of 16", function() {
		detectNetwork("5018186661236666").should.equal("Maestro")
	})
	it("has a prefix of 5020 and a length of 16", function() {
		detectNetwork("5018186661236666").should.equal("Maestro")
	})
	it("has a prefix of 5038 and a length of 16", function() {
		detectNetwork("5018186661236666").should.equal("Maestro")
	})
	it("has a prefix of 6304 and a length of 16", function() {
			detectNetwork("5018186661236666").should.equal("Maestro")
		})
		//////Maestro 17 length
	it("has a prefix of 5018 and a length of 17", function() {
		detectNetwork("50181866612377777").should.equal("Maestro")
	})
	it("has a prefix of 5020 and a length of 17", function() {
		detectNetwork("50181866612377777").should.equal("Maestro")
	})
	it("has a prefix of 5038 and a length of 17", function() {
		detectNetwork("50181866612377777").should.equal("Maestro")
	})
	it("has a prefix of 6304 and a length of 17", function() {
			detectNetwork("50181866612377777").should.equal("Maestro")
		})
		//////Maestro 18 length
	it("has a prefix of 5018 and a length of 18", function() {
		detectNetwork("501818666123888888").should.equal("Maestro")
	})
	it("has a prefix of 5020 and a length of 18", function() {
		detectNetwork("501818666123888888").should.equal("Maestro")
	})
	it("has a prefix of 5038 and a length of 18", function() {
		detectNetwork("501818666123888888").should.equal("Maestro")
	})
	it("has a prefix of 6304 and a length of 18", function() {
			detectNetwork("501818666123888888").should.equal("Maestro")
		})
		//////Maestro 19 length
	it("has a prefix of 5018 and a length of 19", function() {
		detectNetwork("5018186661239999999").should.equal("Maestro")
	})
	it("has a prefix of 5020 and a length of 19", function() {
		detectNetwork("5018186661239999999").should.equal("Maestro")
	})
	it("has a prefix of 5038 and a length of 19", function() {
		detectNetwork("5018186661239999999").should.equal("Maestro")
	})
	it("has a prefix of 6304 and a length of 19", function() {
		detectNetwork("5018186661239999999").should.equal("Maestro")
	})
}); // end of Maestro
describe('China UnionPay', function() {
	it("has a prefix of 624 and a length of 16", function() {
		detectNetwork("6241266666666456").should.equal("China UnionPay")
	})
	it("has a prefix of 624 and a length of 17", function() {
		detectNetwork("62412666666664561").should.equal("China UnionPay")
	})
	it("has a prefix of 624 and a length of 18", function() {
		detectNetwork("624126666666645612").should.equal("China UnionPay")
	})
	it("has a prefix of 624 and a length of 19", function() {
		detectNetwork("6241266666666456123").should.equal("China UnionPay")
	})
	it("has a prefix of 625 and a length of 16", function() {
		detectNetwork("6251266666666456").should.equal("China UnionPay")
	})
	it("has a prefix of 625 and a length of 17", function() {
		detectNetwork("62512666666664561").should.equal("China UnionPay")
	})
	it("has a prefix of 625 and a length of 18", function() {
		detectNetwork("625126666666645612").should.equal("China UnionPay")
	})
	it("has a prefix of 625 and a length of 19", function() {
		detectNetwork("6251266666666456123").should.equal("China UnionPay")
	})
	it("has a prefix of 626 and a length of 16", function() {
		detectNetwork("6261266666666456").should.equal("China UnionPay")
	})
	it("has a prefix of 626 and a length of 17", function() {
		detectNetwork("62612666666664561").should.equal("China UnionPay")
	})
	it("has a prefix of 626 and a length of 18", function() {
		detectNetwork("626126666666645612").should.equal("China UnionPay")
	})
	it("has a prefix of 626 and a length of 19", function() {
		detectNetwork("6261266666666456123").should.equal("China UnionPay")
	})
	for (var prefix = 6282; prefix <= 6288; prefix++) {
		(function(prefix) {
			it('has a prefix of ' + prefix + ' and a length of 16', function() {
				detectNetwork(prefix + "134567890123").should.equal("China UnionPay");
			});
		})(prefix)
	}
	for (var prefix = 6282; prefix <= 6288; prefix++) {
		(function(prefix) {
			it('has a prefix of ' + prefix + ' and a length of 17', function() {
				detectNetwork(prefix + "1345678901237").should.equal("China UnionPay");
			});
		})(prefix)
	}
	for (var prefix = 6282; prefix <= 6288; prefix++) {
		(function(prefix) {
			it('has a prefix of ' + prefix + ' and a length of 18', function() {
				detectNetwork(prefix + "13456789012388").should.equal("China UnionPay");
			});
		})(prefix)
	}
	for (var prefix = 6282; prefix <= 6288; prefix++) {
		(function(prefix) {
			it('has a prefix of ' + prefix + ' and a length of 19', function() {
				detectNetwork(prefix + "134567890123999").should.equal("China UnionPay");
			});
		})(prefix)
	}
	/////BREakpOint
	for (var prefix = 622126; prefix <= 622925; prefix++) {
		(function(prefix) {
			it('has a prefix of ' + prefix + ' and a length of 16', function() {
				detectNetwork(prefix + "1345678901").should.equal("China UnionPay");
			});
		})(prefix)
	}
	for (var prefix = 622126; prefix <= 622925; prefix++) {
		(function(prefix) {
			it('has a prefix of ' + prefix + ' and a length of 17', function() {
				detectNetwork(prefix + "13456789012").should.equal("China UnionPay");
			});
		})(prefix)
	}
	for (var prefix = 622126; prefix <= 622925; prefix++) {
		(function(prefix) {
			it('has a prefix of ' + prefix + ' and a length of 18', function() {
				detectNetwork(prefix + "134567890123").should.equal("China UnionPay");
			});
		})(prefix)
	}
	for (var prefix = 622126; prefix <= 622925; prefix++) {
		(function(prefix) {
			it('has a prefix of ' + prefix + ' and a length of 19', function() {
				detectNetwork(prefix + "1345678901239").should.equal("China UnionPay");
			});
		})(prefix)
	}
});
describe('Switch', function() {
	it("has a prefix of 4903 and a length of 16", function() {
		detectNetwork("4903555555555555").should.equal("Switch")
	})
	it("has a prefix of 4903 and a length of 18", function() {
		detectNetwork("490355555555555522").should.equal("Switch")
	})
	it("has a prefix of 4903 and a length of 19", function() {
		detectNetwork("4903555555555555333").should.equal("Switch")
	})
	it("has a prefix of 4905 and a length of 16", function() {
		detectNetwork("4905555555555555").should.equal("Switch")
	})
	it("has a prefix of 4905 and a length of 18", function() {
		detectNetwork("490555555555555522").should.equal("Switch")
	})
	it("has a prefix of 4905 and a length of 19", function() {
		detectNetwork("4905555555555555333").should.equal("Switch")
	})
	it("has a prefix of 4911 and a length of 16", function() {
		detectNetwork("4911555555555555").should.equal("Switch")
	})
	it("has a prefix of 4911 and a length of 18", function() {
		detectNetwork("491155555555555522").should.equal("Switch")
	})
	it("has a prefix of 4911 and a length of 19", function() {
		detectNetwork("4911555555555555333").should.equal("Switch")
	})
	it("has a prefix of 4936 and a length of 16", function() {
		detectNetwork("4936555555555555").should.equal("Switch")
	})
	it("has a prefix of 4936 and a length of 18", function() {
		detectNetwork("493655555555555522").should.equal("Switch")
	})
	it("has a prefix of 4936 and a length of 19", function() {
		detectNetwork("4936555555555555333").should.equal("Switch")
	})
	it("has a prefix of 564182 and a length of 16", function() {
		detectNetwork("5641825555555555").should.equal("Switch")
	})
	it("has a prefix of 564182 and a length of 18", function() {
		detectNetwork("564182555555555522").should.equal("Switch")
	})
	it("has a prefix of 564182 and a length of 19", function() {
		detectNetwork("5641825555555555333").should.equal("Switch")
	})
	it("has a prefix of 633110 and a length of 16", function() {
		detectNetwork("6331105555555555").should.equal("Switch")
	})
	it("has a prefix of 633110 and a length of 18", function() {
		detectNetwork("633110555555555522").should.equal("Switch")
	})
	it("has a prefix of 633110 and a length of 19", function() {
		detectNetwork("6331105555555555333").should.equal("Switch")
	})
	it("has a prefix of 6333 and a length of 16", function() {
		detectNetwork("6333105555555555").should.equal("Switch")
	})
	it("has a prefix of 6333 and a length of 18", function() {
		detectNetwork("633310555555555522").should.equal("Switch")
	})
	it("has a prefix of 6333 and a length of 19", function() {
		detectNetwork("6333105555555555333").should.equal("Switch")
	})
	it("has a prefix of 6759 and a length of 16", function() {
		detectNetwork("6759105555555555").should.equal("Switch")
	})
	it("has a prefix of 6759 and a length of 18", function() {
		detectNetwork("675910555555555522").should.equal("Switch")
	})
	it("has a prefix of 6759 and a length of 19", function() {
		detectNetwork("6759105555555555333").should.equal("Switch")
	})
}); //end of Switch