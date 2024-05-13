import { Link } from 'react-router-dom';
import { getNews } from '../../data/news'
import './news.css'

const News = () => {

  const newImages = getNews();
  return (
    <div className='news'>
      <div className="container">
        <div className="news_main">
          <div className="news_main_title">
            <h2>Markazda joriy etilgan axborot tizmimlari</h2>
            <p>﻿O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar vazirligi huzuridagi Bosh ilmiy-metodik markazi tomonidan ishlab chiqilgan va amaliyotga joriy etilgan axborot tizimlari oliy ta’lim tizimi pedagog va rahbar kadrlarini qayta tayyorlash va ularning malakasini oshirish kurslarining nazorat va monitoriringini olib borish hamda baholash jarayonlarining shaffofligini ta’minlaydi.</p>
          </div>
          <div className="news_main_collect_items_title">
            <h3>Fotolavhalar</h3>
          </div>
          <div className="news_main_collect_items">
            {
              newImages.map(n=> (
                <div className="news_item" key={n.id} >
                  <img src={n.Image} alt={n.title} className='news_item_img' />
                  <p className='news_item_content'>{n.title}</p>
                  <button><Link to="#">Learn More</Link></button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
