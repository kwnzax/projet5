import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../datas/logements.json';

import Slider from '../components/Slider';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';
import CollapseItem from '../components/CollapseItem';

function LogementDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const foundLogement = data.find(item => item.id === id);

        if (foundLogement) {
            setLogement(foundLogement);
        } else {
            navigate('/404');
        }
    }, [id, navigate]);

    if (!logement) {
        return <></>;
    }

    return (
        <div className="logement-detail">

            <Slider
                pictures={logement.pictures}
            />
            <div>
                <div>
                    <h1>{logement.title}</h1>
                    <p><strong>Lieu :</strong> {logement.location}</p>
                    <Tags
                        tags={logement.tags}
                    />
                </div>
                <div>
                    <Host
                        name={logement.host.name}
                        picture={logement.host.picture}
                    />
                    <Rating
                        rating={logement.rating}
                    />
                </div>
                <div className='collapseContainer'>
                    <CollapseItem 
                    title="Description"
                    content={logement.description} 
                    />
                    <CollapseItem 
                    title="Équipments"
                    content={logement.equipments} 
                    />

                </div>
            </div>

        </div>

    );
}


export default LogementDetail;