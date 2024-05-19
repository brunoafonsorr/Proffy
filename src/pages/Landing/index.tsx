import Image from 'next/image';
import Link from 'next/link';
import './styles.scss';

import logoImg from '../../assets/images/logo.svg';
import landingPage from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

export default function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <Image priority
            src={logoImg}
            alt='Proffy'
          />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <Image className="hero-image" priority
          src={landingPage}
          alt='Plataforma de estudos'
        />

        <div className="buttons-container">
          <Link href="/study" className='study'>
            <Image priority
              src={studyIcon}
              alt='Estudar'
            />
            Estudar
          </Link>

          <Link href="/study" className='give-classes'>
            <Image priority
              src={giveClassesIcon}
              alt='Dar aulas'
            />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas
          <Image priority
            src={purpleHeartIcon}
            alt='Coração roxo'
          />
        </span>
      </div>
    </div>
  )
}