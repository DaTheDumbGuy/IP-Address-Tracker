import { showDataProps } from "../../types/geolocation";
import '../../assets/styles/showData.modulemin.css';
export default function ShowData({ ip, country, region, city, timezone, isp }: showDataProps) {
  return (
    <section className="b-showData">
      <div className="b-showData__item">
        <h2 className="b-showData__item__title">IP Address</h2>
        <p className="b-showData__item__value">{ip}</p>
      </div>

      <div className="b-showData__item">
        <h2 className="b-showData__item__title">Location</h2>
        <p className="b-showData__item__value">
          {country}, {region} {city}
        </p>
      </div>

      <div className="b-showData__item">
        <h2 className="b-showData__item__title">Timezone</h2>
        <p className="b-showData__item__value">UTC {timezone}</p>
      </div>

      <div className="b-showData__item">
        <h2 className="b-showData__item__title">ISP</h2>
        <p className="b-showData__item__value">{isp}</p>
      </div>
    </section>
  );
}
