import Image from "next/image";
import Row from "react-bootstrap/Row";
import Directors from "../../public/bod/Banner.png";
// import Chairman from "../../public/bod/chairman.jpg";
// import Chairman2 from "../../public/bod/chairman2.png";
// import Chairman3 from "../../public/bod/chairman3.png";
// import Chairman4 from "../../public/bod/chairman4.jpg";
// import Chairman5 from "../../public/bod/chairman5.png";
// import Leader from "../../public/bod/leader.jpg";
// import TeamOne from "../../public/bod/teamone.jpg";
// import TeamTwo from "../../public/bod/teamtwo.jpg";
// import TeamThree from "../../public/bod/teamthree.jpg";
// import TeamFour from "../../public/bod/teamfour.jpg";
// import TeamSix from "../../public/bod/teamsix.png";
// import TeamSeven from "../../public/bod/teamseven.jpg";
// import TeamEight from "../../public/bod/teameight.jpg";
import Head from "next/head";
import { makeTitle } from "../../utils/helpers";
import React, { Fragment, useEffect, useState } from "react";
import axios from "../../utils/axios";

const BoardOfDirectors = () => {
  const [info, setInfo] = useState([]);
  const [member, setMember] = useState([]);
  const [bod, setBod] = useState([]);

  const fetchTeamLead = () => {
    axios.get(`/content-module/18`).then((res) => {
      setInfo(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchTeamLead();
  }, []);

  const fetchMemberPerson = () => {
    axios.get(`/content-module/19`).then((res) => {
      setMember(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchMemberPerson();
  }, []);

  const fetchBoardofDirectors = () => {
    axios.get(`/content-module/1`).then((res) => {
      setBod(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchBoardofDirectors();
  }, []);

  console.log(bod);

  return (
    <Fragment>
      <Head>
        <title>{makeTitle("Board of Directors")}</title>
      </Head>
      <section>
        <div className="">
          <Image src={Directors} alt="" className="bod-img" />
        </div>
        <div className="container-bod">
          <h1 className="bod-page-title text-capitalize font-40 fw-bold text-center py-5 font-lato">
            Corporate Office Organogram
          </h1>
          
          {/* Chirman */}
          <div className="d-flex justify-content-center mb-5">
            <div className="col-lg-4 col-md-4 mb-4">
              <div className="text-center">
                <img
                  src={info[0]?.item_image}
                  alt=""
                  className="rounded leadership-team"
                />
                <h2 className="font-20 fw-bold pt-2 pb-1">
                  {info[0]?.item_name}
                </h2>
                <p className="position-relative pt-1">
                  {info[0]?.item_short_desc}
                </p>
              </div>
            </div>
          </div>


          

          {/* <div className="row d-flex justify-content-evenly">
            <div className="col-lg-4 col-md-4 mb-4">
              <div className="text-center">
                <img
                  src="/bod/demo.jpg"
                  alt=""
                  className="rounded-pill chairman-img"
                />
                <h2 className="font-20 fw-bold pt-2 pb-2">Tanveer Ahmed</h2>
                <p className="about_titledesign position-relative pt-2">
                  Group Vice Chairman (i)
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4">
              <div className="text-center">
                <img
                  src="/bod/demo.jpg"
                  alt=""
                  className="rounded-pill chairman-img"
                />
                <h2 className="font-20 fw-bold pt-2 pb-2">Taskeen Ahmed</h2>
                <p className="about_titledesign position-relative pt-2">
                  Group Vice Chairman (ii)
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4">
              <div className="text-center">
                <img
                  src="/bod/demo.jpg"
                  alt=""
                  className="rounded-pill chairman-img"
                />
                <h2 className="font-20 fw-bold pt-2 pb-2">Tashfeen Ahmed</h2>
                <p className="about_titledesign position-relative pt-2">
                  Group Vice Chairman (iii)
                </p>
              </div>
            </div>
          </div> */}
          <div className="" style={{ paddingBottom: "30px" }}>
            <Row className="d-flex justify-content-md-center">
              {bod?.map((curElem, key) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-4 mb-4">
                      <div className="text-center">
                        <img
                          src={curElem.item_image}
                          alt=""
                          className="rounded-pill chairman-img"
                        />
                        <h2 className="font-20 fw-bold pt-2 pb-2">
                          {curElem.item_name}
                        </h2>
                        <p className="about_titledesign position-relative pt-2">
                          
                          {curElem.item_short_desc}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}

            </Row>
          </div>

          <h1 className="text-capitalize font-40 fw-bold text-center py-5 font-lato">
            Marketing Team
          </h1>
         


          <div className="row">
            {member?.map((curElem, key) => {
              return (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
                    <div className="text-center">
                      <img
                        src={curElem.item_image}
                        alt=""
                        className="rounded new-team-member"
                      />
                      <h2 className="font-20 fw-bold pt-2 pb-1">
                        {curElem.item_name}
                      </h2>
                      <p className="position-relative pt-1">
                        {curElem.item_short_desc}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BoardOfDirectors;
