import { OrxeLinearRatingBar } from '../';
import '..';

describe('orxe-rating-bar-with-rating-is-valid', () => {
  let ratingBar: OrxeLinearRatingBar;

  beforeEach(async function() {
    ratingBar = (await document.body.appendChild(
      document.createElement('orxe-linear-rating-bar'),
    )) as OrxeLinearRatingBar;
    ratingBar.rating = 6; 
    ratingBar.label = "Review Rating"   
    await ratingBar.requestUpdate();
  });

  afterEach(async function() {
    await ratingBar.remove();
  });

  it('should check rating', () => {
    expect(ratingBar.shadowRoot!.querySelectorAll('span')[1].innerHTML).toEqual(" 6 ");
  });
  it('should check label', () => {
    expect(ratingBar.shadowRoot!.querySelectorAll('span')[0].innerHTML).toEqual(" Review Rating ");
  });

  it('should check applied color', () => {
    const st = Array.from(ratingBar.shadowRoot!.querySelector('.bar-container').getElementsByClassName('bar') as HTMLCollectionOf<HTMLElement>);
    expect(st[0].style.backgroundColor).toEqual('rgb(0, 188, 212)');
  });

  it('should check applied width', () => {
    const st = Array.from(ratingBar.shadowRoot!.querySelector('.bar-container').getElementsByClassName('bar') as HTMLCollectionOf<HTMLElement>);
    expect(st[0].style.width).toEqual('50%');
  });
});

describe('orxe-rating-bar-when-rating-is-null', () => {
  let ratingBar: OrxeLinearRatingBar;

  beforeEach(async function() {
    ratingBar = (await document.body.appendChild(
      document.createElement('orxe-linear-rating-bar'),
    )) as OrxeLinearRatingBar;
    ratingBar.rating = null;    
    await ratingBar.requestUpdate();
  });

  afterEach(async function() {
    await ratingBar.remove();
  });

  it('should check rating', () => {
    expect(ratingBar.shadowRoot!.querySelectorAll('span')[1].innerHTML).toEqual(" 0 ");
  });

  it('should check label', () => {
    expect(ratingBar.shadowRoot!.querySelectorAll('span')[0].innerHTML).toEqual(" Ratings ");
  });

  it('should check applied color', () => {
    const st = Array.from(ratingBar.shadowRoot!.querySelector('.bar-container').getElementsByClassName('bar') as HTMLCollectionOf<HTMLElement>);
    expect(st[0].style.backgroundColor).toEqual('rgb(244, 67, 54)');
  });

  it('should check applied width', () => {
    const st = Array.from(ratingBar.shadowRoot!.querySelector('.bar-container').getElementsByClassName('bar') as HTMLCollectionOf<HTMLElement>);
    expect(st[0].style.width).toEqual('15%');
  });
});