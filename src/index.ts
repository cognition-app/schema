export type Type = string

interface str_dict<V = string> {
  [key: string]: V
}

export interface AppConfig {
  view: string
  plugins: string[]
}

interface JSONLD<T extends Type = Type> {
  '@context': 'https://raw.githubusercontent.com/cognition-app/schema/master/core/Document.json'
  '@type': T
  '@id'?: string
}

interface Identifiable<T extends Type = Type> extends JSONLD<T> {
  name: string
  description: string
  version: string
  icon?: string
}

// TODO: just overlap with standard package.json
export interface PluginContext<T extends Type = Type> extends Identifiable<T> {
  entrypoint: string
  settings?: Type
}

export interface AppContext extends Identifiable<'core/App.json'> {
  supportedPlugins: str_dict
  dbName: string
  configKey: string
  defaultConfig: AppConfig
}

export interface RegistryContext extends PluginContext<'core/Registry.json'> {
}
export interface RegistryContextInstance extends RegistryContext {
}
export interface ViewProps {
  provider: PouchDB.Database
  search: string
  settings: Type
}
export interface ViewContext extends PluginContext<'core/View.json'>  {
}

export interface ViewContextInstance extends ViewContext {
  cls: any //typeof React.Component<P, S>
}

export interface ProviderContext extends PluginContext<'core/Provider.json'>  {
}
export interface ProviderContextInstance extends ProviderContext {
}

export enum ProviderStatus {
  Active = 'active',
  Paused = 'paused',
  Error = 'error',
}


export interface DocumentContext<T extends Type = Type> extends JSONLD<T> {
  name: string
  description: string
  pertinence: any
  contentType: string
  content: string
}

export interface SettingsContext<T extends Type = Type> extends JSONLD<T> {
  '@id': string
}

export type ProviderInstance = PouchDB.Database<JSONLD>
export type ProviderClass = (settings: SettingsContext) => ProviderInstance
