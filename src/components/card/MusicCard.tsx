import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    title?: string,
    id?:string,
  }
const MusicCard = ({title}:IProps) => {
    
    return (
        <>
            <div className="musicCard">
				<div>
				<Link to={`/playListDetails/${title}`}><img src="https://templates.iqonic.design/muzik/html/images/dashboard/feature-album/02.png" alt="" className="card-img" /></Link>	
				</div>
				<div className="cardHolder">
                    <h3 className="musicTitle">{title}</h3>
				</div>
			</div>
        </>
    );
};

export default MusicCard;