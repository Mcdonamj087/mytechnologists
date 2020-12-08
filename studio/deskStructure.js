import S from '@sanity/desk-tool/structure-builder';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .icon(() => <AiFillHome />)
        .child(S.editor().schemaType('homepage').documentId('homepage')),

      ...S.documentTypeListItems().filter(
        listItem => !['homepage'].includes(listItem.getId())
      ),
    ]);
