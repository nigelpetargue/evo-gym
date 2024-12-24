import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 transform rounded-lg bg-white p-6 text-center shadow-lg transition-transform hover:scale-105"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <AnchorLink
        href="#"
        onClick={() => setSelectedPage(SelectedPage.Benefits)}
        className="hover:text-primary-700 mt-4 inline-block text-sm font-medium text-primary-500"
      >
        Learn More
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
