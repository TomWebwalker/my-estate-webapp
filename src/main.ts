import { bootstrapApplication } from '@angular/platform-browser';
import AppComponent from './app/app.component';
import { provideRouter } from '@angular/router';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { routes } from './routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations, BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideEffects(),
    provideStore(),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(ApolloModule, BrowserAnimationsModule),
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'localhost:3000/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
    provideRouter(routes),
  ],
});
