import S from '@sanity/desk-tool/structure-builder';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { ImCog } from 'react-icons/im';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('General')
        .icon(() => <ImCog />)
        .child(S.editor().schemaType('general').documentId('general')),
      S.listItem()
        .title('Homepage')
        .icon(() => <AiFillHome />)
        .child(S.editor().schemaType('homepage').documentId('homepage')),

      ...S.documentTypeListItems().filter(
        listItem => !['general', 'homepage'].includes(listItem.getId())
      ),
    ]);
