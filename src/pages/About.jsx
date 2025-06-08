import data from '../datas/about.json'
import CollapseItem from '../components/Collapse';

function About() {
  return (
    <div className='pages'>
      <div className='topImg'><div></div></div>
      <div className='aboutContent'>
        {data.map((about) => (
          <CollapseItem
            key={about.title}
            title={about.title}
            content={about.content}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
