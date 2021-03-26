import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
// IMAGES
import heroBg from "../img/heroBg.png";
import a1 from "../img/a1.png";
import a2 from "../img/a2.png";
import a3 from "../img/a3.png";
import top1 from "../img/top1.png";
import top2 from "../img/top2.png";
import cheap from "../img/cheap.png";
import hour from "../img/hour.png";
import money from "../img/money.png";
import payment from "../img/payment.png";

// COMPONENTS
import ProductList from "./ProductList";
import FeaturedProducts from "../pages/FeaturedProducts";

function Home(props) {
    return (
        <>
            <div className="hero">
                <ProductList />
                <Container>
                    <div className="hero__bg">
                        <img src={heroBg} alt="" />
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-10">
                            <div className="new-arrivals">
                                <h1>NEW ARRIVALS</h1>
                                <div className="row p-4">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="card__img">
                                            <img src={a1} alt="" />
                                            <div className="card__text">
                                                <p>The coat hotlist</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="card__img-2">
                                                    <img src={a2} alt="" />
                                                    <p>JW Anderson</p>
                                                    <span>NET-A-PORTER</span>
                                                    <p className="price">
                                                        Rs 7000
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="card__img-2">
                                                    <img src={a3} alt="" />
                                                    <p>JW Anderson</p>
                                                    <span>NET-A-PORTER</span>
                                                    <p className="price">
                                                        Rs 7000
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-10 ">
                            <div className="top-seller">
                                <h1>TOP SELLERS</h1>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="top-sell__card">
                                            <img src={top1} alt="" />
                                            <div className="top-sell__card-info">
                                                <h4>Red Dress- Stipes</h4>
                                                <p>
                                                    Best kind of clothing in the
                                                    country. #saynotoFastFashion
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="top-sell__card">
                                            <img src={top2} alt="" />
                                            <div className="top-sell__card-info">
                                                <h4>Red Dress- Stipes</h4>
                                                <p>
                                                    Best kind of clothing in the
                                                    country. #saynotoFastFashion
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {props.userId && (
                <div className="feature">
                    <FeaturedProducts />
                </div>
            )}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        userId: state.userData._id,
    };
};

export default connect(mapStateToProps)(Home);
