import React, { Component } from "react";

export default class MedFlie extends Component {
  render() {
    return (
      <>
        <h1>MedFiles</h1>
        <div className="container">
          <div className="doc-box">
            <div className="doc-header">
              <h4 class="doc-header-title">MEDECINE</h4>
            </div>
            <ul className="doc-main">
              <li className="doc-itm">
                <div className="file-man-box">
                  <div className="file-img-box">
                    <img
                      src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/pdf.svg"
                      alt="icon"
                    />
                  </div>
                  <a href="/" class="file-download">
                    <i className="fa fa-download"></i>
                  </a>
                  <div className="file-man-title">
                    <h5 className="file-name">Semio_cardio.pdf</h5>
                    <p className="file-size">
                      <small>1.53 mb</small>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="doc-footer">
              <p>The_RaiKAGe</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
