import React, { useState, useEffect } from "react";
import { Form, Button, Navbar, Container } from "react-bootstrap";
import "./LoginEmail.css";
import bg2 from "../../assets/icons/bg2.jpeg";
import { useHistory } from "react-router-dom";
import { LocalOffer, SettingsPhoneSharp } from "@material-ui/icons";

export default function LoginbyEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);
  async function login() {
    let item = { email, password };
    let result = await fetch(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      {
        method: "POST",
        body: JSON.stringify(item),
        accesToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiS2hhY2hIYW5nIiwibmJmIjoxNjI4NDk5Mzk4LCJleHAiOjE2Mjg1MDI5OTh9.2kBrB1gQDZ2alVWJ6Q4WppD_reDuvH2Hr_u4vMKFaTM",
      }
    );
    result = await result.json();
    localStorage.getItem("user-info", JSON.stringify(result));
    history.push("/add");
  }
  return (
    <div>
      <Container>
        <Navbar.Text className="h1 text-center">
          Đăng nhập bằng Email
        </Navbar.Text>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={login} type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
