import { Link, Outlet } from "react-router-dom";
import { Info } from "./info/Info";
import { Task } from "./task/Task";
import { Work } from "./work/Work";

export const Mamuryat = () => {
  return (
    <div className="mamuryat">
      <div className="raxbariyat_collects">
        <div className="raxbariyat_collect_item">
          <Link to="info">Ma'lumot</Link>
          <Link to="work">Mehnat Faoliyat</Link>
          <Link to="task">Vazifalar</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
