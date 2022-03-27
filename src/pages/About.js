import Classes from "./About.module.css";
function About() {
  return (
    <div>
      <section className="bg-dark text-light text-start text-center p-2">
        <div className="center p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20%"
            height="20%"
            fill="white"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </div>
        <div className="">
          <h1 className="text-success">Gaby Sumampouw</h1>
          <p className="p-4 text-start">
            I am a software development graduate with fundamental skills in
            Java, SQL, unit testing, Git, and basic web development. Seeking a
            full-time entry-level position. A former environmental engineer with
            experience coordinating multiple teams as a liaison. Able to take
            initiative in learning and solving problems independently as well as
            collaborate and effectively communicate with team members.
          </p>
        </div>
      </section>
      <section>
        <h1 className="text-center p-5">Projects</h1>
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-success h3">Scheduling App</h5>
                  <div className="p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50%"
                      height="50%"
                      fill="currentColor"
                      class="bi bi-pc-display"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z" />
                    </svg>
                  </div>
                  <div className={Classes.cardtext}>
                    <p className="card-text text-start">
                      This project includes a desktop application and showcases
                      skills in object oriented programming, localization of
                      date/time, exception handling, and unit testing.
                    </p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-success h4">Java</li>
                  <li className="list-group-item text-success h4">MySQL</li>
                  <li className="list-group-item text-success h4">IntelliJ</li>
                  <li className="list-group-item text-success h4">JUnit</li>
                  <li className="list-group-item text-success h4">Mockito</li>
                  <li className="list-group-item text-success h4">Log4J 2</li>
                  <li className="list-group-item text-success h4">JavaFX</li>
                  <li className="list-group-item text-success h4">
                    {" "}
                    <a
                      href="https://github.com/gsumampouw/SchedulingApplication.git"
                      class="btn btn-dark"
                    >
                      <i className="bi bi-github"></i> Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-success h3">
                    Project Portfolio
                  </h5>
                  <div className="p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50%"
                      height="50%"
                      fill="currentColor"
                      className="bi bi-bootstrap"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z" />
                      <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z" />
                    </svg>
                  </div>
                  <div className={Classes.cardtext}>
                    <p className="card-text text-start">
                      This project utilizes HTML, Bootstrap, React and CSS to
                      create a responsive portfolio page.
                    </p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-success h4">HTML</li>
                  <li className="list-group-item text-success h4">Bootstrap</li>
                  <li className="list-group-item text-success h4">CSS</li>
                  <li className="list-group-item text-success h4">
                    <a
                      href="https://github.com/gsumampouw/gsumampouw.github.io.git"
                      className="btn btn-dark"
                    >
                      <i className="bi bi-github"></i> Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-success h3">
                    Transaction Tracker
                  </h5>
                  <div className="p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50%"
                      height="50%"
                      fill="currentColor"
                      class="bi bi-credit-card-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
                    </svg>
                  </div>
                  <div className={Classes.cardtext}>
                    <p className="card-text text-start">
                      This project showcases skills in web development, and a front end framework. 
                    </p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-success h4">React</li>
                  <li className="list-group-item text-success h4">
                    Javascript
                  </li>
                  <li className="list-group-item text-success h4">
                    Visual Studio Code
                  </li>
                  <li className="list-group-item text-success h4">HTML</li>
                  <li className="list-group-item text-success h4">CSS</li>
                  <li className="list-group-item text-success h4">
                    <a
                      href="https://github.com/gsumampouw/gsumampouw.github.io.git"
                      className="btn btn-dark"
                    >
                      <i className="bi bi-github"></i> Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
