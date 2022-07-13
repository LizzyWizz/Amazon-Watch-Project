import React from 'react';

import classes from './ProductDetails.module.css';

import ProductData from './ProductData';

const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    return (
      <img
        key={pos}
        className={classes.ProductImage}
        src={item.imageUrl}
        alt={item.styleName}
      />
    );
  });
  return (
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
      <p className={classes.ProductDescription}>{ProductData.description}</p>
      <h3 className={classes.SectionHeading}> Select Color </h3>
      <div>
        {colorOptions}
        {/*<img
          className={[classes.ProductImage, classes.SelectedProductImage].join(
            " "
          )}
          src="https://imgur.com/iOeUBV7.png"
          alt="Black Coloured Watch"
        />
        <img
          className={classes.ProductImage}
          src="https://imgur.com/PTgQlim.png"
          alt="Red Coloured Watch"
        />
        <img
          className={classes.ProductImage}
          src="https://imgur.com/Mplj1YR.png"
          alt="Blue Coloured Watch"
        />
        <img
          className={classes.ProductImage}
          src="https://imgur.com/xSIK4M8.png"
          alt="Purple Coloured Watch"
          /> */}
      </div>
      <h3 className={classes.SectionHeading}> Features </h3>
      <div>
        <button
          className={[classes.FeatureItem, classes.SelectedFeatureItem].join(
            ' '
          )}
        >
          {' '}
          Time{' '}
        </button>
        <button className={classes.FeatureItem}>Heart Rate</button>
      </div>
    </div>
  );
};

export default ProductDetails;
