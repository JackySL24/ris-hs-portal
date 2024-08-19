'use client';

import Image from "next/image";
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../css/main.css"
import "../css/sportspage.css"
import "../css/custom-swiper.css"
import "../css/custom-dropdown.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function SportsPage() {
    const score_title = ['football', 'badminton', 'soccer']
    const news_title = [{id: 1, title: 'new1', content: 'On July 7th, please report to Godbout hall to cheer for our U14 football team, who are goingagainst BPS!'}, 
                        {id: 2, title: 'new2', content: 'On July 7th, please report to Godbout hall to cheer for our U14 football team, who are goingagainst BPS!'}, 
                        {id: 3, title: 'new3', content: 'On July 7th, please report to Godbout hall to cheer for our U14 football team, who are goingagainst BPS!'}
                    ]
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg position-absolute top-0 start-0 end-0">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <Image 
                                height={500}
                                width={500}
                                src="/images/RIS-logo.png"
                                alt=""
                                style={{height: '55px', width: '100%'}}
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item fs-3 mx-5">
                                    <a className="nav-link text-white" href="#">
                                        Club
                                    </a>
                                </li>
                                <li className="nav-item fs-3 mx-5">
                                    <a className="nav-link text-white" href="#">
                                        Sports
                                    </a>
                                </li>
                                <li className="nav-item fs-3 mx-5">
                                    <a className="nav-link text-white" href="#">
                                        Grade
                                    </a>
                                </li>
                                <li className="nav-item fs-3 mx-5">
                                    <a className="nav-link text-white" href="#">
                                        Points
                                    </a>
                                </li>
                                <li className="nav-item fs-3 mx-5">
                                    <a
                                        className="nav-link text-white"
                                        href="qa.html"
                                    >
                                        Q&amp;A
                                    </a>
                                </li>
                            </ul>
                            <Image 
                                height={500}
                                width={500}
                                src="/images/icon.png"
                                alt=""
                                style={{height: '45px', width: 'auto'}}
                            />
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                {/* banner */}
                <section className="background-picture-sp d-flex flex-column justify-content-center">
                    <div className="container ">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="fs-80">Sports</h1>
                            </div>
                        </div>
                    </div>
                </section>
                {/* curve dark blue*/}
                <section className="curve-dark-blue" />
                {/* slider */}
                <section className="bg-dark-blue pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Swiper
                                    navigation={true}
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    {news_title.map((data) => {
                                        return (
                                            
                                            <SwiperSlide key={data.id}>
                                                <div className="card p-2">
                                                    <div className="card-body p-5">
                                                        <div className="row">
                                                            <div className="col-12 fs-3 blue-text">
                                                                {data.title}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12 fs-6 yellow-text text-margin">
                                                                JULY 7th, 2024 | GODBOUT HALL
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12 text-roboto fs-6 text-body-secondary">
                                                                {data.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                })}
                                </Swiper>   
                                        
                                        
                            </div>
                        </div>
                    </div>
                </section>
                {/* scoreboard*/}
                <section className="bg-dark-blue">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <h1 className="fs-1 text-white text-center">
                                    scoreboard
                                </h1>
                                <div className="card border-0">
                                    <div className="card-body card-lightbluecolor p-5">
                                        {score_title.map((data) => {
                                            return (
                                                <div key={data}>
                                                    <div className="row mb-2">
                                                        <div className="col-12">
                                                            <h2 className="text-center text-white">
                                                                {data}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-5 bg-white h-50 my-auto shadow d-flex justify-content-center rounded-start">
                                                            <Image 
                                                                height={500}
                                                                width={500}
                                                                src="/images/PantherHead_500x302_shadow.png"
                                                                alt=""
                                                                className="me-2"
                                                                style={{height: '40px', width: 'auto'}} 
                                                            />
                                                            <p className="m-0 fs-3 blue-text">
                                                                Panther
                                                            </p>
                                                        </div>
                                                        <div className="col-2 bg-orange p-1 text-center rounded-3 shadow">
                                                            <h1 className="m-0 text-white">
                                                                2 : 1
                                                            </h1>
                                                        </div>
                                                        <div className="col-5 bg-white h-50 my-auto shadow d-flex justify-content-center rounded-end">
                                                            <Image 
                                                                height={500}
                                                                width={500}
                                                                src="/images/RIS-Phoenix-logo-819x1024.png"
                                                                alt=""
                                                                className="me-2"
                                                                style={{height: '40px', width: 'auto'}} 
                                                            />
                                                            <p className="m-0 fs-3 blue-text">
                                                                Phoenix
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="dropdown text-center dda-margintop">
                                    <a
                                        className="btn dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        
                                        <span className="fs-1 text-white text-center">SEASON 1-3</span>
                                        <Image 
                                            height={500}
                                            width={500}
                                            src="/images/ddarrow.png"
                                            alt=""
                                            style={{height: 'auto', width: '26px'}}
                                            className="dda"
                                        />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                SEASON 1
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                SEASON 2
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                SEASON 3
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="row">
                                    <div className="col-6 mb-4">
                                        <Link href="/season-sports">
                                            <Image 
                                                height={500}
                                                width={500}
                                                src="/images/volleyball.webp"
                                                alt=""
                                                className="picture-width mb-2"
                                            />
                                        </Link>
                                        <h2 className="text-center">
                                            Girls volleyball
                                        </h2>
                                    </div>
                                    <div className="col-6 mb-4">
                                        <Link href="/season-sports">
                                            <Image 
                                                height={500}
                                                width={500}
                                                src="/images/volleyball.webp"
                                                alt=""
                                                className="picture-width mb-2"
                                                 
                                            />
                                        </Link>
                                        <h2 className="text-center">
                                            football
                                        </h2>
                                    </div>
                                    <div className="col-6 mb-4">
                                        <Link href="/season-sports">
                                            <Image 
                                                height={500}
                                                width={500}
                                                src="/images/gfootball.png"
                                                alt=""
                                                className="picture-width mb-2"
                                                 
                                            />
                                        </Link>
                                        <h2 className="text-center">
                                            basketball
                                        </h2>
                                    </div>
                                    <div className="col-6 mb-4">
                                        <Link href="/season-sports">
                                            <Image 
                                                height={500}
                                                width={500}
                                                src="/images/swimming.jpeg"
                                                alt=""
                                                className="picture-width mb-2"
                                                 
                                            />
                                        </Link>
                                        <h2 className="text-center">
                                            swimming
                                        </h2>
                                    </div>
                                    <div className="col-6 mb-4">
                                        <Link href="/season-sports">
                                            <Image 
                                                height={500}
                                                width={500}
                                                src="/images/gfootball.png"
                                                alt=""
                                                className="picture-width mb-2"
                                                 
                                            />
                                        </Link>
                                        <h2 className="text-center">
                                            Girls volleyball
                                        </h2>
                                    </div>
                                    <div className="col-6 mb-4">
                                        <Link href="/season-sports">
                                            <Image 
                                                height={500}
                                                width={500}
                                                src="/images/swimming.jpeg"
                                                alt=""
                                                className="picture-width mb-2"
                                                 
                                            />
                                        
                                            <h2 className="text-center">
                                                Girls volleyball
                                            </h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
