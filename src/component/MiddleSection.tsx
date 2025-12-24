import { useEffect, useState } from "react";
import img1 from "../../public/gambar-2.jpg";
import img2 from "../../public/gambar-3.jpg";

type CountStateSetter = React.Dispatch<React.SetStateAction<number>>;

export const MiddleSection = () => {
  //--------------------------scrolling-progress-bar------------------------------
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");

    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLDivElement;
            const width = parseInt(progressBar.dataset.width || "0");

            progressBar.style.width = "0%";
            progressBar.innerHTML = "0%";
            const animateProgressBar = (start: number, end: number) => {
              let current = start;
              const duration = 1000;
              const stepTime = 10;

              const increment = (end - start) / (duration / stepTime);

              const updateProgress = () => {
                if (current < end) {
                  current += increment;
                  progressBar.style.width = `${Math.min(current, end)}%`;
                  progressBar.innerHTML = `${Math.min(current, end).toFixed(0)}%`;
                  requestAnimationFrame(updateProgress);
                } else {
                  progressBar.style.width = `${end}%`;
                  progressBar.innerHTML = `${end}%`;
                }
              };

              requestAnimationFrame(updateProgress);
            };
            animateProgressBar(0, width);
            observer.unobserve(progressBar);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    progressBars.forEach((bar) => observer.observe(bar));

    return () => {
      progressBars.forEach((bar) => observer.unobserve(bar));
    };
  }, []);

  //--------------------------scrolling-number-animation------------------------------
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [count3, setCount3] = useState<number>(0);
  const [count4, setCount4] = useState<number>(0);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  // Function to animate numbers
  const animateNumbers = (setCount: CountStateSetter, finalValue: number) => {
    let newCount = 0;
    const interval = setInterval(() => {
      if (newCount < finalValue) {
        newCount += 10; // Increase by 10 for each interval
        setCount(newCount);
      } else {
        clearInterval(interval); // Stop once it reaches the final value
      }
    }, 100); // Adjust the speed by changing the interval time
  };

  // Handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100 && !hasScrolled) {
      setHasScrolled(true); 
      animateNumbers(setCount1, 100);
      animateNumbers(setCount2, 200);
      animateNumbers(setCount3, 300);
      animateNumbers(setCount4, 50);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  // IntersectionObserver for triggering the number animations when sections come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate numbers when the section is in view
            if (entry.target.id === "experience") animateNumbers(setCount1, 100);
            if (entry.target.id === "awards") animateNumbers(setCount2, 200);
            if (entry.target.id === "members") animateNumbers(setCount3, 300);
            if (entry.target.id === "trainers") animateNumbers(setCount4, 50);
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the section is visible
    );

    // Observing the sections by their ids
    const experienceSection = document.getElementById("experience");
    const awardsSection = document.getElementById("awards");
    const membersSection = document.getElementById("members");
    const trainersSection = document.getElementById("trainers");

    if (experienceSection) observer.observe(experienceSection);
    if (awardsSection) observer.observe(awardsSection);
    if (membersSection) observer.observe(membersSection);
    if (trainersSection) observer.observe(trainersSection);

    return () => {
      observer.disconnect(); // Clean up the observer on unmount
    };
  }, []);

  return (
    <div>
      <div className="bg-light container-fluid pb-3">
        <div className="row py-5">
          <div className="col-md-6 py-3 px-4">
            <div className="text-container py-3">
              <p>
                <span className="text-danger">Biking</span> is Not Just a Hobby,
              </p>
              <p>It's a Way of Life</p>
            </div>
            <div className="border-boxx">
              <div>
                <div className="d-flex align-items-center mt-2 icon-box">
                  <i className="fa-regular fa-lightbulb"></i>
                  <h3>Our Vision</h3>
                </div>
                <p className="d-flex">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus porro aliquam, illo quod sed praesentium earum
                  quas asperiores debitis iusto magni, enim dolorum! Tempora
                  dolorum harum nobis placeat molestiae beatae.
                </p>
              </div>
              <div>
                <div className="d-flex align-items-center icon-box">
                  <i className="fa-solid fa-bullseye"></i>
                  <h3>Our Mission</h3>
                </div>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem quia officia ullam quisquam non sequi quas dolorum,
                  eaque incidunt quis fugit, inventore culpa ratione voluptate
                  in dicta? Cupiditate, itaque deserunt!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 px-3">
            <div className="image-container row px-3">
              <div className="col-6 p-1">
                <img src={img1} alt="Image 1" />
              </div>
              <div className="col-6 p-1">
                <img src={img2} alt="Image 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-light">
        <div
          className="row py-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div className="col-md-5 my-auto">
            <div className="form-container my-5">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-danger w-100">
                  Submit Button
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-7 px-5">
            <div className="my-5">
              <h1 className="text-container text-light">
                A <span className="text-danger">Bicycle </span>at Helps You to
                Pass All the Hurdles
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                quidem tempore ipsam nulla deserunt, at autem suscipit enim
                atque rerum nam sint illo possimus itaque voluptatibus ea quod
                quae tempora!
              </p>
            </div>
            <div className="feature">
              <h4 className="fst-italic">Best Event</h4>
              <div className="progress">
                <div className="progress-bar" data-width="70%"></div>
              </div>
            </div>
            <div className="feature">
              <h4 className="fst-italic">Many Charters</h4>
              <div className="progress">
                <div className="progress-bar" data-width="80%"></div>
              </div>
            </div>
            <div className="feature">
              <h4 className="fst-italic">Complete Equipment</h4>
              <div className="progress">
                <div className="progress-bar" data-width="50%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-container fw-bold">
              <span className="text-danger fw-bolder">Cycling</span> Experienced
              Since 1996
            </h1>
          </div>
          <div className="col-md-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim corrupti in placeat deserunt voluptatibus facere, dolorem exercitationem ad molestiae totam debitis iusto beatae voluptates libero itaque molestias recusandae accusantium!</p>
            <button className="btn btn-danger"> Learn More</button>
          </div>
          <div className="row text-center pt-4">
            <div className="col" id="experience">
              <h1>{count1}</h1>
              <p className="fw-bolder fst-italic">Experience</p>
            </div>
            <div className="col" id="awards">
              <h1>{count2}</h1>
              <p className="fw-bolder fst-italic">Community Awards</p>
            </div>
            <div className="col" id="members">
              <h1>{count3}</h1>
              <p className="fw-bolder fst-italic">Joined Members</p>
            </div>
            <div className="col" id="trainers">
              <h1>{count4}</h1>
              <p className="fw-bolder fst-italic">Trainers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
