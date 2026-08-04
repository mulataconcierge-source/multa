import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

/**
 * On the server `bootstrapApplication` must receive the BootstrapContext it is
 * handed, otherwise Angular has no platform to attach to and throws NG0401
 * (PLATFORM_NOT_FOUND). The original scaffold dropped that argument, which is
 * why route extraction failed and nothing was ever prerendered.
 */
const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, config, context);

export default bootstrap;
