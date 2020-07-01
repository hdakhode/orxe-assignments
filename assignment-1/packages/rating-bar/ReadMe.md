# Linear Rating Bar Web Component

A linear rating bar is a component that is used to show ratings given by users to a particular service linearly. 

## Constructor

To create the custom web component, extend LitElement. The Web Component syntax is:


```bash
@customElement('orxe-rating-bar')
export default class OrxeRatingBar extends LitElement {
  ...
}
```

## Properties

Name | Attribute | Access Modifier | Description | Type | Default |
--- | --- | --- | --- |--- |--- |
Range | range | public | rating provided | number | 0 | 


## Color Properties
Name | Attribute | Access Modifier | Description | Type | Default |
--- | --- | --- | --- |--- |--- |
track color | track-color | private | color of rating line | string | $separator-01 | 
indicator color | indicator-color | private | color of indicator line | string | ## See Range Colors | 

## Range Colors
Range | Color |
--- | --- |
8.5 - 10.0 | #4CAF50 |
7.0 - 8.5 | #2196F3 |
5.0 - 7.0 | #00bcd4 |
3.0 - 5.0 | #ff9800 |
1.0 - 3.0 | #f44336 |


## Usage

<orxe-rating-bar lwidth="100" lheight="8px" rating=""></orxe-rating-bar>