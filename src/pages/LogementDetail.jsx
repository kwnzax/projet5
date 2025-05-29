import { useParams } from 'react-router-dom'
import data from '../datas/logements.json'

function LogementDetail() {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id);

    if (!logement) {
        return /*page 404*/;
    }

    return (
        <div className="logement-detail">
            {/*<Caroussel />*/}
            <div>
               <h2>{logement.title}</h2> 
               <p><strong>Lieu :</strong> {logement.location}</p>
               {/*<Filters />*/}
            </div>
            <div>
                {/*<Host />*/}
            </div>
            <p>{logement.description}</p>
        </div>
    );
}

export default LogementDetail;