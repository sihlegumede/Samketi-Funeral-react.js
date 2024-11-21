import "./Team.css";

import { grid1, grid2, grid3, grid4, grid5 } from "../../assets";

const Team = () => {
  return (
    <div className="team_section">
      <h1>Meet The Team</h1>
      <div className="image_grid">
        <img src={grid1} className="image_grid_col_2 image_grid_row_2" />
        <img src={grid2} />
        <img src={grid3} />
        <img src={grid4} />
        <img src={grid5} />
      </div>
    </div>
  );
};

export default Team;
