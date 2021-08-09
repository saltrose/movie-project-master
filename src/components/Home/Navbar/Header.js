import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import avatar from "../../../assets/img/avatar.png";
import location from "../../../assets/img/location-header.png";
import Logo from "./Logo";
import "./HeaderStyles.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white">
      <Navbar.Brand href="#home" className="ml-3 px-4">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#">Lịch Chiếu</Nav.Link>
          <Nav.Link href="#">Cụm Rạp</Nav.Link>
          <Nav.Link href="#">Tin Tức</Nav.Link>
          <Nav.Link href="#">Ứng Dụng</Nav.Link>
        </Nav>
        <Nav className="px-5">
          <Nav.Link href="/Login">
            <img src={avatar} className="avatar" alt="avatar" />
            <Navbar.Text>Đăng Nhập</Navbar.Text>
          </Nav.Link>
          <Nav.Link href="/Register">
            {/* <img src={avatar} className="avatar" alt="avatar" /> */}
            <Navbar.Text>Đăng Ký</Navbar.Text>
          </Nav.Link>
          <Navbar.Text className="vl"></Navbar.Text>
          <img src={location} className="location" alt="location" />
          <NavDropdown title="Hồ Chí Minh" id="navbarScrollingDropdown">
            <Nav className="selectScroll" style={{ display: "inline-block" }}>
              <NavDropdown.Item>Hồ Chí Minh</NavDropdown.Item>
              <NavDropdown.Item>Hà Nội</NavDropdown.Item>
              <NavDropdown.Item>Đà Nẵng</NavDropdown.Item>
              <NavDropdown.Item>Hải Phòng</NavDropdown.Item>
              <NavDropdown.Item>Biên Hoà</NavDropdown.Item>
              <NavDropdown.Item>Nha Trang</NavDropdown.Item>
              <NavDropdown.Item>Bình Dương</NavDropdown.Item>
              <NavDropdown.Item>Phan Thiết</NavDropdown.Item>
              <NavDropdown.Item>Hạ Long</NavDropdown.Item>
              <NavDropdown.Item>Nha Trang</NavDropdown.Item>
              <NavDropdown.Item>Bình Dương</NavDropdown.Item>
              <NavDropdown.Item>Phan Thiết</NavDropdown.Item>
              <NavDropdown.Item>Hạ Long</NavDropdown.Item>
              <NavDropdown.Item>Cần Thơ</NavDropdown.Item>
              <NavDropdown.Item>Vũng Tàu</NavDropdown.Item>
              <NavDropdown.Item>Quy Nhơn</NavDropdown.Item>
              <NavDropdown.Item>Huế</NavDropdown.Item>
              <NavDropdown.Item>Long Xuyên</NavDropdown.Item>
              <NavDropdown.Item>Thái Nguyên</NavDropdown.Item>
              <NavDropdown.Item>Buôn Ma Thuột</NavDropdown.Item>
              <NavDropdown.Item>Bắc Giang</NavDropdown.Item>
              <NavDropdown.Item>Bến Tre</NavDropdown.Item>
              <NavDropdown.Item>Việt Trì</NavDropdown.Item>
            </Nav>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
