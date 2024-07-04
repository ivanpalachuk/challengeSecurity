import React from 'react';

const Spinner = () => {
    const spinnerStyle = {
        display: 'inline-block',
        width: '80px',
        height: '80px',
        margin: 'auto',
        border: '6px solid #f3f3f3', /* Light grey */
        borderTop: '6px solid #3498db', /* Blue */
        borderRadius: '50%',
        animation: 'spin 2s linear infinite'
    };

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    };

    const spinKeyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

    return (
        <div style={containerStyle}>
            <style>{spinKeyframes}</style>
            <div style={spinnerStyle}></div>
        </div>
    );
};

export default Spinner;
