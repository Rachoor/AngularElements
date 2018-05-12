import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ButtonModule } from './app/button.module';
import 'zone.js/dist/zone';
import '@webcomponents/custom-elements/src/native-shim';

platformBrowserDynamic().bootstrapModule(ButtonModule);
