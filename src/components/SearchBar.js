import React from 'react';
import './SearchBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const categories = [
  { name: 'Food & Drink', listings: 103, icon: 'fas fa-utensils' },
  { name: 'Hotels', listings: 40, icon: 'fas fa-hotel', active: true },
  { name: 'Shopping', listings: 100, icon: 'fas fa-shopping-bag' },
  { name: 'Beauty', listings: 36, icon: 'fas fa-spa' },
  { name: 'Fitness', listings: 30, icon: 'fas fa-dumbbell' },
  { name: 'Bar & Club', listings: 12, icon: 'fas fa-glass-martini-alt' },
  { name: 'Games', listings: 103, icon: 'fas fa-gamepad' },
  { name: 'Places', listings: 40, icon: 'fas fa-map-marker-alt' },
  { name: 'Circus', listings: 100, icon: 'fas fa-circus-tent' },
  { name: 'Theater', listings: 36, icon: 'fas fa-theater-masks' },
  { name: 'Sports', listings: 30, icon: 'fas fa-basketball-ball' },
  { name: 'Health', listings: 12, icon: 'fas fa-heartbeat' },
];

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="image.png" className="img-fluid" alt="Eiffel Tower at night" />
          </div>
          <div className="col-md-6 content">
            <p className="text-danger">WELCOME TO ESCAPEKAR</p>
            <h1>Escapekar A Directory & Listing</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <div className="row stats">
              <div className="col-md-3 stat">
                <h2>50</h2>
                <p>YEARS OF EXPERIENCED</p>
              </div>
              <div className="col-md-3 stat">
                <h2>210k+</h2>
                <p>TOTAL LISTING</p>
              </div>
              <div className="col-md-3 stat">
                <h2>450</h2>
                <p>COMPANY STAFF</p>
              </div>
              <div className="col-md-3 stat">
                <h2>100</h2>
                <p>HAPPY PEOPLE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SearchBar = () => {
  return (
    <>
    
      <div className="search-bar container">
        <div className="row">
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="What are you looking for?" />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Search Location" />
          </div>
          <div className="col-md-3">
            <select className="form-control">
              <option>All Categories</option>
              <option>Hotels</option>
              <option>Restaurants</option>
              <option>Shopping</option>
              <option>Nightlife</option>
            </select>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary btn-block">Search</button>
          </div>
        </div>
      </div>

      <Container>
        <Row className="my-5">
          {categories.map((category, index) => (
            <Col xs={12} md={4} lg={3} key={index} className="mb-4">
              <Card className={`category-card ${category.active ? 'active' : ''}`}>
                <Card.Body className="text-center">
                  <i className={category.icon}></i>
                  <Card.Title>{category.name}</Card.Title>
                  <Card.Text>{category.listings} LISTINGS</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
      </Container>

      <div className="container">
        <div className="listing-header">
          <span>OUR LISTING</span>
          <h2>Popular Listing</h2>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src="https://preview.colorlib.com/theme/directone/images/list-1.jpg" className="card-img-top" alt="Japanese Restaurant" />
              <div className="card-body">
                <img src="https://placehold.co/50x50?text=🍣" alt="Food & Drinks" className="mb-2" />
                <p>FOOD & DRINKS</p>
                <h5>Japanese Restaurant</h5>
                <p><i className="fas fa-map-marker-alt"></i> Suite 721 New York NY 10016</p>
                <p><i className="fas fa-phone"></i> +00 123 456 7890</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <div className="review">Review 5.0/5 <span>⭐</span>(100)</div>
                <div className="heart">
                  <i className="far fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="	https://preview.colorlib.com/theme/directone/images/list-2.jpg" className="card-img-top" alt="Harbor Lights Hotel" />
              <div className="card-body">
                <img src="https://placehold.co/50x50?text=🏨" alt="Hotel" className="mb-2" />
                <p>HOTEL</p>
                <h5>Harbor Lights Hotel</h5>
                <p><i className="fas fa-map-marker-alt"></i> Suite 721 New York NY 10016</p>
                <p><i className="fas fa-phone"></i> +00 123 456 7890</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <div className="review">Review 5.0/5 <span>⭐</span>(100)</div>
                <div className="heart">
                  <i className="far fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="	https://preview.colorlib.com/theme/directone/images/list-3.jpg" className="card-img-top" alt="MS Center Mall of Asia" />
              <div className="card-body">
                <img src="https://placehold.co/50x50?text=🛍️" alt="Shopping" className="mb-2" />
                <p>SHOPPING</p>
                <h5>MS Center Mall of Asia</h5>
                <p><i className="fas fa-map-marker-alt"></i> Suite 721 New York NY 10016</p>
                <p><i className="fas fa-phone"></i> +00 123 456 7890</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <div className="review">Review 5.0/5 <span>⭐</span>(100)</div>
                <div className="heart">
                  <i className="far fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="	https://preview.colorlib.com/theme/directone/images/list-4.jpg" className="card-img-top" alt="Maxout Fitness Gym" />
              <div className="card-body">
                <img src="https://placehold.co/50x50?text=🏋️" alt="Gym Fitness" className="mb-2" />
                <p>GYM FITNESS</p>
                <h5>Maxout Fitness Gym</h5>
                <p><i className="fas fa-map-marker-alt"></i> Suite 721 New York NY 10016</p>
                <p><i className="fas fa-phone"></i> +00 123 456 7890</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <div className="review">Review 5.0/5 <span>⭐</span>(100)</div>
                <div className="heart">
                  <i className="far fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroSection />
    </>
  );
}

export default SearchBar;
