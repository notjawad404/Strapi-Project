import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderImgHeaderImg extends Schema.Component {
  collectionName: 'components_header_img_header_imgs';
  info: {
    displayName: 'HeaderImg';
  };
  attributes: {
    HeaderImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
    icon: 'gate';
  };
  attributes: {
    HeaderText: Attribute.String;
  };
}

export interface HeaderHeaderText extends Schema.Component {
  collectionName: 'components_header_header_texts';
  info: {
    displayName: 'HeaderText';
  };
  attributes: {
    HeaderText: Attribute.String;
  };
}

export interface HeaderHeaderSubtext extends Schema.Component {
  collectionName: 'components_header_header_subtexts';
  info: {
    displayName: 'HeaderSubtext';
  };
  attributes: {
    HeaderSubText: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header-img.header-img': HeaderImgHeaderImg;
      'header.header': HeaderHeader;
      'header.header-text': HeaderHeaderText;
      'header.header-subtext': HeaderHeaderSubtext;
    }
  }
}
