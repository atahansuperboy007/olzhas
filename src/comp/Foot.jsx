import React from 'react'
import "../footer.css"
import Photo from "../media/footer.jpg"
// const{ <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
//         integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />}
function Footer() {
   
    return (
        <footer>
            <div className="bg">
                <div className="container">
                    <div className="info-inner">
                        <div className="footer-box">
                            <h1>Owerx KINOSERVICE</h1>
                            <div className="footer-links">
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="anime-list">
                            <ul>
                                <li>
                                    <span className="descr">
                                    <h1>Контакты&nbsp;:</h1>
                                        <div className="item">
                                            <ul>
                                                <li>discord:Owerx#3818</li>
                                                <li>olzhas.sabit@mail.ru</li>
                                                
                                            </ul>
                                        </div>
                                        
                                    </span><img src={Photo} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

