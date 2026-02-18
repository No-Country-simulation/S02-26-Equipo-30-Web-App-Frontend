import React from "react";
import "./HorseDetails.css";
import Btn from "@/shared/common/button/Btn";
import HorseProfile from "./components/horseProfile/HorseProfile";

export default function HorseDetails() {
    return (
        <div className="listing-container">
            <div className="listing-card">
                <div className="image-section">
                    <div className="badges">
                        <span className="badge verified">Verified Listing</span>
                        <span className="badge score">Seller Score</span>
                    </div>
                    <img
                        src="https://picsum.photos/900/700?random=horse"
                        alt="Golden Promise"
                        className="horse-image"
                    />
                    <button className="favorite">♡</button>
                </div>

                <div className="info-section">
                    <h1 className="title">Golden Promise</h1>
                    <p className="subtitle">Selle Français</p>
                    <h2 className="price">$60,249</h2>

                    <div className="details-grid">
                        <div>
                            <p className="label">Age</p>
                            <p>8 years</p>
                        </div>
                        <div>
                            <p className="label">Gender</p>
                            <p>Gelding</p>
                        </div>

                        <div>
                            <p className="label">Height</p>
                            <p>18.1 hh</p>
                        </div>
                        <div>
                            <p className="label">Color</p>
                            <p>Grey</p>
                        </div>

                        <div>
                            <p className="label">Discipline</p>
                            <p>Barrel Racing</p>
                        </div>
                        <div>
                            <p className="label">Location</p>
                            <p>Wellington, FL</p>
                        </div>
                    </div>

                    <hr />

                    <div className="description">
                        <h3>Description</h3>
                        <p>
                            Amateur-friendly gelding perfect for dedicated rider.
                        </p>
                    </div>

                    <div className="extra-info">
                        <div>
                            <p className="label">Temperament</p>
                            <p>Forward, sensitive, talented</p>
                        </div>
                        <div>
                            <p className="label">Training Level</p>
                            <p>First Level</p>
                        </div>
                    </div>

                    <Btn className="cta">Express Purchase Interest</Btn>
                </div>
            </div>
            <HorseProfile />
        </div>
    );
}
