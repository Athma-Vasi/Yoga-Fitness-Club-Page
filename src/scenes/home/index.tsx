import { SelectedPages } from "@/types";
import useResponsiveWidth from "@/hooks/useResponsiveWidth";
import MainButton from "@/shared/MainButton";
import beyondMeatLogo from "@/assets/BeyondMeat.png";
import lushLogo from "@/assets/Lushnewlogo.webp";
import patagoniaLogo from "@/assets/Patagonia-Fish-Logo.png";
import starbucksLogo from "@/assets/starbucks-logo.png";
import meditatingGroup from "@/assets/yoga-meditation.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type HomeProps = {
  setSelectedPage: (page: SelectedPages) => void;
};

function Home({ setSelectedPage }: HomeProps) {
  const isWidthAboveMedScreens = useResponsiveWidth("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-14 bg-primary-300 py-10 md:h-full md:pb-0"
    >
      {/* main header and image */}
      <div>
        {/* main header */}
        <div>
          {/* headings */}
          <div>
            <div>
              <div className="text-gray-100">
                {/* home page banner text */}
                <h2 className="font-montserrat text-5xl">Yoga Ashram</h2>
                <h3 className="text-2xl">Mindful Meditation</h3>
                <h3 className="text-2xl">Spiritual Awakening</h3>
              </div>
            </div>
            <p className="text-gray-100">
              Connect your Mind, Body and Soul. Build strength, clarity and
              bliss by employing ancient, powerful and secret tantric practises.
              Harness the kundalini energy in your chakras to rise in the
              central channel to acheive transcendence.
            </p>
          </div>
          {/* actions */}
          <div>
            <MainButton setSelectedPage={setSelectedPage}>Join Now</MainButton>
            <AnchorLink
              className="text-sm font-bold text-tertiary-500 underline hover:text-tertiary-300"
              onClick={() => setSelectedPage("contactus")}
              href="#contactus"
            >
              <p>Learn more</p>
            </AnchorLink>
          </div>
        </div>

        {/* image */}
        <div>
          <img src={meditatingGroup} alt="group meditation led by a teacher" />
        </div>
      </div>
      {/* sustainable brands */}
      {isWidthAboveMedScreens && (
        <div>
          <div>
            <div>
              <img src={starbucksLogo} alt="starbucks brand logo" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
