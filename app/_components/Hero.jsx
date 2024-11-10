import React from 'react';
import HeroImg from '../assets/hero_img.png';
import Image from 'next/image';
import Button from './Button';
import Customers from '../assets/customersAvatars.svg';

const Hero = () => {
  return (
    <section className="lg:flex justify-center lg:align-center">
      {/* left section */}

      <Image
        src={HeroImg}
        className="lg:h-auto lg:w-1/2 bg-secondary lg:rounded-br-[50px] "
        alt="Image of a smiling woman pointing to the right"
      />

      {/* right section */}

      <div className="lg:py-32 lg:pr-40 lg:pl-12 max-w-3xl px-4 flex-1">
        <div className="flex flex-col-reverse lg:flex-col">
          <div className=" text-center lg:text-left">
            <h4 className="font-light text-lg lg:text-2xl underline decoration-secondary underline-offset-8 ">
              Transform Your ❤️ Health with
            </h4>
            <h1 className="font-bold text-4xl mt-3 mb-5 text-primary ">
              Personalized Nutrition Coaching
            </h1>
            <p className="font-normal lg:text-base text-sm">
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching. Our certified
              nutritionists are here to guide you on your weight loss journey,
              providing customized plans and ongoing support. Start your
              transformation today and experience the power of personalized
              nutrition coaching.
            </p>
            {/*buttons */}
            <div className="flex gap-5 mt-12 justify-center lg:justify-start">
              <Button href="/about">Get started today</Button>
              <Button href="/about" type="ghost">
                Book a demo
              </Button>
            </div>
          </div>

          {/* customers 430+ */}
          <div className="flex lg:flex-row flex-col  relative bottom-5 items-center lg:mt-12 gap-1 mb-7 lg:mb-0 ">
            <Image className="w-24 h-auto" src={Customers} />
            <p className="font-semibold">
              <span className="text-green-700 font-bold ">430+</span> Happy
              customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
