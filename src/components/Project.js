import React from 'react';
import './components.css';
import BooksPhoto from '../components/img/books.jpg';
import NewsPhoto from '../components/img/news.jpg';
import BurgerPhoto from '../components/img/burgers.jpg';
import WeatherPhoto from '../components/img/weather.jpg';
import SchedulesPhoto from '../components/img/schedules.jpg';
import QuizPhoto from '../components/img/quiz.jpg';

function Project() {
    return (
        <main id="portfolio-page" className="container">
            <br></br>
                <section className="row justify-content-center">
                    <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mb-3">
                        <section className="row justify-content-center">
                            <div className="col about mb-5">
                                <p className="text-center mt-3">
                                    These are simple examples of my work utilizing HTML, CSS, 
                                    Javascript, and APIs
                                </p>
                            </div>
                        </section>
                        <section className="row justify-content-center">
                            <div className="col contain about-portfolio bounce-left mb-3 px-0">
                                <a href="https://mysterious-refuge-71478.herokuapp.com/">
                                <img src={BooksPhoto} width="100%" height="115px" className="img-style"></img>
                                    <div className="overlay px-0">
                                        <div className="text">Buy-The-Book!</div>
                                    </div>
                                </a>
                            </div>
                        </section>                            
                        <section className="row justify-content-center">
                            <div className="col contain about-portfolio bounce-right mb-3 px-0">
                                <a href="https://jkthomps21.github.io/Local-News-App/">
                                <img src={NewsPhoto} width="100%" height="115px" className="img-style"></img>
                                    <div className="overlay px-0">
                                        <div className="text">Local News App</div>
                                    </div>
                                </a>
                            </div>
                        </section>
                        <section className="row justify-content-center">
                            <div className="col contain about-portfolio bounce-left mb-3 px-0">
                                <a href="https://nameless-hollows-54923.herokuapp.com/">
                                <img src={BurgerPhoto} width="100%" height="115px" className="img-style"></img>
                                    <div className="overlay px-0">
                                        <div className="text">Eat-Da-Burger!</div>
                                    </div>
                                </a>
                            </div>
                        </section>
                        <section className="row justify-content-center">
                            <div className="col contain about-portfolio bounce-right mb-3 px-0">
                                <a href="https://jkthomps21.github.io/weatherDashboard/">
                                <img src={WeatherPhoto} width="100%" height="115px" className="img-style"></img>
                                    <div className="overlay px-0">
                                        <div className="text">Weather Dashboard</div>
                                    </div>
                                </a>
                            </div>
                        </section>
                        <section className="row justify-content-center">
                            <div className="col contain about-portfolio bounce-left mb-3 px-0">
                                <a href="https://jkthomps21.github.io/workDayScheduler/">
                                <img src={SchedulesPhoto} width="100%" height="115px" className="img-style"></img>
                                    <div className="overlay px-0">
                                        <div className="text">Workday Scheduler</div>
                                    </div>
                                </a>
                            </div>
                        </section>
                        <section className="row justify-content-center">
                            <div className="col contain about-portfolio bounce-right mb-2 px-0">
                                <a href="https://jkthomps21.github.io/codingQuiz/">
                                <img src={QuizPhoto} width="100%" height="115px" className="img-style"></img>
                                    <div className="overlay px-0">
                                        <div className="text">Coding Quiz</div>
                                    </div>
                                </a>
                            </div>
                        </section>
                    </div>
                </section>
            <br></br>
        </main>
    )
}

export default Project;