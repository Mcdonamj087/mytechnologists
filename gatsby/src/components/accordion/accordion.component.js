import React, { useContext } from 'react';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Block from '@sanity/block-content-to-react';

import './accordion.styles.scss';

const ContextAwareToggle = ({ eventKey, text, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      className={`toggle ${isCurrentEventKey ? 'is-open' : ''}`}
      onClick={decoratedOnClick}>
      <h4 className='accordion-title'>{text}</h4>
      <div className='indicator' />
    </button>
  );
};

const Accordion = ({ eventKey, answer, question }) => {
  return (
    <BootstrapAccordion>
      <ContextAwareToggle eventKey={eventKey} text={question} />

      <BootstrapAccordion.Collapse eventKey={eventKey}>
        <div className='accordion-content'>
          <Block blocks={answer._rawData} />
        </div>
      </BootstrapAccordion.Collapse>
    </BootstrapAccordion>
  );
};

export default Accordion;
