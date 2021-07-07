import React from 'react';
import { useQuery } from 'react-query';
import { SponsorsService } from '../../services/sponsors.service';
import './sponsors.scss';

export const Sponsors = (REACT_APP_BASE_API_URL: string) => {
  console.log('Sponsors REACT_APP_BASE_API_URL: ', REACT_APP_BASE_API_URL);
  const sponsorsService: SponsorsService = new SponsorsService(REACT_APP_BASE_API_URL);
  const { data, status } = useQuery('sponsors', sponsorsService.getAllSponsors);
  const baseAssetsUrl = process.env.REACT_APP_BASE_ASSETS_API_URL;
  console.log('sponsors data: ', data);
  
  return (
    <section className="sponsors">
      <div className="sponsors__title-wrapper">
        <h3 className="sponsors__title">Our sponsors</h3>
      </div>
      {status === 'success' && (
        <ul className="sponsors__list">
          {data?.data?.items?.map((row: any) => (
            <li key={row.id} className="sponsor">
              <a href={row.page_url} target="_blank" rel="noopener">
                <img src={baseAssetsUrl + row.logo_path} className="sponsor__image"/>
              </a>
              <p>{row.name}</p>
              <p>Discount code</p>
              <p>{row.discount_code}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}