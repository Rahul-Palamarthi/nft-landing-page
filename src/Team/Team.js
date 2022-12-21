import "./Team.css";
import team from "../data/team.json";

const Team = () => {
    return (
        <>
            <section className="team" id="team">
                <div className="team-wrapper min-width">
                    <h2 className="team-heading">Our Team</h2>
                    <p className="team-info">
                        Risus commodo id odio turpis pharetra elementum.
                        Pulvinar porta porta feugiat scelerisque in elit. Morbi
                        rhoncus, tellus, eros consequat magna semper orci a
                        tincidunt.
                    </p>
                    <div className="team-profile-cards-wrapper">
                        {team.map((val) => (
                            <div key={val.id} className="team-profile-card">
                                <div className="team-profile-card-wrapper">
                                    <img src={val.img} alt={val.id} />
                                </div>
                                <h3 className="team-profile-card-title">
                                    {val.name}
                                </h3>
                                <p className="team-profile-card-category">
                                    {val.category}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
