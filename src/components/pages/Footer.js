import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaReddit, FaTelegramPlane } from "react-icons/fa";
import { FaMedium, FaXTwitter } from "react-icons/fa6";
import { TbBrandLinktree } from "react-icons/tb";

function Footer() {
  return (
    <div className=" c-w">
      <div className="container-kws ">
        <div className="d-f a-i-c g-2 j-c-s-b p-t-3  flex-wrap">
          <div className="">
            <ul className="l-s-t-n d-f a-i-c g-2 ">
              <li className=" f-w-600">
                {" "}
                Sovereign-T<sup>3</sup>
              </li>
            </ul>
          </div>
      
        </div>
        <div className="d-f a-i-c j-c-s-b p-t-4 p-b-2 g-2 flex-wrap">
          <div className="">
            &copy; Sovereign-T<sup>3</sup> Protocol
          </div>
          <div class="d-f j-c-c g-1 flex-wrap a-i-c ">
            <a
              href="https://linktr.ee/sovereigntyprotocol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandLinktree className="footer-icon  c-w f-w"/>
              {/* <img src="/linkTree.png" alt="" class="w-1_75" /> */}
            </a>
            <a
              href="https://www.twitter.com/sovereign_t3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="footer-icon  c-w f-w"/>
            </a>
            <a
              href="https://www.reddit.com/user/sovereigntyprotocol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReddit className="footer-icon  c-w f-w"/>
            </a>
            <a
              href="https://medium.com/@SovereigntyProtocol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium className="footer-icon  c-w f-w"/>
            </a>
            <a
              href="https://www.instagram.com/sovereigntyprotocol/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="footer-icon  c-w f-w"/>
            </a>
            <a
              href="https://t.me/sovereigntyprotocol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className="footer-icon  c-w f-w"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
