import validator from 'validator';
export const isBase64 = (value) => {
    return validator.isBase64(value, { urlSafe: false });
};
//# sourceMappingURL=base64.js.map