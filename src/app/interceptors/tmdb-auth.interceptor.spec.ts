import { TestBed } from '@angular/core/testing';
import {
  HttpHandlerFn,
  HttpHeaders,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tmdbAuthInterceptor } from './tmdb-auth.interceptor';
import { Observable } from 'rxjs';
describe('tmdbAuthInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => tmdbAuthInterceptor(req, next));

  let mockNext: jasmine.Spy<HttpHandlerFn>;
  let testRequest: HttpRequest<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    mockNext = jasmine.createSpy('HttpHandlerFn').and.callFake((req) => {
      return new Observable((subscriber) => {
        subscriber.complete();
      });
    });
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization header with API key from environment', () => {
    testRequest = new HttpRequest(
      'GET',
      'https://api.themoviedb.org/3/movie/popular'
    );
    interceptor(testRequest, mockNext);

    const interceptedRequest = mockNext.calls.mostRecent().args[0];
    expect(interceptedRequest.headers.get('Authorization')).toBe(
      `Bearer ${environment.tmdbApiKey}`
    );
  });

  it('should add accept header with application/json', () => {
    testRequest = new HttpRequest(
      'GET',
      'https://api.themoviedb.org/3/movie/popular'
    );
    interceptor(testRequest, mockNext);

    const interceptedRequest = mockNext.calls.mostRecent().args[0];
    expect(interceptedRequest.headers.get('accept')).toBe('application/json');
  });

  it('should preserve existing headers when adding new ones', () => {
    testRequest = new HttpRequest(
      'GET',
      'https://api.themoviedb.org/3/movie/popular',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'test-value' }),
      }
    );
    interceptor(testRequest, mockNext);

    const interceptedRequest = mockNext.calls.mostRecent().args[0];
    expect(interceptedRequest.headers.get('Custom-Header')).toBe('test-value');
    expect(interceptedRequest.headers.get('Authorization')).toBeTruthy();
  });

  it('should not modify existing Authorization header if present', () => {
    const customToken = 'custom-token-123';
    testRequest = new HttpRequest(
      'GET',
      'https://api.themoviedb.org/3/movie/popular',
      {
        headers: new HttpHeaders({ Authorization: `Bearer ${customToken}` }),
      }
    );
    interceptor(testRequest, mockNext);

    const interceptedRequest = mockNext.calls.mostRecent().args[0];
    expect(interceptedRequest.headers.get('Authorization')).toBe(
      `Bearer ${customToken}`
    );
  });

  it('should preserve the request method', () => {
    testRequest = new HttpRequest(
      'POST',
      'https://api.themoviedb.org/3/movie/popular',
      null
    );
    interceptor(testRequest, mockNext);

    const interceptedRequest = mockNext.calls.mostRecent().args[0];
    expect(interceptedRequest.method).toBe('POST');
  });

  it('should preserve the request body', () => {
    const testBody = { title: 'Test Movie' };
    testRequest = new HttpRequest(
      'POST',
      'https://api.themoviedb.org/3/movie/popular',
      testBody
    );
    interceptor(testRequest, mockNext);

    const interceptedRequest = mockNext.calls.mostRecent().args[0];
    expect(interceptedRequest.body).toEqual(testBody);
  });

  it('should preserve the request URL', () => {
    const testUrl = 'https://api.themoviedb.org/3/movie/popular?page=2';
    testRequest = new HttpRequest('GET', testUrl);
    interceptor(testRequest, mockNext);

    const interceptedRequest = mockNext.calls.mostRecent().args[0];
    expect(interceptedRequest.url).toBe(testUrl);
  });

  it('should work with different HTTP methods', () => {
    const methods: Array<'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'> = [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
    ];

    methods.forEach((method) => {
      mockNext.calls.reset();
      testRequest = new HttpRequest<any>(
        method as any,
        'https://api.themoviedb.org/3/movie/popular'
      );
      interceptor(testRequest, mockNext);

      const interceptedRequest = mockNext.calls.mostRecent().args[0];
      expect(interceptedRequest.method).toBe(method);
      expect(interceptedRequest.headers.get('Authorization')).toBeTruthy();
    });
  });
});
