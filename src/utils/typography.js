import Typography from "typography"

const fontFamily = [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
];

const typography = new Typography({
    baseFontSize: "19px",
    baseLineHeight: 1.666,
    headerFontFamily: fontFamily,
    bodyFontFamily: fontFamily,
    headerWeight: "400",
    bodyWeight: 500,
    boldWeight: 700,
    overrideStyles: ({adjustFontSizeTo, scale, rhythm}, options) => {
        const linkColor = "#5304ac"
        return {
            a: {
                color: linkColor,
                textDecoration: "none",
            },
            "a:hover": {
                color: "#7b88fa",
            },
            h1: {
                paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
                marginBottom: rhythm(3 / 4),
                marginTop: rhythm(1.5),
            },
            h2: {
                paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
                marginBottom: rhythm(1 / 4),
                marginTop: rhythm(1),
            },
        }
    }
})

export default typography
