import React from 'react';

const Button = React.memo(function Button({ className, children, onClick }) {
  console.log("hello");
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
})

export default Button;
