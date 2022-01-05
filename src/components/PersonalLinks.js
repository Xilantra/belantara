import React from "react"
import JSONData from "../util/personal-links.json";


const JSONbuildtime = () => (
    <React.Fragment>
      {JSONData.personalLinks.map((data, index) => {
        return <li className="navbar-item" key={`personalLinks_item_${index}`}>
                    <a title={data.title} href={data.url} target="_blank" rel="noopener noreferrer">{data.title}</a>
                </li>
      })}
    </React.Fragment>
)
export default JSONbuildtime