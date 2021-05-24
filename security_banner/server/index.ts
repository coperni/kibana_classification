import { PluginInitializerContext } from '../../../src/core/server';
import { SecurityBannerPlugin } from './plugin';
import { schema, TypeOf } from '@kbn/config-schema';
import type { PluginConfigDescriptor } from 'kibana/server';

const configSchema = schema.object({
  text: schema.string({ defaultValue: 'UNCLASSIFIED' }),
  bg_color: schema.string({ defaultValue: 'Green' }),
  fg_color: schema.string({ defaultValue: 'White' }),
});

type ConfigType = TypeOf<typeof configSchema>;

export const config: PluginConfigDescriptor<ConfigType> = {
  exposeToBrowser: {
    text: true,
    bg_color: true,
    fg_color: true,
  },
  schema: configSchema,
};

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new SecurityBannerPlugin(initializerContext);
}

export { SecurityBannerPluginSetup, SecurityBannerPluginStart } from './types';
