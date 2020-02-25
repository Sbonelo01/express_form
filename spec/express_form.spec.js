describe('express form testing', () => {
    const axios = require('axios');
    const readline = require('readline');
    const fixture = require('./fixture')
    const {
        Client
    } = require('pg')
    let server

    beforeEach(() => {
        server = require('../app')
    });

    afterEach(() => {
        client = new Client();
        server = client.end();
    })

    it('should return an html form', async(done) => {
        try {
            const html = await axios.get("http://localhost:3000/new_visitor")
            expect(html.data).toEqual(fixture)
        } catch (err) {
            console.log(err)
        }

        done()
    })
})
