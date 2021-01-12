import S from '@sanity/desk-tool/structure-builder';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { ImCog } from 'react-icons/im';
import { BsPeopleFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { RiQuestionnaireFill } from 'react-icons/ri';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('General')
        .icon(() => <ImCog />)
        .child(S.editor().schemaType('general').documentId('general')),
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            'general',
            'homepage',
            'instructorsPage',
            'whyUsPage',
            'faqPage',
          ].includes(listItem.getId())
      ),
      S.listItem()
        .title('Homepage')
        .icon(() => <AiFillHome />)
        .child(S.editor().schemaType('homepage').documentId('homepage')),
      S.listItem()
        .title('Instructors Page')
        .icon(() => <BsPeopleFill />)
        .child(
          S.editor().schemaType('instructorsPage').documentId('instructorsPage')
        ),
      S.listItem()
        .title('Why Us Page')
        .icon(() => <AiFillStar />)
        .child(S.editor().schemaType('whyUsPage').documentId('whyUsPage')),
      S.listItem()
        .title('FAQ Page')
        .icon(() => <RiQuestionnaireFill />)
        .child(S.editor().schemaType('faqPage').documentId('faqPage')),
    ]);
