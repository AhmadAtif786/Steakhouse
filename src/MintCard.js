import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
// import Tilt from "react-tilt";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../src/wallet/connectors";
import { isMobile } from "react-device-detect";
import logo from "./Images/logo.png";
import meta from "./Images/metamask.png";

const MintCard = () => {
  let web3 = new Web3(window?.web3?.currentProvider);
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    //console.log(web3, "web 3 console")
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_PROVIDER_URL)
    );
  }
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  async function connect() {
    try {
      await activate(injected);

      //   if (id !== parseInt(chainId)) {
      //     alert("Please change your network to Mainnet");
      //     return false;
      //   }

      const accounts = await web3.eth.getAccounts();
      //   if (isMetamask) {
      //   }
      // setMessage("successful");

      return "success";
    } catch (err) {
      alert(JSON.stringify(err.message));
      return "failed";
    }
  }
  // const showAccount = document.querySelector('.showAccount');
  function register() {
    // Register functionality here
  }
  function submit() {
    // submit functionality here
  }
  return (
    <div>
      <Container
        style={{
          maxWidth: "800px",
        }}
      >
        <a href="#" target="_blank">
          <img src={logo} className="logoimg"></img>
        </a>
        <h2 className="firstheading">
          The <span style={{ color: "#FFB100" }}>BNB</span> Rewards pool with
          the Juicy Daily Returns and Referral rewards.
        </h2>

        <Row>
          <Col md={6}>
            {" "}
            <Card
              style={{
                border: "none",
                maxWidth: "800px",
                borderRadius: "0.75rem",
              }}
              className="margin1 bgcolor"
            >
              <Card.Body>
                <div class="dataRow">
                  <div class="name">Contract</div>{" "}
                  <div class="value">0 BNB</div>
                </div>
                <div class="dataRow">
                  <div class="name">Wallet</div>
                  <div class="value">0 BNB</div>
                </div>
                <div class="dataRow">
                  <div class="name">Your Steak</div>{" "}
                  <div class="value">0 Steak</div>
                </div>
                <span class="ant-input-affix-wrapper antInput">
                  <input type="text" placeholder="0" class="ant-input" />{" "}
                  <span class="ant-input-suffix">
                    <span class="suffix">BNB</span>
                  </span>
                </span>
                <button class="buyButton">GRILL STEAK</button>

                <div class="actionWrapper">
                  <div class="dataRow">
                    <div class="name">Your Rewards</div>{" "}
                    <div class="value">
                      <span> 0 BNB</span>
                    </div>
                  </div>{" "}
                  <div class="actionButtons">
                    <button>RE-GRILL STEAK</button> <button>EAT STEAK</button>
                  </div>
                  <br />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            {" "}
            <Card
              style={{
                border: "none",
                maxWidth: "800px",
                borderRadius: "0.75rem",
              }}
              className="margin1 bgcolor"
            >
              <div className="rightdiv ">
                <a href="https://www.bscscan.com/" target="_blank">
                  {" "}
                  <h3 className="righttext">HOW TO GET STARTED</h3>
                </a>
                <a href="https://www.bscscan.com/" target="_blank">
                  {" "}
                  <h3 className="righttext mt-3">WHITEPAPER</h3>
                </a>{" "}
                <button
                  type="submit"
                  className="righttext mt-2 buttoncreator"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  CREATOR CONTEST
                </button>
                <a href="https://www.bscscan.com/" target="_blank">
                  {" "}
                  <h3 className="righttext mt-3">AUDIT REPORT</h3>
                </a>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog"
                    style={{ maxWidth: "780px" }}
                    role="document"
                  >
                    <div
                      class="modal-content"
                      style={{ backgroundColor: "#FFF4F4" }}
                    >
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Creators Contest!
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <b style={{ fontSize: "20px" }}>
                          Win a juicy BNB reward without the need of a huge
                          following!
                        </b>{" "}
                        <p className="mt-3">For who is this competition?</p>
                        <p>
                          For anyone who has an audience on Tiktok, Youtube,
                          Twitter, Reddit and other social media platforms.
                        </p>
                        <p>
                          We will have different measures in place to value your
                          content individually depending on many KPIs such as
                          views, comments, likes, post quality and quantity.
                        </p>
                        <p>Steak pool</p>{" "}
                        <p>
                          30% of the total marketing wallet fees taken by 24st
                          of May. The total Steak pool amount will be announced
                          on May 24st.
                        </p>
                        <p>
                          Competition Start:
                          <br />
                          Competition End:{" "}
                        </p>
                        <b style={{ fontSize: "20px" }}>
                          Steak pool distribution:
                        </b>
                        <p className="mt-3">
                          #1 - 30%
                          <br />
                          #2 - 15%
                          <br />
                          #3 - 15%
                          <br />
                          #4 - 10%
                          <br />
                          #5 - 8%
                          <br />
                          #6 - 6%
                          <br />
                          #7 - 4%
                          <br />
                          #8 - 3%
                          <br />
                          #9 - 2%
                          <br />
                          #10 - 2%
                        </p>
                        <b style={{ fontSize: "20px" }}>
                          Competition Details & Rules:
                        </b>
                        <p className="mt-3">
                          Put our websitein your post, bio or clearly mention it
                          in the video, otherwise your post will not be valued.
                          You can use your referral link as well.
                        </p>
                        <p>Submit your material in Telegram.</p>
                        <p>
                          Post as many times as you wish to increase your
                          chances to win. Not only the quality counts, but also
                          the quantity.
                        </p>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="popupcls"
                          data-dismiss="modal"
                        >
                          GOT IT THANKS
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card
              style={{
                border: "none",
                maxWidth: "800px",
                borderRadius: "0.75rem",
              }}
              className="bgcolor"
            >
              <div class="rightdiv">
                <h1 className="nut">Nutrition Facts</h1>{" "}
                <div class="dataRow">
                  <div class="name">Daily Return</div>{" "}
                  <div class="value">11%</div>
                </div>{" "}
                <div class="dataRow">
                  <div class="name">APR</div> <div class="value">4015%</div>
                </div>{" "}
                <div class="dataRow">
                  <div class="name">DEV Fee</div> <div class="value">5%</div>
                </div>
              </div>
              <br />
            </Card>
          </Col>
        </Row>
        <Row>
          <Card
            style={{
              border: "none",
              maxWidth: "800px",
              borderRadius: "0.75rem",
              padding: "20px",
            }}
            className="margin1 bgcolor"
          >
            <div class="referral">
              <h2 className="nut">Referral Link</h2>{" "}
              <p className="text1">
                Earn 10% of the BNB used to grill steak from anyone who uses
                your referral link
              </p>{" "}
              <div class="refWrapper">
                <div
                  class="copyButton"
                  style={{
                    marginRight: "20px",
                    textAlign: "center",
                  }}
                  data-toggle="modal"
                  data-target="#exampleModal1"
                >
                  Connect Wallet
                </div>{" "}
                <div
                  class="modal fade"
                  id="exampleModal1"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  style={{ top: "150px" }}
                >
                  <div class="modal-dialog" role="document">
                    <div
                      class="modal-content "
                      style={{ backgroundColor: "#F58824" }}
                    >
                      <div>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body mb-3" onClick={connect}>
                        {" "}
                        <img src={meta} style={{ width: "100%" }} />
                        {/* {!isMobile ? (
                        window.ethereum ? (
                          !active ? (
                            <button
                              variant=""
                              className="solbutton mx-auto enableEthereumButton"
                              onClick={connect}
                            >
                              Connect Wallet
                            </button>
                          ) : (
                            <button variant="" className="solbutton mx-auto">
                              Connected
                            </button>
                          )
                        ) : (
                          <button variant="" className="solbutton mx-auto">
                            Please Install metamask
                          </button>
                        )
                      ) : window.ethereum ? (
                        !active ? (
                          <button
                            variant=""
                            className="solbutton mx-auto enableEthereumButton"
                            onClick={connect}
                          >
                            Connect Wallet
                          </button>
                        ) : (
                          <button variant="" className="solbutton mx-auto">
                            Connected
                          </button>
                        )
                      ) : (
                        <a className="solbutton" href="">
                          <button
                            variant=""
                            className="solbutton mx-auto enableEthereumButton"
                            onClick={connect}
                          >
                            Connect Wallet
                          </button>
                        </a>
                      )} */}
                      </div>
                    </div>
                  </div>
                </div>
                <button class="copyButton">COPY</button>
              </div>
            </div>
          </Card>
        </Row>
      </Container>
      {/* </Tilt> */}
    </div>
  );
};

export default MintCard;
