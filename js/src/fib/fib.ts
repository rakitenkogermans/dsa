const fib = (num: number) => {
    if (num < 2) return num;
    return fib(num - 1) + fib(num - 2);
};

export { fib };
