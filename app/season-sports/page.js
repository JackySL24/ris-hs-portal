import "../css/main.css"
import "../css/season-sports.css";
import Image from "next/image";
import Link from 'next/link';

export default function SeasonSports() {   
    
    return (
        <main>
            {/* banner */}
            <section className="background-picture-ss d-flex flex-column justify-content-center mb-5">
                <Link href="/sports-page" className="back-icon">
                        <Image
                            height={500}
                            width={500}
                            src="/images/return-arrow.png"
                            alt=""
                            style={{height: '65px', width: 'auto'}}
                        />

                </Link>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="fs-80">Girls varsity volleyball</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* coach */}
            <section>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-2">
                            <Image
                                height={500}
                                width={500}
                                src="/images/large_G4hZetRpq1SkVHl28fyQ_IMG_2837.jpg.avif"
                                className="border border-warning border-5 rounded-circle text-margin w-100 h-auto"
                                alt="..."
                            />
                        </div>
                        <div className="col-10">
                            <h2 className="blue-text">coach jason derulo</h2>
                            <p className="text-black text-roboto">
                                U14 Girls volleyball is a team that Sed ut
                                perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit
                                aut fugit, sed quia consequuntur magni dolores
                                eos qui ratione voluptatem sequi nesciunt. Neque
                                porro quisquam est, qui dolorem ipsum quia dolor
                                sit amet, consectetur, adipisci velit, sed quia
                                non numquam eius modi tempora incidunt ut labore
                                et dolore magnam aliquam quaerat voluptatem. Ut
                                enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi
                                consequatur?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 blue-text">
                            <h2>recent games</h2>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="card p-2 bg-sblue">
                                <div className="card-body pb-5">
                                    <div className="row">
                                        <div className="col-12 fs-3 text-white fw-bold">
                                            bps x ris u14 volleyball
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 fs-6 yellow-text text-margin">
                                            JULY 7th, 2024 | GODBOUT HALL
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="blue-text text-center fs-64">
                                season 14
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Image
                                height={500}
                                width={500}
                                src="/images/spiking.jpeg"
                                alt=""
                                className="s-image rounded-3 mb-4"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-1 col-10">
                            <p className="text-black text-roboto">
                                Season 14&apos;s team is comprised of Jessica,
                                Jessica, Jessica, and Jessica. Sed ut
                                perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo. AWAY GAME: VIETNAM
                                Season 14&apos;s team went to vietnam to do the
                                griddy. They came home with a silver medal. Sed
                                ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-my-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center my-4">
                            <h2>Awards</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h5>seasac 2014 gold medal</h5>
                            <p className="text-roboto grey-text text-margin">
                                volleyball team won silver medal
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h5>seasac 2014 gold medal</h5>
                            <p className="text-roboto grey-text text-margin">
                                volleyball team won silver medal
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h5>seasac 2014 gold medal</h5>
                            <p className="text-roboto grey-text text-margin">
                                volleyball team won silver medal
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h5>seasac 2014 gold medal</h5>
                            <p className="text-roboto grey-text text-margin">
                                volleyball team won silver medal
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h5>seasac 2014 gold medal</h5>
                            <p className="text-roboto grey-text text-margin">
                                volleyball team won silver medal
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h5>seasac 2014 gold medal</h5>
                            <p className="text-roboto grey-text text-margin">
                                volleyball team won silver medal
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
