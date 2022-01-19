function matchesCaseInsensitive(string, regularExpression) {
    let regex = new RegExp(regularExpression, "i")
    return regex.test(string)
}

matchesCaseInsensitive('My name is Pablo', '^(.*?)pAbLo$')