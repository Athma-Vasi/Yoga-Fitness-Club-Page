import BannerText from "@/shared/BannerText";
import { PhilosphyCardType, SelectedPages } from "@/types";
import { motion } from "framer-motion";
import { HiHomeModern, HiUserGroup, HiAcademicCap } from "react-icons/hi2";
import womanStretchingInField from "@/assets/woman-stretching-in-field.png";
import womenLaughingStretching from "@/assets/women-laughing-stretching.png";
import yogaStretching from "@/assets/yoga-stretching.png";
import threeWomenPose from "@/assets/three-women-pose.png";
import twoWomenLaughing from "@/assets/yoga-two-women-laughing.png";
import PhilosophyCard from "./PhilosophyCard";

const philosophyCards: PhilosphyCardType[] = [
  {
    image: (
      <img
        src={womanStretchingInField}
        alt="pic of woman stretching in a field"
      />
    ),
    title: "Gentle Flow and Renew",
    description:
      "Build awareness of the breath and body using restorative gentle poses. A wonderful way to build heat, strength, and deep surrender through carefully orchestrated movements, controlled pressure and well-measured stretches.",
    level: "Beginners to Advanced yogis",
  },
  {
    image: <img src={yogaStretching} alt="pic of man stretching" />,
    title: "Hot Vinyasa Flow",
    description:
      "Hot Vinyasa Flow is the merging of standing and balancing postures fused with Vinyasa, flowing movement, in a heated room. Heated yoga can also help the body flush out toxins, increase heart rate for a better cardio workout and keep muscles in an optimal state for yoga.",
    level: "Beginners to Advanced yogis",
  },
  {
    image: (
      <img
        src={threeWomenPose}
        alt="pic of three women dynamically stretching"
      />
    ),
    title: "Power Yoga",
    description:
      "Power Vinyasa Flow Yoga is a powerful, energetic form of yoga where students fluidly move from one pose to the next while connecting their breathing to their movements. Baron Baptiste, the founder of this form of yoga, describes this practice as “the perfect blend of sweat and serenity.”",
    level: "Intermediate to Advanced yogis",
  },
  {
    image: <img src={twoWomenLaughing} alt="pic of two women laughing" />,
    title: "Tantric Yoga",
    description:
      "The exploration of the subtle energies within the body and their connection to the universe provide the opportunity to understand the purpose of life and the principles of union in new dimensions. Expand your capacity for intimacy and become a better lover by deepening your connection to dormant energies.",
    level: "Advanced yogis",
  },
];

type PhilosophyProps = {
  setSelectedPage: (page: SelectedPages) => void;
};

function Philosophy({ setSelectedPage }: PhilosophyProps) {
  return (
    <section
      id="Philosophy"
      className="mx-auto min-h-full w-full bg-white py-20 "
    >
      <motion.div
        onViewportEnter={() => setSelectedPage("philosophy")}
        className="xs:mx-auto xs:w-5/6"
      >
        <div className="md:my-5 md:w-3/5">
          <BannerText>Voted Arizona's Best Yoga Studio</BannerText>
          <img
            src={womenLaughingStretching}
            alt="photo of woman stretching on a yoga mat in a field"
            className="my-5 rounded-lg"
          />
          <p className="my-5">
            Yoga Ashram has been part of the desert yoga & wellness community
            for over a decade. We welcome you with an open heart and are
            committed to providing a safe space for your spiritual journey. Yoga
            Ashram is where you can discover the lightness in your heart, create
            space in your mind and unlock your tantric potential.
          </p>
        </div>

        {/* philosophy */}
        <div className="mt-5 items-center justify-between gap-8 xs:flex-col sm:flex md:flex">
          {philosophyCards.map((philosophyCard) => (
            <PhilosophyCard
              key={philosophyCard.title}
              image={philosophyCard.image}
              title={philosophyCard.title}
              description={philosophyCard.description}
              level={philosophyCard.level}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Philosophy;
