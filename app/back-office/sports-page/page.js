import Link from 'next/link';
import "../../css/main.css";
import "../../css/main-back-office.css";

export default function Dashboard() {
    const news_list = [
        {id: 1, title: 'New1', content: 'Content 1', location: 'Main hall', timestamp: 'July 7th, 2024'},
        {id: 2, title: 'New2', content: 'Content 2', location: 'Main hall', timestamp: 'July 14th, 2024'},
        {id: 3, title: 'New3', content: 'Content 3', location: 'Main hall', timestamp: 'July 20th, 2024'},
    ]

    const scorebaord_list = [
        {id: 1, sportname:"Basketball", teamname1: 'panthers', teamname2: 'phoenix', scoreteam1: '1', scoreteam2: '2', livelink: 'https://www.youtube.com/embed/-4NCjjcF7y8?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.rism.ac.th&widgetid=1'},
        {id: 2, sportname:"Basketball", teamname1: 'panthers', teamname2: 'phoenix', scoreteam1: '1', scoreteam2: '2', livelink: 'https://www.youtube.com/embed/-4NCjjcF7y8?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.rism.ac.th&widgetid=1'},
        {id: 3, sportname:"Basketball", teamname1: 'panthers', teamname2: 'phoenix', scoreteam1: '1', scoreteam2: '2', livelink: 'https://www.youtube.com/embed/-4NCjjcF7y8?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.rism.ac.th&widgetid=1'},
    ]

    function delete_news() {
        console.log("Test");
        
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
                                            <label htmlFor="" className="form-label">
                                                Banner Title:{" "}
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-12 mb-4">
                                            <label htmlFor="" className="form-label">
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
                                            <button className="btn btn-blue">SAVE</button>
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
                                                    {news_list.map((data, index) => {
                                                        return (
                                                            <tr key={data.id}>
                                                                <td>
                                                                    <i className="bi bi-pencil text-success me-2"></i>
                                                                    <i onClick={delete_news()} className="bi bi-trash3 text-danger"></i>
                                                                </td>
                                                                <td>{data.title} {index}</td>
                                                                <td>{data.content}</td>
                                                                <td>{data.location}</td>
                                                                <td>{data.timestamp}</td>
                                                                
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-6 text-start">
                                            <button className="btn btn-success">
                                                <i className="bi bi-plus-lg me-1 cvvv"></i>
                                                Add News
                                            </button>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className="btn btn-blue">SAVE</button>
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
                                                            <th width="100px">Action</th>
                                                            <th>Sport Name</th>
                                                            <th>First Team</th>
                                                            <th>Second Team</th>
                                                            <th>First Team Score</th>
                                                            <th>Second Team Score</th>
                                                            <th width="300px">live link</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {scorebaord_list.map((data) => {
                                                            return (
                                                                <tr key={data.id}>
                                                                    <td>
                                                                        <i className="bi bi-pencil text-success me-2"></i>
                                                                        <i className="bi bi-trash3 text-danger"></i>
                                                                    </td>
                                                                    <td>{data.sportname}</td>
                                                                    <td>{data.teamname1}</td>
                                                                    <td>{data.teamname2}</td>
                                                                    <td>{data.scoreteam1}</td>
                                                                    <td>{data.scoreteam2}</td>
                                                                    <td>
                                                                        <Link href={data.livelink} className='text-grey' target='_blank'><u>Link to Live</u> 
                                                                            <i className="bi bi-box-arrow-up-right text-grey ms-1"></i>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-6 text-start">
                                            <button className="btn btn-success">
                                                <i className="bi bi-plus-lg me-1 cvvv"></i>
                                                Add Match
                                            </button>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className="btn btn-blue">SAVE</button>
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
