import { addOpenSCADPlugin } from "eleventy-plugin-scad";

/** @param {import("@11ty/eleventy/UserConfig").default} eleventyConfig */
export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory("models");
    eleventyConfig.setOutputDirectory("docs");

    addOpenSCADPlugin(eleventyConfig, {
        launchPath: "docker",
        theme: "Midnight",
        verbose: false
    });

    // eleventyConfig.addPlugin(EleventyPluginOpenSCAD, {
    //     launchPath: "docker",
    // });
}
