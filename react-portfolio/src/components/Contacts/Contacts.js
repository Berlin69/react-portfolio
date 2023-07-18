import './Contacts.scss';
import { contactsContent } from '../__data/contacts-data';

export function Contacts(props) {
  const { lang } = props;
  const { name, jobTitle, email, location, contactLinkTitle } = contactsContent[lang];

  return (
    <section className='contacts'>
      <img className='contacts__avatar'></img>
      <div className='contacts__credentials-wrapper'>
        <h2 className='contacts__name'>{name}</h2>
        <h3 className='contacts__job-title'>{jobTitle}</h3>
      </div>

      <div className='contacts__communication-wrapper'>
        <a className='contacts__email'>{email}</a>
        <p className='contacts__location'>{location}</p>
      </div>

      <div className='contacts__social-wrapper'>
        <ul className='contacts__social-list'>
          <li className='contacts__social-list-item'>
            <a className='contacts__social-item-link' href='#'></a>
          </li>

          <li className='contacts__social-list-item'>
            <a className='contacts__social-item-link' href='#'></a>
          </li>

          <li className='contacts__social-list-item'>
            <a className='contacts__social-item-link' href='#'></a>
          </li>

          <li className='contacts__social-list-item'>
            <a className='contacts__social-item-link' href='#'></a>
          </li>
        </ul>
      </div>

      <a className='contacts__form-link' href='#'>
        {contactLinkTitle}
      </a>
    </section>
  );
}
