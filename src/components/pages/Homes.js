'use client'
import React from 'react'
import Navbars from './Navbars'
// import Swiper_slider from "./Swiper_slider";
import { AiOutlineArrowRight } from 'react-icons/ai'
import Footer from './Footer'
import '../scss/Main.scss'
import Threed from './Threed'

function Homes() {
  return (
    <div className='b-c-b c-l-w'>
      <Navbars />
      <div className=''>
        <Threed />
      </div>
      <a href='#explore'>
        {' '}
        <div className='t-a-c gray_clr '>Click to explore</div>
      </a>
      <div className='container-kws' id='explore'>
        <div className='f-s-3 p-x-2 l-h-1 f-w-800 t-a-c m-b-3 p-t-3  d-b m-a'>
          Onix makes blockchain development accessible for everyone.
        </div>
      </div>
      <div className='container-kws'>{/* <Swiper_slider /> */}</div>
      <div className='container-kws'>
        <div className='section'>
          <div className='d-g g-t-c-2 g-2 '>
            <div className=''>
              <div className='f-s-2 l-h-1 f-w-600 m-b-2'>Built by developers, for developers.</div>
              <div className='k-f-f gray_clr m-b-1'>
                Onix delivers tamper-proof inputs, outputs, and computations to support advanced smart contracts on any
                blockchain.
              </div>
              <div className='d-f k-f-f a-i-c g-1 m-b-1'>
                <div className=''></div>
                <div className='k-f-f'>Fully benefit from scalable network effects</div>
              </div>
              <div className='d-f k-f-f a-i-c g-1 m-b-1'>
                <div className=''></div>
                <div className='k-f-f'>Inherently more secure than all competitors </div>
              </div>
              <div className='d-f k-f-f a-i-c g-1 m-b-1'>
                <div className=''></div>
                <div className='k-f-f'>More open and powerful with 0.001% downtime </div>
              </div>
            </div>
            <div className=''>
              <img src='/ring.webp' className='' alt='' />
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='d-g g-t-c-2 g-2 '>
            <div className=''>
              <img src='/circle.webp' className='' alt='' />
            </div>
            <div className=''>
              <div className='f-s-2 l-h-1 f-w-600 m-b-2'>Top blockchains build on Onix.</div>
              <div className='m-b-2 k-f-f gray_clr'>
                Onix is committed to fostering the growth of Web3 applications by providing the infrastructure and
                security needed for Web3.
              </div>
              <div className='k-f-f gray_clr'>
                Onix believes in Web3 for all. Onix is a decentralised blockchain scaling platform that enables
                developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on
                security.
              </div>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='container-kws'>
            <div className='bg_box pa-2 b-r-10'>
              <div className='d-f a-i-c j-c-c g-2 flex-wrap'>
                <div className=''>
                  <div className='f-s-2 l-h-1 f-w-600 l-h-1'>220k+</div>
                  <div className='gray_clr k-f-f'>Contract creators</div>
                </div>
                <div className=''>
                  <div className='f-s-2 l-h-1 f-w-600 l-h-1'>$110M</div>
                  <div className='gray_clr k-f-f'>Avg daily gas saved</div>
                </div>
                <div className=''>
                  <div className='f-s-2 l-h-1 f-w-600 l-h-1'>89</div>
                  <div className='gray_clr k-f-f'>Active validators</div>
                </div>
                <div className=''>
                  <div className='f-s-2 l-h-1 f-w-600 l-h-1'>90M+</div>
                  <div className='gray_clr k-f-f'>Unique addresses</div>
                </div>
                <div className=''>
                  <div className='f-s-2 l-h-1 f-w-600 l-h-1'>17.5K</div>
                  <div className='gray_clr k-f-f'>Delegators on PoS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='container-kws'>
            <div className='f-s-2 l-h-1 f-w-600 t-a-c m-b-1'>Scaling solutions, amplified.</div>
            <div className='gray_clr m-b-3 t-a-c k-f-f '>Onix's complete suite of blockchain-scaling solutions.</div>
            <div className='d-f a-i-c j-c-c flex-wrap g-2'>
              <div className='bg_box b-r-10 pa-1 w-17'>
                <img src='/icon.png' alt='' className='m-b-0_5 w-2_5' />
                <div className='f-s-2 l-h-1 f-w-600 m-b-1'>Onix Lancer</div>
                <div className='m-b-1 k-f-f'>
                  EVM-compatible block sidechain, secured by a permissionless set of PoS validators.
                </div>
                <div className='t-t-u k-f-f f-s-0_8 b-r-5 c-b d-i-b bg_g'>online</div>
              </div>
              <div className='bg_box b-r-10 pa-1 w-17'>
                <img src='/icon.png' alt='' className='m-b-0_5 w-2_5' />
                <div className='f-s-2 l-h-1 f-w-600 m-b-1'>Onix Lancer</div>
                <div className='m-b-1 k-f-f'>
                  EVM-compatible block sidechain, secured by a permissionless set of PoS validators.
                </div>
                <div className='t-t-u k-f-f f-s-0_8 b-r-5 c-b d-i-b bg_g'>online</div>
              </div>
              <div className='bg_box b-r-10 pa-1 w-17'>
                <img src='/icon.png' alt='' className='m-b-0_5 w-2_5' />
                <div className='f-s-2 l-h-1 f-w-600 m-b-1'>Onix Lancer</div>
                <div className='m-b-1 k-f-f'>
                  EVM-compatible block sidechain, secured by a permissionless set of PoS validators.
                </div>
                <div className='t-t-u k-f-f f-s-0_8 b-r-5 c-b d-i-b bg_g'>online</div>
              </div>
              <div className='bg_box b-r-10 pa-1 w-17'>
                <img src='/icon.png' alt='' className='m-b-0_5 w-2_5' />
                <div className='f-s-2 l-h-1 f-w-600 m-b-1'>Onix Lancer</div>
                <div className='m-b-1 k-f-f'>
                  EVM-compatible block sidechain, secured by a permissionless set of PoS validators.
                </div>
                <div className='t-t-u k-f-f f-s-0_8 b-r-5 c-b d-i-b bg_g'>online</div>
              </div>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='container-kws'>
            <div className='d-g g-t-c-2 g-2 '>
              <div className=''>
                <div className='f-s-2 l-h-1 f-w-600 m-b-2'>Your gateway to everything Onix</div>
                <div className='gray_clr k-f-f'>
                  Stay current on the latest Onix project developments, news, and content, updated daily.
                </div>
              </div>
              <div className=''>
                <div className='b-r-20 o-h bg_box d-g g-t-c-2 m-b-2'>
                  <img
                    src='https://framerusercontent.com/images/LTIQn3n5qS47Rz6nVpNvZYaU1GY.png'
                    className='w-100 h-100 o-f-c'
                    alt=''
                  />
                  <div className=''>
                    <div className='pa-1'>
                      <div className='t-t-u f-s-0_8 m-b-0_5 k-f-f '>updates</div>
                      <div className='m-b-1 f-s-1_25 f-w-600'>Everything Onix weekly report</div>
                      <div className='d-f a-i-c j-c-s-b'>
                        <div className='f-s-0_8 k-f-f gray_clr'>Everything Onix weekly report</div>
                        <div className=''>
                          <AiOutlineArrowRight className='c-w f-w' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='b-r-10 o-h bg_box d-g g-t-c-2 m-b-2'>
                  <img
                    src='https://framerusercontent.com/images/LTIQn3n5qS47Rz6nVpNvZYaU1GY.png'
                    className='w-100 h-100 o-f-c'
                    alt=''
                  />
                  <div className=''>
                    <div className='pa-1'>
                      <div className='t-t-u f-s-0_8 m-b-0_5 k-f-f '>updates</div>
                      <div className='m-b-1 f-s-1_25 f-w-600'>Everything Onix weekly report</div>
                      <div className='d-f a-i-c j-c-s-b'>
                        <div className='f-s-0_8 k-f-f gray_clr'>Everything Onix weekly report</div>
                        <div className=''>
                          <AiOutlineArrowRight className='c-w f-w' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='b-r-20 o-h bg_box d-g g-t-c-2 '>
                  <img
                    src='https://framerusercontent.com/images/LTIQn3n5qS47Rz6nVpNvZYaU1GY.png'
                    className='w-100 h-100 o-f-c'
                    alt=''
                  />
                  <div className=''>
                    <div className='pa-1'>
                      <div className='t-t-u f-s-0_8 m-b-0_5 k-f-f '>updates</div>
                      <div className='m-b-1 f-s-1_25 f-w-600'>Everything Onix weekly report</div>
                      <div className='d-f a-i-c j-c-s-b'>
                        <div className='f-s-0_8 k-f-f gray_clr'>Everything Onix weekly report</div>
                        <div className=''>
                          <AiOutlineArrowRight className='c-w f-w' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='container-kws'>
            <div className='d-g g-t-c-3 g-2'>
              <div className=''>
                <div className='m-b-1 f-s-1_5  f-w-600'>
                  “It’s not just that is fast, the scalability and ease of use is simply unparalleled, truly
                  mindblowing”
                </div>
                <div className='d-f a-i-c g-1'>
                  <img
                    src='https://framerusercontent.com/images/bfV2PAVOQd6phinkvBjGdmv7NCM.jpg?scale-down-to=512'
                    className='b-r-50 w-3 h-3'
                    alt=''
                  />
                  <div className=''>
                    <div className=''>Markus Freeman</div>
                    <div className='gray_clr k-f-f'>DevOps - Azious</div>
                  </div>
                </div>
              </div>
              <div className=''>
                <div className='m-b-1 f-s-1_5  f-w-600'>
                  “It’s not just that is fast, the scalability and ease of use is simply unparalleled, truly
                  mindblowing”
                </div>
                <div className='d-f a-i-c g-1'>
                  <img
                    src='https://framerusercontent.com/images/bfV2PAVOQd6phinkvBjGdmv7NCM.jpg?scale-down-to=512'
                    className='b-r-50 w-3 h-3'
                    alt=''
                  />
                  <div className=''>
                    <div className=''>Markus Freeman</div>
                    <div className='gray_clr k-f-f'>DevOps - Azious</div>
                  </div>
                </div>
              </div>

              <div className=''>
                <div className='m-b-1 f-s-1_5  f-w-600'>
                  “It’s not just that is fast, the scalability and ease of use is simply unparalleled, truly
                  mindblowing”
                </div>
                <div className='d-f a-i-c g-1'>
                  <img
                    src='https://framerusercontent.com/images/bfV2PAVOQd6phinkvBjGdmv7NCM.jpg?scale-down-to=512'
                    className='b-r-50 w-3 h-3'
                    alt=''
                  />
                  <div className=''>
                    <div className=''>Markus Freeman</div>
                    <div className='gray_clr k-f-f'>DevOps - Azious</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='container-kws'>
            <div className='t-a-c f-s-3 f-w-600 m-b-2'>Want to get involved?</div>
            <div className='m-b-3 t-a-c k-f-f'>
              <span className='gray_clr k-f-f'>Or learn all about</span>
              <span className='pink_clr k-f-f'> how to build on Onix.</span>
            </div>
            <div className='t-a-c'>
              <button className='b_pink t-t-u c-l-w b-c-t b-r-5 p-x-1 p-y-0_5 '>Join the community</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Homes
