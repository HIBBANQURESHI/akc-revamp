import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Development = () => {
  const [activeStepImage, setActiveStepImage] = useState("");
  const progressBarRef = useRef(null);
  const containerRef = useRef(null);
  const stepsRef = useRef([]);

  const updateProgressBar = () => {
    const container = containerRef.current;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const scrollPosition = container.scrollTop;
    const progress = (scrollPosition / scrollHeight) * 100;
    progressBarRef.current.style.height = `${Math.min(progress, 100)}%`;
  };

  const updateImage = () => {
    let activeStep = null;
    stepsRef.current.forEach((step) => {
      const rect = step.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.top <= window.innerHeight / 2 &&
        rect.bottom > window.innerHeight / 2
      ) {
        activeStep = step;
      }
    });

    if (activeStep && activeStep.dataset.image) {
      if (activeStep.dataset.image !== activeStepImage) {
        setActiveStepImage(activeStep.dataset.image);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", () => {
      updateProgressBar();
      updateImage();
    });

    updateProgressBar();
    updateImage();

    return () => {
      container.removeEventListener("scroll", updateProgressBar);
      container.removeEventListener("scroll", updateImage);
    };
  }, [activeStepImage]);

  return (
    <ScrollSectionWrapper>
      <Content ref={containerRef}>
        <div className="px-7 text-3xl sm:text-4xl lg:text-6xl font-bold text-left mb-6 text-white">
          Our product <span className="text-sky-300">development process</span>
        </div>
        <ProgressBarContainer>
          <ProgressBarBg />
          <ProgressBar ref={progressBarRef} />
        </ProgressBarContainer>
        <Steps>
          <Step
            ref={(el) => (stepsRef.current[0] = el)}
            data-image="https://images.pexels.com/photos/4623506/pexels-photo-4623506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          >
            <h2>01/06</h2>
            <h3>Ideate</h3>
            <p>
              We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.
            </p>
          </Step>
          <Step
            ref={(el) => (stepsRef.current[1] = el)}
            data-image="https://images.pexels.com/photos/56759/pexels-photo-56759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          >
            <h2>02/06</h2>
            <h3>Design</h3>
            <p>
              Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.
            </p>
          </Step>
          <Step
            ref={(el) => (stepsRef.current[2] = el)}
            data-image="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          >
            <h2>03/06</h2>
            <h3>Develop</h3>
            <p>
              Transforming ideas into reality by implementing robust code and cutting-edge technologies to deliver a functional product.
            </p>
          </Step>
          <Step
            ref={(el) => (stepsRef.current[3] = el)}
            data-image="https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          >
            <h2>04/06</h2>
            <h3>Test</h3>
            <p>
              Testing the product for usability and functionality, ensuring the best possible user experience.
            </p>
          </Step>
          <Step
            ref={(el) => (stepsRef.current[4] = el)}
            data-image="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          >
            <h2>06/06</h2>
            <h3>Support</h3>
            <p>
              Providing ongoing support and maintenance for long-term success and improvement.
            </p>
          </Step>
        </Steps>
      </Content>
      <ImageContainer>
        <ImageWrapper>
          <DynamicImage
            id="dynamic-image"
            src={activeStepImage}
            alt="Step Image"
            className={activeStepImage ? "active" : ""}
          />
        </ImageWrapper>
      </ImageContainer>
    </ScrollSectionWrapper>
  );
};

const ScrollSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: black;
  color: white;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 50px 100px;
  }
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  height: 70vh;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    height: 80vh;
  }
`;

const ProgressBarContainer = styled.div`
  position: sticky;
  top: 20px;
  left: 10px;
  width: 4px;
  height: 30%;
  background: gray;

  @media (min-width: 768px) {
    top: 208px;
    height: 32%;
  }
`;

const ProgressBarBg = styled.div`
  width: 100%;
  height: auto;
  background-color: gray;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 0;
  background: #7dd3fc;
  transition: height 0.2s ease-in-out;
`;

const Steps = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 60px;
  }
`;

const Step = styled.div`
  margin: 20vh 0;
  text-align: left;
  transform: translateY(-30px);

  h2,
  h3 {
    margin: 0;
    color: #7dd3fc;
  }

  h2 {
    color: #fff;
    font-size: 16px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  h3 {
    font-size: 40px;
    font-weight: 600;
    margin: 10px 0;

    @media (min-width: 768px) {
      font-size: 60px;
    }
  }

  p {
    font-size: 16px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  position: relative;
  height: 30vh;

  @media (min-width: 768px) {
    height: 90vh;
  }
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 384px;
    height: 544px;
  }
`;

const DynamicImage = styled.img`
  border-radius: 136px;
  width: 200px;
  height: 300px;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  opacity: 0;
  transform: translateY(20%);
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    border-radius: 272px;
    width: 384px;
    height: 544px;
  }
`;

export default Development;
