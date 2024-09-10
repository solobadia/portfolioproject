import styles from "../style";
import { star, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[4px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={star} alt="discount" className="w-[22px] h-[22px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Design. Build. Improve.</span>{" "}
        
          </p>
        </div>

    
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            I Create<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Beautiful</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Sites & More
        </h1>
      
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Hi. I'm Solomon. I'm a web designer/developer and graphic designer with a passion for creating projects that are simple and clean that provide real value to the end user. Delivering creative and functional work within a reasonable timeframe and budget as well as exceeding the client’s requirements is my motto.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;