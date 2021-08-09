import React from "react";
import { Carousel } from "react-bootstrap";

import "./FooterStyle.css";
import contact1 from "../../assets/img/contact/contact1.png";
import contact2 from "../../assets/img/contact/contact2.png";
import contact3 from "../../assets/img/contact/contact3.png";
import contact4 from "../../assets/img/contact/contact4.png";
import contact5 from "../../assets/img/contact/contact5.png";
import contact6 from "../../assets/img/contact/contact6.png";
import contact7 from "../../assets/img/contact/contact7.jpg";
// import contact8 from "../../assets/img/contact/contact8.png";
import contact9 from "../../assets/img/contact/contact9.png";
import contact10 from "../../assets/img/contact/contact10.jpg";
import contact11 from "../../assets/img/contact/contact11.png";
import contact12 from "../../assets/img/contact/contact12.png";
import contact13 from "../../assets/img/contact/contact13.png";
import contact14 from "../../assets/img/contact/contact14.jpg";
// import contact15 from "../../assets/img/contact/contact15.png";
import contact16 from "../../assets/img/contact/contact16.png";
import contact17 from "../../assets/img/contact/contact17.png";
import contact18 from "../../assets/img/contact/contact18.png";
import contact19 from "../../assets/img/contact/contact19.png";
import contact20 from "../../assets/img/contact/contact20.png";
import applelogo from "../../assets/img/apple-logo.png";
import androidlogo from "../../assets/img/android-logo.png";
import fblogo from "../../assets/img/fb_logo.png";
import zion from "../../assets/img/zion-logo.jpg";
import zalo from "../../assets/img/con.png";
import mobile from "../../assets/img/slider/mobile.png";
import slide1 from "../../assets/img/slider/slide1.jpg";
import slide2 from "../../assets/img/slider/slide2.jpg";
import slide3 from "../../assets/img/slider/slide3.jpg";
import slide4 from "../../assets/img/slider/slide4.jpg";
import slide5 from "../../assets/img/slider/slide5.jpg";
import slide6 from "../../assets/img/slider/slide6.jpg";
import slide7 from "../../assets/img/slider/slide7.jpg";
import slide8 from "../../assets/img/slider/slide8.jpg";
import slide9 from "../../assets/img/slider/slide9.jpg";
import slide10 from "../../assets/img/slider/slide10.jpg";
import slide11 from "../../assets/img/slider/slide11.jpg";
import slide12 from "../../assets/img/slider/slide12.jpg";
import slide13 from "../../assets/img/slider/slide13.jpg";
import slide14 from "../../assets/img/slider/slide14.jpg";
import slide15 from "../../assets/img/slider/slide15.jpg";
import slide16 from "../../assets/img/slider/slide16.jpg";

