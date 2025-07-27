import React from 'react';
import shieldImg from '../../img/shield.png';
import oppiaImg from '../../img/oppia.png';

const Random = () => {
  const [clickedCard, setClickedCard] = React.useState(null);

  const handleCardClick = (index) => {
    setClickedCard(clickedCard === index ? null : index);
  };

  return (
    <section className="random" id="random">
      <div className="experience_col" data-aos="fade-up" data-aos-delay="1000">
        <h3>Professional Journey</h3>
        <div className="experience_cards">
          <div
            className={`exp-card ${clickedCard === 0 ? 'clicked' : ''}`}
            onClick={() => handleCardClick(0)}
          >
            <div className="header">
              <div className="header-top">
                <div className="img-container">
                  <img src={shieldImg} alt="ShieldByte logo" />
                </div>
                <div className="text-container">
                  <p className="subtitle">ShieldByte Infosec Pvt. Ltd.</p>
                  <p className="date">Feb 2025 - Present</p>
                </div>
              </div>
              <h1 className="title">Jr. CyberSecurity Analyst</h1>
            </div>
            <ul className="description">
              <li>
                <i className="fas fa-check-circle"></i> Conducting Vulnerability Assessment and Penetration Testing (VAPT) on Web Applications, APIs, Android, and iOS platforms.
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Focused on manual and strategic testing to uncover complex vulnerabilities.
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Executing AWS Cloud Pentesting to identify misconfigurations and risks.
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Preparing comprehensive reports with PoCs, risk ratings, and mitigation plans.
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Collaborating with security teams to strengthen client defenses.
              </li>
            </ul>
          </div>

          <div
            className={`exp-card ${clickedCard === 1 ? 'clicked' : ''}`}
            onClick={() => handleCardClick(1)}
          >
            <div className="header">
              <div className="header-top">
                <div className="img-container">
                  <img src={oppiaImg} alt="Freelancer logo" />
                </div>
                <div className="text-container">
                  <p className="subtitle">Freelancer</p>
                  <p className="date">Nov 2024 - Present</p>
                </div>
              </div>
              <h1 className="title">Ethical Hacking</h1>
            </div>
            <ul className="description">
              <li>
                <i className="fas fa-check-circle"></i> Identified and reported critical bugs in web applications.
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Performed in-depth manual security assessments.
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Delivered actionable reports with risk assessments.
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Provided remediation support and security consulting.
              </li>
            </ul>
          </div>
        </div>

        <style>
          {`
            :root {
              --black: #1a1a1a;
              --white: #ffffff;
              --light-color: #d3d3d3;
              --borde: 2px solid #00040f;
              --box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
            }

            .random {
              padding: 4rem 0;
              background: var(--white);
            }

            .experience_col {
              max-width: 1200px;
              margin: 0 auto;
              padding: 2rem;
              text-align: center;
            }

            .experience_col h3 {
              font-size: 2.5rem;
              color: var(--black);
              margin-bottom: 2rem;
              text-transform: uppercase;
              font-weight: bold;
            }

            .experience_cards {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              justify-content: center;
              max-width: 800px;
              margin: 0 auto;
            }

            .exp-card {
              background: var(--white);
              border: var(--borde);
              border-radius: 12px;
              padding: 2rem;
              box-shadow: var(--box-shadow);
              transition: all 0.3s ease;
              transform: scale(0.95);
              cursor: pointer;
            }

            .exp-card:hover, .exp-card.clicked {
              background: var(--black);
              color: var(--light-color);
              transform: scale(1);
              border-bottom: 0.5rem solid var(--black);
            }

            .exp-card .header {
              display: flex;
              flex-direction: column;
              margin-bottom: 1.5rem;
            }

            .exp-card .header-top {
              display: flex;
              align-items: center;
              margin-bottom: 1rem;
            }

            .exp-card .img-container {
              max-width: 60px;
              margin-right: 1rem;
            }

            .exp-card .img-container img {
              width: 100%;
              height: auto;
              border-radius: 8px;
            }

            .exp-card .text-container {
              flex: 1;
            }

            .exp-card .title {
              font-size: 1.5rem;
              background: linear-gradient(to right, #007bff, #00c4ff);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              font-weight: 600;
              text-align: center;
            }

            .exp-card:hover .title, .exp-card.clicked .title {
              background: linear-gradient(to right, #00c4ff, #007bff);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }

            .exp-card .subtitle {
              font-size: 1rem;
              color: #00040f;
              margin: 8px 0;
            }

            .exp-card:hover .subtitle, .exp-card.clicked .subtitle {
              color: var(--light-color);
            }

            .exp-card .date {
              font-size: 0.875rem;
              color: #4b5563;
              font-style: italic;
            }

            .exp-card:hover .date, .exp-card.clicked .date {
              color: var(--light-color);
            }

            .exp-card .description {
              list-style: none;
              padding: 0;
              margin: 0;
            }

            .exp-card .description li {
              font-size: 1rem;
              color: #666;
              line-height: 1.8;
              margin-bottom: 0.8rem;
              display: flex;
              align-items: flex-start;
            }

            .exp-card:hover .description li, .exp-card.clicked .description li {
              color: var(--light-color);
            }

            .exp-card .description li i {
              font-size: 1rem;
              color: var(--black);
              margin-right: 0.5rem;
              margin-top: 0.3rem;
            }

            .exp-card:hover .description li i, .exp-card.clicked .description li i {
              color: var(--light-color);
            }

            @media (max-width: 768px) {
              .experience_cards {
                grid-template-columns: 1fr;
                max-width: 90%;
              }

              .exp-card {
                transform: scale(1);
              }

              .exp-card:hover, .exp-card.clicked {
                transform: scale(1);
              }
            }

            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(10px); }
              100% { opacity: 1; transform: translateY(0); }
            }

            .exp-card {
              animation: fadeIn 0.5s ease-in-out;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Random;