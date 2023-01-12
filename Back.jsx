import React from 'react';
function Back(props){
    return(
        <>
        <div className={props.no}>
         <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$2.95/mo*</p>
                </div>
                <a href="#popup" class="btn btn--white">Select</a>
              </div>
            </div>
        </>
    );
    }
export default Back;