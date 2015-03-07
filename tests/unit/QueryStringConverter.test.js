'use strict';
/**
 * Created by dave on 02.01.15.
 */


const expect = require('chai').expect;

const QueryStringConverter = require('../../src/QueryStringConverter'),
	errors = require('../../src/errors');

describe('QueryStringConverter', function () {
	describe('#intance', function () {
		var qsConverterInstance;

		it('should throw if no adapter in options', function () {

		});
		beforeEach(function () {
			qsConverterInstance = new QueryStringConverter();
		});
	});


	describe('#convertQuery()', function () {
		var convertQuery,
			qsConverterInstance;

		beforeEach(function () {
			qsConverterInstance = new QueryStringConverter();
			convertQuery = qsConverterInstance.convertQuery;
		});

		it('should exist', function () {
			expect(convertQuery).to.exist;
		});

		it('should be a function', function () {
			expect(convertQuery).to.be.a('function');
		});

		describe('special cases', function () {
			it('should throw "InvalidQueryParameter" on invalid query Parameter', function () {
				var invalidQuery = 'invalidKey=invalidValue';
				var expectedError = errors.InvalidQueryParameter;
				expect(convertQuery.bind(qsConverterInstance, invalidQuery)).to.throw(expectedError);
			});
		});
	});

//	fields  : 'attributes', // --> Comma separated like fields=name,id,createdAt
//	where   : 'where', // --> Comma separated field:values pairs like field1:value1,field2:value2 (flat) - maybe
// allow keywords? include : 'include' // --> model1(fieldName1,fieldName2),model2

});
