import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import * as singletons from './singletons';
import * as documents from './documents';
import * as objects from './objects';
import * as plugs from './plugs';

const allSingletons = Object.values(singletons).map((singleton) => {
  return { ...singleton, fields: singleton.fields };
});

const allDocuments = Object.values(documents).map((document) => {
  return { ...document, fields: document.fields };
});

const allObjects = Object.values(objects).map((object) => {
  return { ...object, fields: object.fields };
});

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plug.fields };
});

export default createSchema({
  name: 'default',
  types: schemaTypes
    .concat(allSingletons)
    .concat(allDocuments)
    .concat(allObjects)
    .concat(allPlugs),
});
