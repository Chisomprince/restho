export default function Footer() {
  return (
    <footer>
      <div className="footer-top ">
        <div className="container">
          <div className="flex justify-between">
            <div className="col-lg-4 col-md-6 order-md-1 order-2">
              <div className="footer-widget one">
                <div className="widget-title">
                  <h3>Our Facilities</h3>
                </div>
                <div className="menu-container">
                  <ul>
                    <li>
                      <a href="/menu1">Indian Menu</a>
                    </li>
                    <li>
                      <a href="/menu1">Menu Item</a>
                    </li>
                    <li>
                      <a href="/reservation">Private Event</a>
                    </li>
                    <li>
                      <a href="/menu1">Italian Menu</a>
                    </li>
                    <li>
                      <a href="/category">Best Offer</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/category">Popular Item</a>
                    </li>
                    <li>
                      <a href="/menu1">Regular Menu</a>
                    </li>
                    <li>
                      <a href="/menu1">New Food</a>
                    </li>
                    <li>
                      <a href="/category">Special Offer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-md-2 order-1">
              <div className="footer-widgetfooter-widget social-area">
                <div className="footer-logo text-center">
                  <img src="assets/images/header1-logo.svg" alt="" />
                  <p>Established . 2022</p>
                  <span>
                    <img src="assets/images/icon/footer-shape.svg" alt="" />
                  </span>
                </div>
                <div className="footer-social">
                  <ul className="social-link d-flex align-items-center justify-content-center">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-3">
              <div className="footer-widget one">
                <div className="widget-title">
                  <h3>Address Info</h3>
                </div>
                <div className="contact-info">
                  <div className="single-contact">
                    <span className="title">Phone:</span>
                    <span className="content">
                      <a href="tel:+8801776766767">+880-1776-766-767</a>
                    </span>
                  </div>
                  <div className="single-contact">
                    <span className="title">Email:</span>
                    <span className="content">
                      <a href="mailto:info@example.com">info@example.com</a>
                    </span>
                  </div>
                  <div className="single-contact">
                    <span className="title">Fax ID:</span>
                    <span className="content">
                      <a href="fax:+9975667786">+99-75667-786</a>
                    </span>
                  </div>
                  <div className="single-contact">
                    <span className="title">Location:</span>
                    <span className="content">
                      <a href="https://goo.gl/maps/2Q4gzMK8mNc1uYnL7">
                        Mirpur DOHS,House-167/170,
                        <br />
                        Road-02 Avenue-01.
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm">
        <div className="container">
          <div className="row border-ttop g-2">
            <div className="col-md-8 justify-content-md-start justify-content-center">
              <div className="copyright-area">
                <p>
                  @Copyright by{/* */} <a href="/#">Egenslab</a>-2023, All Right
                  Reserved.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-md-end justify-content-center">
              <div className="privacy-policy">
                <p>
                  <a href="/#">Privacy &amp; Policy</a> {/* */}|{" "}
                  <a href="#">Terms and Conditions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
