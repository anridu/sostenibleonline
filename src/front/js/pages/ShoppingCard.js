import React, { useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types';
import { apiBaseURL } from "../constants";

const ShoppingCardItem = (props) => {
  return (<div>
  </div>);
}

const ShoppingCard = (props) => {
  const { store, actions } = useContext(Context);

  const items = actions.itemsShoppingCard.map(item => (
    <div key={item}>{item}</div>
    <ShoppingCardItem data={item}/>
  ));

  return (
    <div>
      {items}
    </div>
  );
  
}

ShoppingCardItem.propTypes = {
  data: PropTypes.object
};
