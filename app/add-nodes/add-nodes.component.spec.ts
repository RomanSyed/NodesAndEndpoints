import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNodesComponent } from './add-nodes.component';

describe('AddNodesComponent', () => {
  let component: AddNodesComponent;
  let fixture: ComponentFixture<AddNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
