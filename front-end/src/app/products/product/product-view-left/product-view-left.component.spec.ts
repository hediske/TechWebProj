import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewLeftComponent } from './product-view-left.component';

describe('ProductViewLeftComponent', () => {
  let component: ProductViewLeftComponent;
  let fixture: ComponentFixture<ProductViewLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductViewLeftComponent]
    });
    fixture = TestBed.createComponent(ProductViewLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
