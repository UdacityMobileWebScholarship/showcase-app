import React from 'react';
import './Tiles.css';

const hexToRgbA = (hex) => {
  /**
   * Converts hex color to rgba type that will used in box-shadow
   */
  let rgb = [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16)
  ];

  return `rgba(${rgb.join()}, 0.5)`;
}

const darkenColor = (color) => {
  const rgb = [color.substring(1,3), color.substring(3,5), color.substring(5,7)];
  return `rgb(${rgb.map(c => Math.round((parseInt(c, 16) * 0.55))).join()})`;
}

const Tile = (props) => {
  const { color } = props;
  const tileStyles = {
    backgroundColor: color,
    backgroundImage: `linear-gradient(135deg, ${color} 1%, ${darkenColor(color)} 100%)`,
    boxShadow: `0px 5px 30px ${hexToRgbA(color)}`
  }
  return(
    <div className="tile-style" style={tileStyles}>
      <span className="tile-span-style">
        {props.children}
      </span>
    </div>
  );
};
export default Tile;
