
import img1 from '../../../assets/img/news/latestNews.jpg';

export const Info = () => {
  return (
    <>
      <div className="info">
        <div className="info_main">
          <div className="info_main_detail">
            <div className="info_main_detail_img">
              <img src={img1} alt="#" />
            </div>
            <div className="info_main_detail_text">
              <li>
                <h2>
Umarov Iskandar Gayratovich</h2>
              </li>
              <li>
                <p>Boshqaruv Raisi v. b.</p>
              </li>
              <li>
                <a href="mailto:priemnaya-pp@ammofos-maxam.uz">
                  mail:  priemnaya-pp@ammofos-maxam.uz
                </a>
              </li>
              <li>
                <a href="tel:998781504141">+998 (78) 150 41 41 </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
