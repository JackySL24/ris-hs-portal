"use client";
import Link from "next/link";
import "../../css/main.css";
import "../../css/main-back-office.css";
import { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.js";

export default function Dashboard() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [location, setLocation] = useState("");
    const [timestamp, setTimeStamp] = useState("");
    const [sportname, setSportName] = useState("");
    const [firsteam, setFirstTeam] = useState("");
    const [secondteam, setSecondTeam] = useState("");
    const [firstscore, setFirstScore] = useState("");
    const [secondscore, setSecondScore] = useState("");
    const [linktolive, setLinkToLive] = useState("");
    
    const [news_list, set_news_list] = useState([
        {
            id: 1,vvvv
            title: "New1",
            content: "Content 1",
            location: "Main hall",
            timestamp: "July 7th, 2024",
        },
        {
            id: 2,
            title: "New2",
            content: "Content 2",
            location: "Main hall",
            timestamp: "July 14th, 2024",
        },
        {
            id: 3,
            title: "New3",
            content: "Content 3",
            location: "Main hall",
            timestamp: "July 20th, 2024",
        },
    ]);

    const [scorebaord_list, set_scoreboard_list] = useState([
        {
            id: 1,
            sportname: "Basketball",
            teamname1: "panthers",
            teamname2: "phoenix",
            scoreteam1: "1",
            scoreteam2: "2",
            livelink:
                "https://www.youtube.com/embed/-4NCjjcF7y8?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.rism.ac.th&widgetid=1",
        },
        {
            id: 2,
            sportname: "Basketball",
            teamname1: "panthers",
            teamname2: "phoenix",
            scoreteam1: "1",
            scoreteam2: "2",
            livelink:
                "https://www.youtube.com/embed/-4NCjjcF7y8?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.rism.ac.th&widgetid=1",
        },
        {
            id: 3,
            sportname: "Basketball",
            teamname1: "panthers",
            teamname2: "phoenix",
            scoreteam1: "1",
            scoreteam2: "2",
            livelink:
                "https://www.youtube.com/embed/-4NCjjcF7y8?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.rism.ac.th&widgetid=1",
        },
    ]);

    function delete_news(index) {
        const temp = news_list.filter(function (data, i) {
            return i != index;
        });
        set_news_list(temp);
        //TODO remove news api
    }

    function delete_scoreboard(index) {
        const delscorebaord = scorebaord_list.filter(function (data, i) {
            return i != index;
        });
        set_scoreboard_list(delscorebaord);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="offset-2 col-8">
                    <h2 className="my-4">Edit Sports Page</h2>
                    {/* Banner Card */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="card">
                                <h4 className="card-header bg-blue text-white">
                                    Banner
                                </h4>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label
                                                htmlFor=""
                                                className="form-label"
                                            >
                                                Banner Title:{" "}
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-12 mb-4">
                                            <label
                                                htmlFor=""
                                                className="form-label"
                                            >
                                                Banner Video:{" "}
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-12 text-end">
                                            <button className="btn btn-blue">
                                                SAVE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* News Card */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="card">
                                <h4 className="card-header bg-blue text-white">
                                    News
                                </h4>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <table className="table table-striped table-hover table-backoffice">
                                                <thead>
                                                    <tr>
                                                        <th>Action</th>
                                                        <th>Title</th>
                                                        <th>Content</th>
                                                        <th>Location</th>
                                                        <th>TimeStamp</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {news_list.map(
                                                        (data, index) => {
                                                            return (
                                                                <tr
                                                                    key={
                                                                        data.id
                                                                    }
                                                                >
                                                                    <td>
                                                                        <i className="bi bi-pencil text-success me-2"></i>
                                                                        <i
                                                                            onClick={() =>
                                                                                delete_news(
                                                                                    index
                                                                                )
                                                                            }
                                                                            className="bi bi-trash3 text-danger"
                                                                        ></i>
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            data.title
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            data.content
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            data.location
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            data.timestamp
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-6 text-start">
                                            <button
                                                type="button"
                                                className="btn btn-success"
                                                data-bs-toggle="modal"
                                                data-bs-target="#newsadd"
                                            >
                                                <i className="bi bi-plus-lg me-1 cvvv"></i>
                                                Add News
                                            </button>
                                        </div>
                                        <div
                                            className="modal fade"
                                            id="newsadd"
                                            tabIndex={-1}
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1
                                                            className="modal-title fs-5"
                                                            id="exampleModalLabel"
                                                        >
                                                            Add News
                                                        </h1>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        />
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="row">
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">Title</label>
                                                                <input className="form-control text-black text-roboto" type="text" />
                                                            </div>
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">Content</label>
                                                                <textarea className="form-control  text-black text-roboto" type="" />
                                                            </div>
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">Location</label>
                                                                <input className="form-control text-black text-roboto" type="text" />
                                                            </div>
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">Timestamp</label>
                                                                <input className="form-control text-black text-roboto   " type="date" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-blue"
                                                        >
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className="btn btn-blue">
                                                SAVE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scoresboard */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="card">
                                <h4 className="card-header bg-blue text-white">
                                    Scoreboard
                                </h4>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive">
                                                <table className="table table-striped table-hover table-backoffice">
                                                    <thead>
                                                        <tr>
                                                            <th width="100px">
                                                                Action
                                                            </th>
                                                            <th>Sport Name</th>
                                                            <th>First Team</th>
                                                            <th>Second Team</th>
                                                            <th>
                                                                First Team Score
                                                            </th>
                                                            <th>
                                                                Second Team
                                                                Score
                                                            </th>
                                                            <th width="300px">
                                                                live link
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {scorebaord_list.map(
                                                            (data, index) => {
                                                                return (
                                                                    <tr
                                                                        key={
                                                                            data.id
                                                                        }
                                                                    >
                                                                        <td>
                                                                            <i className="bi bi-pencil text-success me-2"></i>
                                                                            <i
                                                                                onClick={() =>
                                                                                    delete_scoreboard(
                                                                                        index
                                                                                    )
                                                                                }
                                                                                className="bi bi-trash3 text-danger"
                                                                            ></i>
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                data.sportname
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                data.teamname1
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                data.teamname2
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                data.scoreteam1
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                data.scoreteam2
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            <Link
                                                                                href={
                                                                                    data.livelink
                                                                                }
                                                                                className="text-grey"
                                                                                target="_blank"
                                                                            >
                                                                                <u>
                                                                                    Link
                                                                                    to
                                                                                    Live
                                                                                </u>
                                                                                <i className="bi bi-box-arrow-up-right text-grey ms-1"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-6 text-start">
                                        <button
                                                type="button"
                                                className="btn btn-success"
                                                data-bs-toggle="modal"
                                                data-bs-target="#scoreboardadd"
                                            >
                                                <i className="bi bi-plus-lg me-1 cvvv"></i>
                                                Add Scorebaord
                                            </button>
                                        </div>
                                        <div
                                            className="modal fade"
                                            id="scoreboardadd"
                                            tabIndex={-1}
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1
                                                            className="modal-title fs-5"
                                                            id="exampleModalLabel"
                                                        >
                                                            Add Scoreboard
                                                        </h1>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        />
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="row">
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">Sport Name</label>
                                                                <input className="form-control text-black text-roboto" type="text" />
                                                            </div>
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">First team</label>
                                                                <input className="form-control  text-black text-roboto" type="" />
                                                            </div>
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">Second team</label>
                                                                <input className="form-control text-black text-roboto" type="text" />
                                                            </div>
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">First Team Score</label>
                                                                <input className="form-control text-black text-roboto" type="text" />
                                                            </div>
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">Second Team Score</label>
                                                                <input className="form-control text-black text-roboto" type="text" />
                                                            </div>
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">Paste Link to Live</label>
                                                                <input className="form-control text-black text-roboto" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-blue"
                                                        >
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 text-end">
                                            <button className="btn btn-blue">
                                                SAVE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
