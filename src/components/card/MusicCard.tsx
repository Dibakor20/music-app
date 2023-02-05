import React from 'react';

interface IProps {
   item:object
  }
const MusicCard = ({item}:IProps) => {
    
    return (
        <>
            <div className="musicCard">
				<div>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir8QEJlLYhYX-r7ufpWN6uwhHIJw-qOvO3g&usqp=CAU" alt="" className="card-img" />
				</div>
				<div className="cardHolder">
					<h3 className="musicTitle">patan</h3>
				</div>
			</div>
        </>
    );
};

export default MusicCard;