/* eslint-disable @typescript-eslint/no-empty-object-type */
import { defineNuxtModule, createResolver, installModule } from "@nuxt/kit";
import { name, version } from "../package.json";
import { registerLaioutrApp } from "@laioutr-core/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  hygraphUrl: string;
  hygraphToken: string;
}

/**
 * The config the module adds to nuxt.runtimeConfig.public['@laioutr-demo/customer-demo']
 */
export interface RuntimeConfigModulePublic {}

/**
 * The config the module adds to nuxt.runtimeConfig['@laioutr-demo/customer-demo']
 */
export interface RuntimeConfigModulePrivate extends ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: name, // configKey must match package name
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    nuxt.options.runtimeConfig["@laioutr-demo/customer-demo"] = {
      ...nuxt.options.runtimeConfig["@laioutr-demo/customer-demo"],
      ...options,
    } satisfies RuntimeConfigModulePrivate;

    // Register various laioutr-specific functions.
    await registerLaioutrApp({
      name,
      version,
      orchestrDirs: [resolve("runtime/server/orchestr")],
      sections: [resolve("runtime/app/sections")],
      blocks: [resolve("runtime/app/blocks")],
    });

    // Install peer-dependency modules on prepare-step, so they can be used through their aliases and auto-imports.
    if (nuxt.options._prepare) {
      await installModule("@laioutr-core/frontend-core");
      await installModule("@laioutr-core/orchestr");
    }
  },
});
