import React from 'react';

interface IProps {
   item:object
  }
const MusicCard = ({item}:IProps) => {
    
    return (
        <>
            <div className="musicCard">
				<div>
					<img src="https://templates.iqonic.design/muzik/html/images/dashboard/feature-album/02.png" alt="" className="card-img" />
				</div>
				<div className="cardHolder">
					<h3 className="musicTitle">patan</h3>
				</div>
			</div>
        </>
    );
};

export default MusicCard;