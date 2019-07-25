import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    
    const newValue = this.props.opacity - 0.1;
 
        if (this.props.opacity>= 0.2) {
            return (
<<<<<<< HEAD
                <div className="color-box" style={{opacity:1}}>
=======
                <div className="color-box" style={{opacity: 2}}>
>>>>>>> 13cfe2a902ff63288fb4f1aed552a7f8e8904835
                    <ColorBox opacity={newValue} />
                </div>
            );
        } else {
            return null;
        }
    
    
    
    
    
  
    
<<<<<<< HEAD
    
=======
    return (
      <div className="color-box" style={{opacity: 2}}>
        {this.props.opacity}
      </div>
    )
>>>>>>> 13cfe2a902ff63288fb4f1aed552a7f8e8904835
  }
  
}
