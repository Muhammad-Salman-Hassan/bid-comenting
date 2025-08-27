import { Typography } from 'antd';
import React from 'react';

export const CardHeader = ({ 
  title, 
  isButton = false, 
  onClick, 
  buttonText = "New Bid Project",
  buttonIcon ,
  Cardwidth
}) => {
  return (
    <div className="card-header">
      <div className="card-header-content">
        <Typography.Title className="card-header-title">
          {title}
        </Typography.Title>
        
        {isButton && onClick && (
          <button 
            className="card-header-button"
            onClick={onClick}
          >
            {buttonIcon && (
              <span className="button-icon">
                {buttonIcon}
              </span>
            )}
            {buttonText}
          </button>
        )}
      </div>

      <style jsx>{`
        .card-header {
          background: linear-gradient(180deg, #4377CA 0%, #001242 100%);
          border-radius: 30px;
          padding: 20px;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          width:${Cardwidth}
        }

        .card-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          pointer-events: none;
        }

        .card-header-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: ${isButton ? 'space-between' : 'center'};
          width: 100%;
          padding: 32px 24px;
          box-sizing: border-box;
        }

        .card-header-title {
          color: white !important;
          font-family: 'Poppins', sans-serif !important;
          font-weight: 500 !important;
          font-size: 24px !important;
          line-height: 32px !important;
          letter-spacing: 0px !important;
          margin: 0 !important;
          text-align: ${isButton ? 'left' : 'center'} !important;
          flex: ${isButton ? '1' : 'none'};
          min-width: 0;
          max-width: ${isButton ? '40%' : '100%'};
        }

        .card-header-button {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .card-header-button:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .card-header-button:active {
          transform: translateY(0);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .button-icon {
          display: flex;
          align-items: center;
          font-size: 16px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .card-header {
            height: 120px;
            border-radius: 12px;
          }

          .card-header-content {
            flex-direction: column;
            text-align: center;
            justify-content: center;
            padding: 20px;
            gap: 16px;
          }

          .card-header-title {
            font-size: 20px !important;
            line-height: 28px !important;
            text-align: center !important;
            max-width: 100% !important;
          }

          .card-header-button {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .card-header {
            height: 100px;
          }

          .card-header-content {
            padding: 16px;
          }

          .card-header-title {
            font-size: 18px !important;
            line-height: 24px !important;
          }

          .card-header-button {
            padding: 10px 16px;
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};