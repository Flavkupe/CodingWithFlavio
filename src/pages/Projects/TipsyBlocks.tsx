import Carousel from '../../utils/Carousel';

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
          { src: '/tipsy/Tipsy1.jpg', alt: 'Tipsy Block 1' },
          { src: '/tipsy/Tipsy2.jpg', alt: 'Tipsy Block 2' },
          { src: '/tipsy/Tipsy3.jpg', alt: 'Tipsy Block 3' },
          { src: '/tipsy/Tipsy4.jpg', alt: 'Tipsy Block 4' },
      ]}/>
  </section>
);

export default TipsyBlocks;
