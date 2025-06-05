import aboutImg from '../assets/kasa-about-img.png'
import data from '../datas/about.json'
import CollapseItem from '../components/CollapseItem';

function About() {
  return (
    <>
      <div><img src={aboutImg} /></div>
      <div>
        {data.map((about) => (
          <CollapseItem
            key={about.title}
            title={about.title}
            content={about.content}
          />
        ))}
      </div>
    </>
  );
}

export default About;
