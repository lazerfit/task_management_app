import { http, HttpResponse } from 'msw';

export const apiResponse = <T>(data: T | T[]) => {
  return {
    success: true,
    message: 'success',
    data: data,
  };
};

export const preflightHandler = [
  http.options('*', () => {
    return new HttpResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers': '*',
      },
    });
  }),
];

export const baseUrl = 'http://localhost:8080/api';
