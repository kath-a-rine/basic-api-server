'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../src/models');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync(); 
});

afterAll(async () => {
  await sequelize.drop();
});

let book = {
  title: 'tester',
  author: 'mr tester',
  genre: 'crime',
};

describe('Testing REST API', () => {

  test('Create a book', async() => {
    let response = await mockRequest.post('/books').send(book);

    expect(response.status).toEqual(200);
    expect(response.body.title).toEqual('tester');
    expect(response.body.author).toEqual('mr tester');
    expect(response.body.genre).toEqual('crime');
  });

  test('Should get all books', async() => {
    let response = await mockRequest.get('/books');

    expect(response.status).toEqual(200);
  });

  test('Get one book', async() => {
    let response = await mockRequest.get('/books/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  test('Should update a book', async() => {
    let response = await mockRequest.put('/books/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  test('Should delete a book', async() => {
    let response = await mockRequest.delete('/books/1');

    expect(response.status).toEqual(200);
  });

  test('Create a food item', async() => {
    let response = await mockRequest.post('/food').send({
      name: 'tester',
      cuisine: 'italian',
      allergens: 'peanuts',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tester');
    expect(response.body.cuisine).toEqual('italian');
    expect(response.body.allergens).toEqual('peanuts');
  });

  test('Should all foods', async() => {
    let response = await mockRequest.get('/food');

    expect(response.status).toEqual(200);
  });

  test('Get one food item', async() => {
    let response = await mockRequest.get('/food/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  test('Should update a food item', async() => {
    let response = await mockRequest.put('/food/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  test('Should delete a food item', async() => {
    let response = await mockRequest.delete('/food/1');

    expect(response.status).toEqual(200);
  });
});