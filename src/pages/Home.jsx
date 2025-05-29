import data from '../datas/logements.json'
import Card from '../components/card.jsx'

function Home() {
  return (
    <>
      <section className='intro'>
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <section className='product'>
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