import data from '../datas/logements.json'
import Card from '../components/Card.jsx'

function Home() {
  return (
    <div className='home pages'>
      <section className='intro'>
        <div className='introImg'>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </section>
      <section className='main'>
        <div className='cardContainer'>
          {data.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;