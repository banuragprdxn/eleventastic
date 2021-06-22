module.exports = {
    icon: function (name) {
        return `<svg class="icon icon--${name}" role="img" aria-hidden="true">
                    <use xlink:href="#icon-${name}"></use>
                </svg>`
    },
    logo: function (name, width, height) {
        return `<svg class="logo--${name}" role="img" aria-hidden="true" width="${width}", height="${height}">
                    <use xlink:href="#icon-${name}"></use>
                </svg>`
    }
}
