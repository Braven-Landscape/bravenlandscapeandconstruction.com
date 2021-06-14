import S from '@sanity/desk-tool/structure-builder';
import { FaHome as iconHome } from 'react-icons/fa';
import { FaFileAlt as iconPage } from 'react-icons/fa';
import { FaPencilAlt as iconPost } from 'react-icons/fa';
import { FaUserEdit as iconAuthor } from 'react-icons/fa';
import { FaTag as iconTag } from 'react-icons/fa';
import { FaCog as iconSettings } from 'react-icons/fa';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(iconSettings)
        .child(
          S.list()
            .title('Settings Options')
            .items([
              S.listItem()
                .title('Company')
                .icon(iconSettings)
                .child(
                  S.document()
                    .schemaType('settingsCompany')
                    .documentId('settingsCompany')
                ),
              S.listItem()
                .title('Socials')
                .icon(iconSettings)
                .child(
                  S.document()
                    .schemaType('settingsSocials')
                    .documentId('settingsSocials')
                ),
              S.listItem()
                .title('Metadata')
                .icon(iconSettings)
                .child(
                  S.document()
                    .schemaType('settingsMetadata')
                    .documentId('settingsMetadata')
                ),
              S.listItem()
                .title('Colors')
                .icon(iconSettings)
                .child(
                  S.document()
                    .schemaType('settingsColors')
                    .documentId('settingsColors')
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Page - Home')
        .icon(iconHome)
        .child(
          S.editor().id('home').schemaType('home').documentId('singleton-home')
        ),
      S.listItem()
        .title('Posts')
        .icon(iconPost)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Posts')),
      S.listItem()
        .title('Authors')
        .icon(iconAuthor)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Tags')
        .icon(iconTag)
        .schemaType('tag')
        .child(S.documentTypeList('tag').title('Tags')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'home',
            'settingsCompany',
            'settingsSocials',
            'settingsMetadata',
            'settingsColors',
            'post',
            'author',
            'tag',
          ].includes(listItem.getId())
      ),
    ]);
