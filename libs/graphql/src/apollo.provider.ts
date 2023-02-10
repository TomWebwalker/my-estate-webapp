import { FactoryProvider } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

export const apolloProvider: FactoryProvider = {
  provide: APOLLO_OPTIONS,
  useFactory(httpLink: HttpLink) {
    return {
      cache: new InMemoryCache(),
      link: httpLink.create({
        uri: 'http://localhost:3000/graphql',
      }),
    };
  },
  deps: [HttpLink],
};
