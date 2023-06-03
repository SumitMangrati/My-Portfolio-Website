import React from "react";
import "./Blob.css";
function Blob(props) {
  return (
    <>
      <div className="blob">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#a)">
            <path fill="none" stroke="#131313" stroke-width="10">
              
              <animate
                attributeName="d"
                dur="15000ms"
                repeatCount="indefinite"
                values="M776 661q-90 161-307.5 215t-303-161Q80 500 209 360t330.5-209q201.5-69 264 140T776 661Z;
                
                M844.5 673Q700 846 508.5 831.5t-285-173q-93.5-158.5 29-267t297-194Q724 112 856.5 306t-12 367Z;
                
                M779 658.5Q683 817 504.5 809T191 650.5Q56 500 166.5 306.5t280-100Q616 300 745.5 400T779 658.5Z;
                
                M705.5 591.5Q606 683 440 787t-280-91.5q-114-195.5-1.5-394t322.5-166Q691 168 748 334t-42.5 257.5Z;
                
                M841 680Q708 860 536 797.5t-352.5-180Q3 500 185.5 386T510 254q142-18 303 114t28 312Z;
                
                M776 661q-90 161-307.5 215t-303-161Q80 500 209 360t330.5-209q201.5-69 264 140T776 661Z;"
              ></animate>
            </path>
          </g>
        </svg>
      </div>


      <div className="blob-icon">

      </div>
    </>
  );
}

export default Blob;
