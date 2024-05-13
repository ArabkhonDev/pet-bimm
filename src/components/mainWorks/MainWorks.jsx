import { getData } from "../../data/mainWorks";
import "./mainWorks.css";

const MainWorks = () => {
  const catalogs = getData();
  return (
    <div className="main_works">
      <div className="container">
        <div className="main">
          <div className="main_works_info">
            <div className="main_works_title">
              <h2>BOSH ILMIY-METODIK MARKAZ</h2>
            </div>
            <ol>
              <li>
                <p>
                  .......﻿O‘zbekiston Respublikasi Oliy ta’lim, fan va
                  innovatsiyalar vazirligi huzuridagi Oliy ta`lim tizimi pedagog
                  va rahbar kadrlarini qayta tayyorlash va ularning malakasini
                  oshirishni tashkil etish Bosh ilmiy-metodik markazi
                  O`zbekiston Respublikasi Vazirlar Mahkamasining 2012 yil 26
                  sentyabrdagi "Oliy ta`lim muassasalari pedagog kadrlarini
                  qayta tayyorlash va ularning malakasini oshirish tizimini
                  yanada takomillashtirish chora-tadbirlari to`g`risida"gi
                  278-son qarori bilan tashkil etilg
                </p>
              </li>
              <li>
                <p>
                  Bosh ilmiy-metodik markazning maqsadi - oliy ta`lim tizimi
                  pedagog va rahbar kadrlarini qayta tayyorlash va malakasini
                  oshirish jarayonlari sifatini takomillashtirish va
                  monitoringini olib borish, ularni me`yoriy va metodik
                  ta`minotini amalga oshirish, qayta tayyorlash va malaka
                  oshirish jarayonlariga zamonaviy pedagogik va
                  axborot-kommunikatsiya texnologiyalarini keng joriy etilishini
                  tashkillashtirishdan iborat.
                </p>
              </li>
            </ol>
          </div>

          <div className="main_works_catalog">
            {catalogs.map((cat) => (
              <li className="main_works_catalog_item" key={cat.id}>
                <img src={cat.Image} alt={cat.title} />
                <p>{cat.title}</p>
                <button className="main_works_catalog_item_btn">
                  Batafsil
                </button>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWorks;
