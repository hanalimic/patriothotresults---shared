import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    <section className="footer">
      <p className="footer__text--highlighted">PATRIOT AQUATICS</p>
      <p><span className="footer__text--highlighted">Mailing Address: </span>325 Esplanade, Irvine, CA 92612</p>
      <p><span className="footer__text--highlighted">Practice Location – Beckman High School: </span>3588 Bryan Avenue, Irvine, CA 92602 | Email: <a href="mailto:admin@patriotaquatics.org" className="footer__text--highlighted">admin@patriotaquatics.org</a></p>
      <p>May the <a href="https://avensys.hr/en" target="_blank" className="footer__text--highlighted">Avensys</a> be with you.</p>
      <p><a href="Privacy Policy" target="_blank">Privacy Policy</a> | <a href="Terms Of Service" target="_blank">Terms Of Service</a></p>
      <p>Copyright © 2021. <a href="https://patriotaquatics.org/" target="_blank" className="footer__text--highlighted">Patriot Aquatics</a>. All rights reserved.</p>
    </section>
  )
}