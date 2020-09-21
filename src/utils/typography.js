import Typography from "typography"
const typography = new Typography({
    baseFontSize: "19px",
    baseLineHeight: 1.58,
    googleFonts: [
        {
            name: "Varela Round",
            styles: ["400"],
        },
        {
            name: "Lora",
            styles: ["400", "400i", "700"],
        },
    ],
    bodyFontFamily: ["Lora", "serif"],
    headerWeight: "400",
    bodyWeight: 400,
    boldWeight: 700,
})
export default typography
