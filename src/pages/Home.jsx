import data from '../datas/logements.json'
import Card from '../components/Card.jsx'

function Home() {
  return (
    <>
      <section className='intro'>
        <h1>Chez vous, partout et ailleurs</h1>
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
    </>
  );
}

export default Home;