export default function Footer() {
  return (
    <div>
      <div className="col-xs-12 block" id="homeApp">
        <div className="mainMaxWidth">
          <div className="row g-0 ">
            <div className="col-md-6 left text-left">
              <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
              <p className="textLeft">người yêu điện ảnh</p>
              <br />
              <p classname="textSmallLeft">
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <br />
              <button
                className="buttonLeft"
                onClick={() =>
                  window.open(
                    "https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8",
                    "_blank"
                  )
                }
              >
                App miễn phí - Tải về ngay!
              </button>
              <p classname="textAppUnder">
                TIX có hai phiên bản&nbsp;
                <a
                  className="tagA"
                  style={{ color: "#FFF" }}
                  target="_blank"
                  href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                >
                  iOS
                </a>
                &nbsp;&amp;&nbsp;
                <a
                  className="tagA"
                  style={{ color: "#FFF" }}
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                >
                  Android
                </a>
              </p>
            </div>
            <div className="col-md-6 right">
              <img
                className="img-responsive phone-img"
                src={mobile}
                alt="Loading..."
              />
              <div className="mobile-slide">
                <Carousel
                  className="slide-border"
                  nextIcon=""
                  nextLabel=""
                  prevIcon=""
                  prevLabel=""
                >
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide4}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide5}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide6}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide7}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide8}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide9}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide10}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide11}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide12}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide13}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide14}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide15}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 slide-img"
                      src={slide16}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-xs-12 block ng-scope"
        id="footer"
        ng-if="!isHideFooter"
      >
        <div className="mainMaxWidth">
          <div className="row ">
            <div className="col-sm-4 col-xs-12">
              <p className="title hideOnMobile">TIX</p>
              <div className="col-sm-6 col-xs-6 noPaddingLeft fontSizeP hideOnMobile">
                {/* <a href="http://www.tix.vn/thoa-thuan-su-dung/">VỀ CHÚNG TÔI</a> */}
                <a ui-sref="main.faq" className="brand" href="/faq">
                  FAQ
                </a>
                <a
                  ui-sref="guildline.guidev2"
                  className="brand"
                  href="/brand-guideline/"
                >
                  Brand Guidelines
                </a>
                {/* <a href="#">TUYỂN DỤNG</a> */}
                {/* <a href="#">LIÊN HỆ</a> */}
              </div>
              {/* ngIf: !isMobile */}
              <div
                className="col-sm-6 col-xs-12 noPaddingLeft fontSizeP ng-scope"
                ng-if="!isMobile"
              >
                <a
                  ui-sref="main.term"
                  className="brand"
                  href="/thoa-thuan-su-dung"
                >
                  Thỏa thuận sử dụng
                </a>
                {/* <a ui-sref="main.regular">Quy chế hoạt động</a> */}
                <a
                  ui-sref="main.policy"
                  className="brand"
                  href="/chinh-sach-bao-mat"
                >
                  Chính sách bảo mật
                </a>
                {/* <a ui-sref="main.guidev2">Quyền lợi thành viên</a> */}
                {/* <a href="#" class="hideOnMobile">GỬI PHẢN HỒI</a> */}
              </div>
              {/* end ngIf: !isMobile */}
              {/* ngIf: isMobile */}
            </div>
            <div className="col-sm-4 col-xs-12 hideOnMobile">
              <p className="title">ĐỐI TÁC</p>
              <div className=" col-sm-12 col-xs-12 linePartner">
                <a target="_blank" href="https://www.cgv.vn/" title="CGV">
                  <img className="iconConnect" src={contact1} alt="" />
                </a>
                <a target="_blank" href="http://bhdstar.vn" title="BHD">
                  <img className="iconConnect" src={contact2} />
                </a>
                <a target="_blank" href="http://galaxycine.vn" title="Galaxy">
                  <img className="iconConnect" src={contact3} />
                </a>
                <a
                  target="_blank"
                  href="http://cinestar.com.vn"
                  title="Cinestar"
                >
                  <img className="iconConnect" src={contact4} />
                </a>
                <a
                  target="_blank"
                  href="http://lottecinemavn.com"
                  title="Lotte Cinema"
                >
                  <img
                    className="iconConnect"
                    ng-src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                    src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                  />
                </a>
              </div>
              <div className="col-sm-12 col-xs-12 linePartner">
                <a
                  target="_blank"
                  href="https://www.megagscinemas.vn"
                  title="MegaGS"
                >
                  <img className="iconConnect" src={contact6} />
                </a>
                <a
                  target="_blank"
                  href="https://www.betacineplex.vn/"
                  title="Beta"
                >
                  <img className="iconConnect" src={contact7} />
                </a>
                <a target="_blank" href="http://ddcinema.vn" title="DDC">
                  <img className="iconConnect" src={contact10} />
                </a>
                <a href="https://touchcinema.com/" title="Touch Cinema">
                  <img className="iconConnect" src={contact9} />
                </a>
                <a
                  target="_blank"
                  href="https://cinemaxvn.com/"
                  title="Cinemax"
                >
                  <img className="iconConnect" src={contact10} />
                </a>
              </div>
              <div className=" col-sm-12 col-xs-12 linePartner">
                <a
                  target="_blank"
                  href="http://starlight.vn/"
                  title="Starlight"
                >
                  <img className="iconConnect" src={contact11} />
                </a>
                <a target="_blank" href="https://www.dcine.vn/" title="Dcine">
                  <img className="iconConnect" src={contact14} />
                </a>
                {/* <a target="_blank" href="https://momo.vn" title="MoMo">
    <img class="iconConnect" src="app/assets/img/icons/momo.png">
</a> */}
                <a target="_blank" href="https://zalopay.vn/" title="ZaloPay">
                  <img className="iconConnect" src={contact12} />
                </a>
                <a target="_blank" href="https://www.payoo.vn/" title="Payoo">
                  <img className="iconConnect" src={contact13} />
                </a>
                <a
                  target="_blank"
                  href="https://www.vietcombank.com.vn/"
                  title="Vietcombank"
                >
                  <img className="iconConnect" src={contact14} />
                </a>
                {/* <a target="_blank" href="https://airpay.vn/" title="AirPay">
            <img class="iconConnect" src="" />
          </a> */}
                {/* <a
            target="_blank"
            href="http://www.saigonco-op.com.vn/"
            title="SaigonCoop"
          >
            <img
              class="iconConnect"
              src="app/assets/img/icons/SGCOOP.png"
            />
          </a> */}
              </div>
              <div className="col-sm-12 col-xs-12 linePartner">
                <a
                  target="_blank"
                  href="http://www.agribank.com.vn/"
                  title="Agribank"
                >
                  <img className="iconConnect" src={contact16} />
                </a>
                <a
                  target="_blank"
                  href="https://www.vietinbank.vn/"
                  title="Vietinbank"
                >
                  <img className="iconConnect" src={contact17} />
                </a>
                <a
                  target="_blank"
                  href="https://www.indovinabank.com.vn/"
                  title="IVB"
                >
                  <img className="iconConnect" src={contact18} />
                </a>
                <a target="_blank" href="http://123go.vn" title="123Go">
                  <img className="iconConnect" src={contact19} />
                </a>
                <a target="_blank" href="http://laban.vn" title="La Bàn">
                  <img className="iconConnect" src={contact20} />
                </a>
              </div>
              {/* <div class="row col-sm-12 col-xs-12 linePartner">
</div> */}
            </div>
            <div className=" row col-sm-4 col-xs-12">
              <div className="col-sm-6 hideOnMobile textCenter">
                <p className="title">MOBILE APP</p>
                <a
                  target="_blank"
                  href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                  title="Apple App"
                >
                  <img className="iconApp" src={applelogo} />
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                  title="Android App"
                >
                  <img className="iconApp" src={androidlogo} />
                </a>
              </div>
              <div className="col-sm-6 textCenter">
                <p className="title hideOnMobile">SOCIAL</p>
                <a
                  target="_blank"
                  href="https://www.facebook.com/tix.vn/"
                  title="Facebook social"
                >
                  <img className="iconApp" src={fblogo} />
                </a>
                <a
                  target="_blank"
                  href="https://zalo.me/tixdatve"
                  title="Zalo social"
                >
                  <img className="iconApp" src={zalo} />
                </a>
              </div>
            </div>
          </div>
          <hr className="hrFooter" />
        </div>
        <div class="row g-0">
          <div class="col-sm-2 col-xs-12 imgFooter">
            <img class="vngIcon" src={zion} />
          </div>
          <div class="col-sm-8 col-xs-12 infoFooter">
            <span style={{ color: "#FFF" }}>
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </span>
            <span>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </span>
            <span>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay
              đổi lần&nbsp;thứ&nbsp;30,
              ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
              Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí
              Minh cấp.
            </span>
            <span>
              Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436 Email:{" "}
              <a href="mailto:support@tix.vn" style={{ color: "#FB4226" }}>
                support@tix.vn
              </a>
            </span>
          </div>
          <div class="col-sm-2 col-xs-12 imgFooter">
            <a href="http://online.gov.vn/Home/WebDetails/62782">
              <img
                class="imgBoCo"
                alt="Bộ Công Thương"
                title=""
                src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
