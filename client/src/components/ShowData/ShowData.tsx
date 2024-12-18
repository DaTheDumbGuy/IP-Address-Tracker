import { showDataProps } from "../../types/geolocation";
import styles from './showData.module.scss';

export default function ShowData({ ip, country, region, city, timezone, isp }: showDataProps) {
  return (
    <section className={styles['b-showData']}>
      <div className={styles['b-showData__item']}>
        <h2 className={styles['b-showData__item__title']}>IP Address</h2>
        <p className={styles['b-showData__item__value']}>{ip}</p>
      </div>

      <div className={styles['b-showData__item']}>
        <div className={styles['b-showData__item__br']}></div>
        <div className={styles['b-showData__item__container']}>
          <h2 className={styles['b-showData__item__title']}>Location</h2>
          <p className={styles['b-showData__item__value']}>
            {country}, {region} {city}
          </p>
        </div>
      </div>

      <div className={styles['b-showData__item']}>
        <div className={styles['b-showData__item__br']}></div>
        <div className={styles['b-showData__item__container']}>
          <h2 className={styles['b-showData__item__title']}>Timezone</h2>
          <p className={styles['b-showData__item__value']}>UTC {timezone}</p>
        </div>
      </div>

      <div className={styles['b-showData__item']}>
        <div className={styles['b-showData__item__br']}></div>
        <div className={styles['b-showData__item__container']}>
          <h2 className={styles['b-showData__item__title']}>ISP</h2>
          <p className={styles['b-showData__item__value']}>{isp}</p>
        </div>
      </div>
    </section>
  );
}