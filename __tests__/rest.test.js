'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../src/models');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync(); // missing something. unable to read
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing REST API', () => {

  test('Create a book', async() => {
    let response = await mockRequest.post('/books').send({
      title: 'tester',
      author: 'mr tester',
      genre: 'crime',
    });

    expect(response.status).toEqual(200);
    expect(response.body.title).toEqual('tester');
    expect(response.body.author).toEqual('mr tester');
    expect(response.body.genre).toEqual('crime');
  });

  test('Should read from books', () => {
    expect(true).toBe(false);
  });

  test('Should update a book', () => {
    expect(true).toBe(false);
  });

  test('Should delete a book', () => {
    expect(true).toBe(false);
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

  test('Should read from food', () => {
    expect(true).toBe(false);
  });

  test('Should update a food item', () => {
    expect(true).toBe(false);
  });

  test('Should delete a food item', () => {
    expect(true).toBe(false);
  });
});