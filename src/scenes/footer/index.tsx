import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            At Evo Gym, we’re passionate about helping you achieve your fitness
            goals. Our approach combines expert training, top-notch equipment,
            and a supportive community to help you reach your full potential.
            Fitness is a journey, and we're with you every step of the way.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">About Us</p>
          <p className="my-5">Fitness Plan</p>
          <p>Membership Options</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Have questions? We’re here to help!</p>
          <p>Call us at (333) 425-6825 or email us at support@evogym.com.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
