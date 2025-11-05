import { addOpenSCADPlugin } from "eleventy-plugin-scad";

/** @param {import("@11ty/eleventy/UserConfig").default} eleventyConfig */
export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory("models");

    addOpenSCADPlugin(eleventyConfig, {
        launchPath: "nightly",
        verbose: true,
    });
}
