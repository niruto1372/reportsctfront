/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="http://www.controltotal.com.pe"
                target="_blank"
              >
                Control Total S.A.C.
              </a>
            </li>
            <li>
              <a
                href="https://es-la.facebook.com/controltotalSAC/"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://pe.linkedin.com/company/control-total-sac"
                target="_blank"
              >
                Linked in
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Control Total S.A.C.
          </a>
          . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Niruto
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
