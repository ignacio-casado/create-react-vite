import React from 'react';

const Characters = ({characters}) => {
    return (
        <div>
            <div className="Row">
            {
                characters.map((item,index)=>{
                    <div key={index} className="col">
                        <div className="card">
                            <img src={item.image} alt='' />
                        </div>
                    </div>
                })
            }
                
            </div>
        </div>
    );
};

export default Characters;