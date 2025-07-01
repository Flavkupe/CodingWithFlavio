import './AboutMe.css';
import FlavioImage from '../../images/Flavio.jpg';
import PageSection from '../../utils/PageSection';

const AboutMe = () => (
  <main>
    <PageSection
      title="About Me"
      backgroundColor="white"
      images={[{ src: FlavioImage, alt: 'Flavio Kuperman', style: { maxWidth: 200, borderRadius: '50%' } }]}
      layout="ImageOnRight"
      imageLayout="Vertical"
      text={
        <>
          <p>My name is Flavio Kuperman. I have been a professional software engineer for about 14 years now. I am proficient in TypeScript, JavaScript, Go and C# and I've also worked with multiple other languages including C++ and others. I have a Masters degree in Computer Science from the University of Michigan in Ann Arbor.</p>
          <p>I currently work at Twitch. Previously I have worked at Microsoft and Laserfiche.</p>
          <p>I have always been interested in game development, dabbling for many years with small projects using engines like Unity and XNA. I also have a tremendous interest in education, often taking every opportunity I can to be a teacher or a mentor. I've been a volunteer for <a href="https://www.microsoft.com/en-us/teals" target="_blank" rel="noopener noreferrer">TEALS</a> for about 7 years.</p>
          <p>If you want a resume for whichever reason, feel free to reach out. My email is flavkupe at gmail dot com.</p>
        </>
      }
    />
  </main>
);

export default AboutMe;
