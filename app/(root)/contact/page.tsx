import Image from "next/image";
import React from "react";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";
import gmail from "../../../assets/gmail.svg";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-row gap-8">
      <Link legacyBehavior href="https://www.github.com/prankshadow" passHref>
        <Image
          src={github}
          className="hover:cursor-pointer"
          alt="github logo"
          width={100}
          height={100}
        />
      </Link>
      <Link
        legacyBehavior
        href="https://www.linkedin.com/in/padmeshjakhmola"
        passHref
      >
        <Image
          src={linkedin}
          className="hover:cursor-pointer"
          alt="linkedIn logo"
          width={100}
          height={100}
        />
      </Link>
      <Link legacyBehavior href="mailto:padmeshpj@gmail.com" passHref>
        <Image
          src={gmail}
          className="hover:cursor-pointer"
          alt="gmail logo"
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
};

export default Contact;
