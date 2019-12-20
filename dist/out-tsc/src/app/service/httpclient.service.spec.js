import { TestBed } from '@angular/core/testing';
import { HttpClientService } from './httpclient.service';
describe('HttpclientService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(HttpClientService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=httpclient.service.spec.js.map