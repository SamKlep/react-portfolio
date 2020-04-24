import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <section className='breadcrumb-header text-center'>
      <div className='container'>
        <div className='title-header'>
          <h1>Latest Project </h1>
          <ul
            className='breadcrumb'
            itemScope
            itemType='http://schema.org/BreadcrumbList'
          >
            <meta content={2} />
            <meta content='Ascending' />
            <li className='breadcrumb-item trail-begin'>
              {' '}
              <Link to='/'>
                <span itemProp='name'>Home</span>
              </Link>
              <meta itemProp='position' content={1} />
            </li>
            <li className='breadcrumb-item trail-end'>
              <span itemProp='item'>
                <span itemProp='name'>Project</span>
              </span>
              <meta itemProp='position' content={2} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
