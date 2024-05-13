import { getData } from '../../data/mainWorks'
import './mainWorks.css'


const MainWorks = () => {
  const catalogs = getData();
  return (
    <div className='main_works'>
      <div className="container">
        <div className="main">
          <div className="mainworks_title">
            <h2>Asosiy Yo'nalishlar</h2>
          </div>
          <div className="main_works_catalog">
          {
            catalogs.map(cat=> (
              <li className='main_works_catalog_item' key={cat.id} >
                <img src={cat.Image} alt={cat.title} />
                <p>{cat.title}</p>
              </li>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainWorks
