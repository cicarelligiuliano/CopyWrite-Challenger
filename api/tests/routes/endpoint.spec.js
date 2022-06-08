const { expect } = require('chai');
const should = require('chai').should();
const session = require('supertest-session');
const app = require('../../src/app.js');

const agent = session(app);

describe('Endpoint', () => {
    describe('GET /', () => {
        it('should return status 400 if it have not text', (done) => {
            agent
                .get('/')
                .expect(400)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    done();
                });
        });
        it('should return status 400 if it have text but empty', (done) => {
            agent
                .get('/?text=')
                .expect(400)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    done();
                });
        });
        it('should return an error with the message "no text" if it have not text', (done) => {
            agent
                .get('/?text=')
                .expect(400)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.body.error.should.equal('no text');
                    done();
                });
        });
        it('should return an error with the message "no text" if it have text but empty', (done) => {
            agent
                .get('/?text=')
                .expect(400)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.body.error.should.equal('no text');
                    done();
                });
        });
        it('should return status 200 if it have text', (done) => {
            agent
                .get('/?text=hello')
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    done();
                });
        });
        it('should return status 200 with the text reversed in the body with the flag "text"', (done) => {
            agent
                .get('/?text=hello')
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.body.text.should.equal('olleh');
                    done();
                });
        });
        it('should return status 200 with the text in the body with the flag "original"', (done) => {
            agent
                .get('/?text=hello')
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.body.original.should.equal('hello');
                    done();
                });
        });
        it('should return status 200 with the flag "palindrome" in false if the text is not palindrome', (done) => {
            agent
                .get('/?text=hello')
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.body.palindrome.should.equal(false);
                    done();
                });
        });
        it('should return status 200 with the flag "palindrome" in true if the text is palindrome', (done) => {
            agent
                .get('/?text=madam')
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.body.palindrome.should.equal(true);
                    done();
                });
        });
        it('should return status 200 with the flag "palindrome" in false if the text is not palindrome being key sensitive', (done) => {
            agent
                .get('/?text=Madam')
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.body.palindrome.should.equal(false);
                    done();
                });
        });
    });
});
