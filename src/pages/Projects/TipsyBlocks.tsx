import Carousel from '../../utils/Carousel';
import Tipsy1 from '../../images/tipsy/Tipsy1.jpg';
import Tipsy2 from '../../images/tipsy/Tipsy2.jpg';
import Tipsy3 from '../../images/tipsy/Tipsy3.jpg';
import Tipsy4 from '../../images/tipsy/Tipsy4.jpg';

const TipsyBlocks = () => (
  <section>
    <h1>Tipsy Blocks</h1>
    <p>A fun little experimental game I made on the side, just for fun. I posted some screenshots.</p>
    <p>This one can only be played on mobile since it requires the gyroscope.</p>
    <p>If you want to try it out, I can try to revive the file and make it available here.</p>
    <Carousel
      visibleCount={1}
      imageWidth={800}
      imageHeight={400}
      images={[
        { src: Tipsy1, alt: 'Tipsy Block 1' },
        { src: Tipsy2, alt: 'Tipsy Block 2' },
        { src: Tipsy3, alt: 'Tipsy Block 3' },
        { src: Tipsy4, alt: 'Tipsy Block 4' },
      ]} />
  </section>
);

export default TipsyBlocks;
