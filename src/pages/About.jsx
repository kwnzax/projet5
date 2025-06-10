import data from '../datas/about.json'
import CollapseItem from '../components/Collapse';

function About() {
  return (
    <div className='pages'>
      <section className='aboutIntro'>
        <div className='topImg'><div></div></div>
      </section>
      <section>
        <div className='aboutContent'>
          {data.map((about) => (
            <CollapseItem
              key={about.title}
              title={about.title}
              content={about.content}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
