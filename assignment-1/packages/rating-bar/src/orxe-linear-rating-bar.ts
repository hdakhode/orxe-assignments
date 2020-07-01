import { html, customElement, LitElement, property } from 'lit-element';
import styles from './rating-bar-css';

@customElement('orxe-linear-rating-bar')
export default class OrxeLinearRatingBar extends LitElement {
  private ratingBarIndicator = { width: '0%', color: '' };
  private barLabel = { fontsize: '1.6rem' }
  private height = '8px';
  @property({ type: Number, reflect: true, attribute: 'rating' })
  rating = 0;

  @property({ type: String, reflect: true, attribute: 'label' })
  label = 'Ratings';

  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`   
<p>${this.setIndicator()}</p>
<div class="row">
  <div class="middle">
    <div class="bar-container" sytle="height: ${this.height}">
      <div class="bar" style="width: ${this.ratingBarIndicator.width}; height: ${this.height}; background-color:  ${this.ratingBarIndicator.color};"></div>
    </div>
    <div style="font-size:${this.barLabel.fontsize};" class="bar-label">
      <span> ${this.getLabel()} </span>
      <span style="float: right;"> ${this.getRating()} </span>
    </div>
  </div>
  </div>
    `;
  }

  /**
   *
   */
  constructor() {
    super();
    this.setIndicator();
  }



  getRating() {
    return !this.rating ? 0 : this.rating;
  }

  getLabel() {
    return !this.label || this.label === '' ? 'Ratings' : this.label;
  }

  setIndicator() {
    if (this.rating > 8.5 && this.rating <= 10) { this.ratingBarIndicator["width"] = Number((8.5 / 10.0) * 100.0) + '%'; this.ratingBarIndicator["color"] = '#4CAF50'; }
    else if (this.rating > 7.0 && this.rating <= 8.5) { this.ratingBarIndicator["width"] = Number((7.0 / 10.0) * 100.0) + '%'; this.ratingBarIndicator["color"] = '#2196F3'; }
    else if (this.rating > 5.0 && this.rating <= 7.0) { this.ratingBarIndicator["width"] = Number((5.0 / 10.0) * 100.0) + '%'; this.ratingBarIndicator["color"] = '#00bcd4'; }
    else if (this.rating > 3.0 && this.rating <= 5.0) { this.ratingBarIndicator["width"] = Number((3.0 / 10.0) * 100.0) + '%'; this.ratingBarIndicator["color"] = '#ff9800'; }
    else if (this.rating >= 0.0 && this.rating <= 3.0) { this.ratingBarIndicator["width"] = '15%'; this.ratingBarIndicator["color"] = '#f44336'; }
  }


  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
