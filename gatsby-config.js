module.exports = {
    pathPrefix: "/a-to-z-in-react-native ",
    siteMetadata: {
        title: `The Localhost Blog`,
        description: `This is my coding blog where I write about my coding journey.`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/posts`,
                name: `posts`,
            },
        },
    ],
};
