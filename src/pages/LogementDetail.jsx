import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../datas/logements.json';

import Slider from '../components/Slider';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';
import CollapseItem from '../components/Collapse';

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
        <div className="logementDetail pages">
            <Slider
                pictures={logement.pictures}
            />
            <div className="detailContainer">
                <div className='detailMain'>
                    <div className="infoContainer">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                        <Tags
                            tags={logement.tags}
                        />
                    </div>
                    <div className="detailHost">
                            <Host
                                name={logement.host.name}
                                picture={logement.host.picture}
                            />
                            <Rating
                                rating={logement.rating}
                            />
                    </div>
                </div>

                <div className='collapseContainer'>
                    <div>
                        <CollapseItem
                            title="Description"
                            content={logement.description}
                        />
                    </div>

                    <div className='equipements'>
                        <CollapseItem
                            title="Équipments"
                            content={logement.equipments}
                        />
                    </div>

                </div>
            </div>

        </div>

    );
}


export default LogementDetail;