const request = require("supertest"); // Mengimpor pustaka Supertest untuk membuat permintaan HTTP
const { expect } = require("chai"); // Mengimpor gaya asersi 'expect' dari pustaka asersi Chai
// const url = "https://api.restful-api.dev/objects/7"; // URL dasar dari API yang akan diuji


// Fitur Object
describe("Test Scenario Object", function () {
    //Test Case 1 by id
    it("Get Object by id", async function () {
        const response = await request("https://api.restful-api.dev").get("/objects/7")
        expect(response.status).equal(200)
        expect(response.body.id).to.equal("7")
    })

    //Test Case by name
    it("Get Object by name", async function () {
        const response = await request("https://api.restful-api.dev").get("/objects/7")
        console.log(response.status); // Print status code
        console.log(response.body); // Print response body

        expect(response.status).equal(200)
        expect(response.body.name).to.equal("Apple MacBook Pro 16")
    })

})