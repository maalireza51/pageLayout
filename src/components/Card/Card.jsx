import { Link } from "react-router-dom"
import "./style.css"
export default function Card({ data }) {
    return (
        <div className={data.variant}>
            <div className="img-card iCard-style2">
                <div className="card-content">
                    <div className="card-image">
                        <span className="card-caption">{data.author}</span>
                        <img src={data.img}/>
                    </div>

                    <span className="card-title">{data.title}</span>

                    <div className="card-text">
                        <p>
                            {data.summary}
                        </p>
                    </div>

                </div>

                <div className="card-link">
                    <Link to={data.target} title="Read Full"><span>Read Comment</span></Link>
                </div>
            </div>
        </div>
    )
}
