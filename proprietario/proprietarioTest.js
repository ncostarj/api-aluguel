const assert = require('assert');
const expect = require('chai').expect;
const { ProprietarioService } = require('./proprietarioService');
const mongoose = require("mongoose");

const dsn = `mongodb://root:root@mongo:27017/api-aluguel?authSource=admin`;

mongoose.connect(dsn, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("error", e => {
  console.log(e);
});

describe('Proprietario', () => {

    describe('Buscar Proprietários', () => {

        it('Deve buscar proprietários', (done) => {

            ProprietarioService.buscar({ nome: /Carolina/ })
            .then((res) => {
                expect(res.length).to.be.greaterThan(0);
                mongoose.connection.close();
                done();

            })
            .catch(err => {
                mongoose.connection.close();
                done(err);
            });
            
        });

        it('should return -1 when the value is not present###', function() {
            assert.strictEqual([1, 2].indexOf(4), -1);
        });
    });

});