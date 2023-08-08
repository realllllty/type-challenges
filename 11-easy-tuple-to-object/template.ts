type TupleToObject<T extends readonly (string | number)[]> = {
    [P in T[number]] : P;
};

//keyof array -> 获取到的是数组的索引
//T[number] -> 获取遍历数组


