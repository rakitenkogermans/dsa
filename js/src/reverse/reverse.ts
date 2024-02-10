// reverse

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
const reverse = (str: string) => {
    if (str.length === 0) return '';
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
};

export { reverse };
