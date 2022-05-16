import React from 'react'

export default function Home(props) {
    return (
        <div>
            <main className="main">
                <div className="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="home__content">
                                    <h1 className="home__title">The largest NFT marketplace</h1>
                                    <p className="home__text">Digital marketplace for crypto collectibles and non-fungible tokens.<br/>Buy, sell, and discover exclusive digital assets.</p>

                                    <div className="home__btns">
                                        <a href="explore.html" className="home__btn home__btn--clr">Explore</a>
                                        <a href="signin.html" className="home__btn">Create</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">

                    <section className="row row--grid">

                        <div className="col-12">
                            <div className="main__title">
                                <h2><a href="explore.html">Carbon Credits</a></h2>
                            </div>
                        </div>


                        <div className="col-12">
                            <div className="main__filter">
                                <form action="#" className="main__filter-search">
                                    <input type="text" placeholder="Search for a creator…" />
                                        <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
                                </form>

                                <div className="main__filter-wrap">
                                    <select className="main__select" name="status">
                                        <option value="rating">By rating</option>
                                        <option value="views">By views</option>
                                        <option value="popularity">By popularity</option>
                                    </select>

                                    <select className="main__select" name="authors">
                                        <option value="0">All Authors</option>
                                        <option value="1">Verified only</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className="row row--grid">
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                <div className="author">
                                    <a href="author.html" className="author__cover author__cover--bg" data-bg="img/bg/bg-small.png">
                                    </a>
                                    <div className="author__meta">
                                        <a href="author.html" className="author__avatar author__avatar--verified">
                                            <img src="img/avatars/avatar.jpg" alt="" />
                                        </a>
                                        <h3 className="author__name"><a href="author.html">Adam Zapel</a></h3>
                                        <h3 className="author__nickname"><a href="author.html">@aaarthur</a></h3>
                                        <p className="author__text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                                        <div className="author__wrap">
                                            <div className="author__followers">
                                                <p>3829</p>
                                                <span>Followers</span>
                                            </div>
                                            <button className="author__follow" type="button">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                <div className="author">
                                    <a href="author.html" className="author__cover">
                                    </a>
                                    <div className="author__meta">
                                        <a href="author.html" className="author__avatar author__avatar--verified">
                                            <img src="img/avatars/avatar2.jpg" alt="" />
                                        </a>
                                        <h3 className="author__name"><a href="author.html">Barb E. Dahl</a></h3>
                                        <h3 className="author__nickname"><a href="author.html">@nicky87</a></h3>
                                        <p className="author__text">If you are going to use a passage of Lorem Ipsum</p>
                                        <div className="author__wrap">
                                            <div className="author__followers">
                                                <p>4602</p>
                                                <span>Followers</span>
                                            </div>
                                            <button className="author__follow" type="button">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                <div className="author">
                                    <a href="author.html" className="author__cover author__cover--bg" data-bg="img/bg/bg-small2.png">
                                    </a>
                                    <div className="author__meta">
                                        <a href="author.html" className="author__avatar author__avatar--verified">
                                            <img src="img/avatars/avatar3.jpg" alt="" />
                                        </a>
                                        <h3 className="author__name"><a href="author.html">Biff Wellington</a></h3>
                                        <h3 className="author__nickname"><a href="author.html">@neo</a></h3>
                                        <p className="author__text">Many desktop publishing packages and web page editors now use Lorem</p>
                                        <div className="author__wrap">
                                            <div className="author__followers">
                                                <p>1294</p>
                                                <span>Followers</span>
                                            </div>
                                            <button className="author__follow author__follow--true" type="button">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                <div className="author">
                                    <a href="author.html" className="author__cover author__cover--bg" data-bg="img/bg/bg-small3.png">
                                    </a>
                                    <div className="author__meta">
                                        <a href="author.html" className="author__avatar author__avatar--verified">
                                            <img src="img/avatars/avatar4.jpg" alt="" />
                                        </a>
                                        <h3 className="author__name"><a href="author.html">Charity Case</a></h3>
                                        <h3 className="author__nickname"><a href="author.html">@midinh</a></h3>
                                        <p className="author__text">There are many variations of passages of Lorem Ipsum</p>
                                        <div className="author__wrap">
                                            <div className="author__followers">
                                                <p>10 845</p>
                                                <span>Followers</span>
                                            </div>
                                            <button className="author__follow" type="button">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                <div className="author">
                                    <a href="author.html" className="author__cover"></a>
                                    <div className="author__meta">
                                        <a href="author.html" className="author__avatar author__avatar--verified">
                                            <img src="img/avatars/avatar5.jpg" alt="" />
                                        </a>
                                        <h3 className="author__name"><a href="author.html">Don Key</a></h3>
                                        <h3 className="author__nickname"><a href="author.html">@kateblank</a></h3>
                                        <p className="author__text">The generated Lorem Ipsum is therefore always free from repetition</p>
                                        <div className="author__wrap">
                                            <div className="author__followers">
                                                <p>9713</p>
                                                <span>Followers</span>
                                            </div>
                                            <button className="author__follow" type="button">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                <div className="author">
                                    <a href="author.html" className="author__cover author__cover--bg" data-bg="img/bg/bg-small4.png">
                                    </a>
                                    <div className="author__meta">
                                        <a href="author.html" className="author__avatar author__avatar--verified">
                                            <img src="img/avatars/avatar6.jpg" alt="" />
                                        </a>
                                        <h3 className="author__name"><a href="author.html">Mona Lott</a></h3>
                                        <h3 className="author__nickname"><a href="author.html">@fantraingle</a></h3>
                                        <p className="author__text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                                        <div className="author__wrap">
                                            <div className="author__followers">
                                                <p>5 924</p>
                                                <span>Followers</span>
                                            </div>
                                            <button className="author__follow" type="button">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                <div className="author">
                                    <a href="author.html" className="author__cover author__cover--bg" data-bg="img/bg/bg-small5.png">
                                    </a>
                                    <div className="author__meta">
                                        <a href="author.html" className="author__avatar">
                                            <img src="img/avatars/avatar7.jpg" alt="" />
                                        </a>
                                        <h3 className="author__name"><a href="author.html">Orson Carte</a></h3>
                                        <h3 className="author__nickname"><a href="author.html">@sc00ty</a></h3>
                                        <p className="author__text">It is a long established fact that a reader will be distracted</p>
                                        <div className="author__wrap">
                                            <div className="author__followers">
                                                <p>11 342</p>
                                                <span>Followers</span>
                                            </div>
                                            <button className="author__follow" type="button">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                <div className="author">
                                    <a href="author.html" className="author__cover author__cover--bg" data-bg="img/bg/bg-small6.png">
                                    </a>
                                    <div className="author__meta">
                                        <a href="author.html" className="author__avatar author__avatar--verified">
                                            <img src="img/avatars/avatar8.jpg" alt="" />
                                        </a>
                                        <h3 className="author__name"><a href="author.html">Ray Gunn</a></h3>
                                        <h3 className="author__nickname"><a href="author.html">@justart</a></h3>
                                        <p className="author__text">All the Lorem Ipsum generators on the Internet</p>
                                        <div className="author__wrap">
                                            <div className="author__followers">
                                                <p>1245</p>
                                                <span>Followers</span>
                                            </div>
                                            <button className="author__follow" type="button">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>



                    <section className="row row--grid">

                        <div className="col-12">
                            <div className="main__title">
                                <h2>Top sellers</h2>

                                <a href="authors.html" className="main__link">View all <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
                            </div>
                        </div>



                        <div className="col-12">
                            <ul className="sellers-list">
                                <li>
                                    <span className="sellers-list__number">1</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar.jpg" alt="" />
                                            <a href="author.html">@miriuuu</a>
                                            <span>214.22 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">2</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar2.jpg" alt="" />
                                            <a href="author.html">@sc00ty</a>
                                            <span>205.8 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">3</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar3.jpg" alt="" />
                                            <a href="author.html">@redalert</a>
                                            <span>137.65 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">4</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar4.jpg" alt="" />
                                            <a href="author.html">@1one</a>
                                            <span>129.301 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">5</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar5.jpg" alt="" />
                                            <a href="author.html">@kateblank</a>
                                            <span>112.3 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">6</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar6.jpg" alt="" />
                                            <a href="author.html">@johndoe</a>
                                            <span>108.88 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">7</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar7.jpg" alt="" />
                                            <a href="author.html">@nickname</a>
                                            <span>88.58 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">8</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar8.jpg" alt="" />
                                            <a href="author.html">@lllily</a>
                                            <span>73.207 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">9</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar9.jpg" alt="" />
                                            <a href="author.html">@fantraingle</a>
                                            <span>71.076 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">10</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar10.jpg" alt="" />
                                            <a href="author.html">@oxyoxyoxy</a>
                                            <span>57.041 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">11</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar11.jpg" alt="" />
                                            <a href="author.html">@vandam</a>
                                            <span>50.261 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">12</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar12.jpg" alt="" />
                                            <a href="author.html">@dididi</a>
                                            <span>44.79 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">13</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar13.jpg" alt="" />
                                            <a href="author.html">@lyzzy</a>
                                            <span>43.24 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">14</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar14.jpg" alt="" />
                                            <a href="author.html">@oceanu</a>
                                            <span>41.221 ETH</span>
                                    </div>
                                </li>

                                <li>
                                    <span className="sellers-list__number">15</span>
                                    <div className="sellers-list__author sellers-list__author--verified">
                                        <img src="assets/img/avatars/avatar15.jpg" alt="" />
                                            <a href="author.html">@justart</a>
                                            <span>40.195 ETH</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </section>

                </div>
            </main>


            <div id="modal-asset" className="zoom-anim-dialog mfp-hide modal modal--asset">
                <button className="modal__close" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" /></svg></button>

                <div className="row">

                    <div className="col-12 col-xl-8">
                        <div className="asset__item">
                            <img src="assets/img/cover/cover-big.jpg" alt="" />


                                <div className="share share--asset">
                                    <a href="#" className="share__link share__link--fb"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.56341 16.8197V8.65888H7.81615L8.11468 5.84663H5.56341L5.56724 4.43907C5.56724 3.70559 5.63693 3.31257 6.69042 3.31257H8.09873V0.5H5.84568C3.1394 0.5 2.18686 1.86425 2.18686 4.15848V5.84695H0.499939V8.6592H2.18686V16.8197H5.56341Z" /></svg> <span>share</span></a>
                                    <a href="#" className="share__link share__link--tw"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.55075 3.19219L7.58223 3.71122L7.05762 3.64767C5.14804 3.40404 3.47978 2.57782 2.06334 1.1902L1.37085 0.501686L1.19248 1.01013C0.814766 2.14353 1.05609 3.34048 1.843 4.14552C2.26269 4.5904 2.16826 4.65396 1.4443 4.38914C1.19248 4.3044 0.972149 4.24085 0.951164 4.27263C0.877719 4.34677 1.12953 5.31069 1.32888 5.69202C1.60168 6.22165 2.15777 6.74068 2.76631 7.04787L3.28043 7.2915L2.67188 7.30209C2.08432 7.30209 2.06334 7.31268 2.12629 7.53512C2.33613 8.22364 3.16502 8.95452 4.08833 9.2723L4.73884 9.49474L4.17227 9.8337C3.33289 10.321 2.34663 10.5964 1.36036 10.6175C0.888211 10.6281 0.5 10.6705 0.5 10.7023C0.5 10.8082 1.78005 11.4014 2.52499 11.6344C4.75983 12.3229 7.41435 12.0264 9.40787 10.8506C10.8243 10.0138 12.2408 8.35075 12.9018 6.74068C13.2585 5.88269 13.6152 4.315 13.6152 3.56293C13.6152 3.07567 13.6467 3.01212 14.2343 2.42953C14.5805 2.09056 14.9058 1.71983 14.9687 1.6139C15.0737 1.41264 15.0632 1.41264 14.5281 1.59272C13.6362 1.91049 13.5103 1.86812 13.951 1.39146C14.2762 1.0525 14.6645 0.438131 14.6645 0.258058C14.6645 0.22628 14.5071 0.279243 14.3287 0.374576C14.1398 0.480501 13.7202 0.639389 13.4054 0.734722L12.8388 0.914795L12.3247 0.565241C12.0414 0.374576 11.6427 0.162725 11.4329 0.0991699C10.8978 -0.0491255 10.0794 -0.0279404 9.59673 0.14154C8.2852 0.618204 7.45632 1.84694 7.55075 3.19219Z" /></svg> <span>tweet</span></a>
                                    <a href="#" className="share__link share__link--link"><svg width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8,12a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H9A1,1,0,0,0,8,12Zm2,3H7A3,3,0,0,1,7,9h3a1,1,0,0,0,0-2H7A5,5,0,0,0,7,17h3a1,1,0,0,0,0-2Zm7-8H14a1,1,0,0,0,0,2h3a3,3,0,0,1,0,6H14a1,1,0,0,0,0,2h3A5,5,0,0,0,17,7Z" /></svg> <span>copy link</span></a>
                                </div>



                                <button className="asset__likes" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path></svg>
                                    <span>358</span>
                                </button>

                        </div>
                    </div>



                    <div className="col-12 col-xl-4">
                        <div className="asset__info">
                            <div className="asset__desc">
                                <h2>Descriptions</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                            </div>

                            <ul className="asset__authors">
                                <li>
                                    <span>Creator</span>
                                    <div className="asset__author asset__author--verified">
                                        <img src="assets/img/avatars/avatar5.jpg" alt="" />
                                            <a href="author.html">@midinh</a>
                                    </div>
                                </li>
                                <li>
                                    <span>Collection</span>
                                    <div className="asset__author ">
                                        <img src="assets/img/avatars/avatar9.jpg" alt="" />
                                            <a href="collection.html">The Meta Key</a>
                                    </div>
                                </li>
                            </ul>


                            <ul className="nav nav-tabs asset__tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tab-11" role="tab" aria-controls="tab-11" aria-selected="true">History</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab-22" role="tab" aria-controls="tab-22" aria-selected="false">Bids</a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab-33" role="tab" aria-controls="tab-33" aria-selected="false">Details</a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab-11" role="tabpanel">
                                    <div className="asset__actions asset__actions--scroll" id="asset__actions--scroll">
                                        <div className="asset__action asset__action--verified">
                                            <img src="assets/img/avatars/avatar10.jpg" alt="" />
                                                <p>Bid placed for <b>11.00 ETH</b> 4 hours ago <br/>by <a href="author.html">@erikkk</a></p>
                                        </div>

                                        <div className="asset__action asset__action--verified">
                                            <img src="assets/img/avatars/avatar4.jpg" alt="" />
                                                <p>Bid placed for <b>10.00 ETH</b> 5 hours ago <br/>by <a href="author.html">@johndoe</a></p>
                                        </div>

                                        <div className="asset__action asset__action--verified">
                                            <img src="assets/img/avatars/avatar6.jpg" alt="" />
                                                <p>Bid placed for <b>2.508 ETH</b> 5 hours ago <br/>by <a href="author.html">@n1ckname</a></p>
                                        </div>

                                        <div className="asset__action asset__action--verified">
                                            <img src="assets/img/avatars/avatar4.jpg" alt="" />
                                                <p>Bid placed for <b>2.2799 ETH</b> 6 hours ago <br/>by <a href="author.html">@johndoe</a></p>
                                        </div>

                                        <div className="asset__action asset__action--verified">
                                            <img src="assets/img/avatars/avatar5.jpg" alt="" />
                                                <p>Put on sale for <b>0.55 ETH</b> 1 days ago <br/>by <a href="author.html">@midinh</a></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="tab-22" role="tabpanel">
                                    <div className="asset__actions">
                                        <div className="asset__action asset__action--verified">
                                            <img src="assets/img/avatars/avatar10.jpg" alt="" />
                                                <p>Bid placed for <b>11.00 ETH</b> 4 hours ago <br/>by <a href="author.html">@erikkk</a></p>
                                        </div>

                                        <div className="asset__action asset__action--verified">
                                            <img src="assets/img/avatars/avatar4.jpg" alt="" />
                                                <p>Bid placed for <b>10.00 ETH</b> 5 hours ago <br/>by <a href="author.html">@johndoe</a></p>
                                        </div>

                                        <div className="asset__action asset__action--verified">
                                            <img src="assets/img/avatars/avatar6.jpg" alt="" />
                                                <p>Bid placed for <b>2.508 ETH</b> 5 hours ago <br/>by <a href="author.html">@n1ckname</a></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="tab-33" role="tabpanel">
                                    <ul className="asset__authors asset__authors--tab">
                                        <li>
                                            <span>Owner</span>
                                            <div className="asset__author asset__author--verified">
                                                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                                                    <a href="author.html">@midinh</a>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Year created</span>
                                            <p>2021</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="asset__wrap">
                                <div className="asset__timer">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.3,8.59l.91-.9a1,1,0,0,0-1.42-1.42l-.9.91a8,8,0,0,0-9.79,0l-.91-.92A1,1,0,0,0,4.77,7.69l.92.91A7.92,7.92,0,0,0,4,13.5,8,8,0,1,0,18.3,8.59ZM12,19.5a6,6,0,1,1,6-6A6,6,0,0,1,12,19.5Zm-2-15h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Zm3,6a1,1,0,0,0-2,0v1.89a1.5,1.5,0,1,0,2,0Z" /></svg> Auction ends in</span>
                                    <div className="asset__clock"></div>
                                </div>

                                <div className="asset__price">
                                    <span>Minimum bid</span>
                                    <span>0.2 ETH</span>
                                </div>
                            </div>


                            <div className="asset__btns">
                                <button className="asset__btn asset__btn--full asset__btn--clr" type="button">Place a bid</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}