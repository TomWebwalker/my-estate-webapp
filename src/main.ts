import { bootstrapApplication } from '@angular/platform-browser';
import AppComponent from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { apolloProvider } from 'app-graphql';
import { importProvidersFrom } from '@angular/core';
import { ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideEffects(),
    provideStore(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(ApolloModule),
    importProvidersFrom(BrowserAnimationsModule),
    apolloProvider,
    provideRouter(routes),
  ],
});
