module.exports = {
    pathPrefix: "/a-to-z-in-react-native",
    siteMetadata: {
        title: `A to Z in React-native`,
        description: `An a to z in react-native, topic, code nuggets and challenges in react-native development`,
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
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Roboto Mono`,
                        variants: [`400`, `700`]
                    },
                    {
                        family: `Roboto`,
                        subsets: [`latin`]
                    },
                ],
            },
        }
    ],
};
