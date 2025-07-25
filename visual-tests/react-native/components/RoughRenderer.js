import React from 'react';

export function renderRoughShape(drawable) {
  if (!drawable || !drawable.children) {
    return null;
  }

  return drawable.children.map((child, index) => {
    const { props } = child;
    
    if (props.d) {
      return React.createElement('path', {
        key: index,
        ...props
      });
    }
    
    return null;
  });
}