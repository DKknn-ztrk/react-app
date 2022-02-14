import React from 'react';
import { Feature } from '../../components';
import './whatKeo.css';

function WhatKeo() {
  return (
    <div className="keo__whatkeo section__margin" id="wkeo">
    <div className="keo__whatkeo-feature">
      <Feature title="What is KEO" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className="keo__whatkeo-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="keo__whatkeo-container">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
  )
}

export default WhatKeo