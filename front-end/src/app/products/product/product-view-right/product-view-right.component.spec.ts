import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewRightComponent } from './product-view-right.component';

describe('ProductViewRightComponent', () => {
  let component: ProductViewRightComponent;
  let fixture: ComponentFixture<ProductViewRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductViewRightComponent]
    });
    fixture = TestBed.createComponent(ProductViewRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
