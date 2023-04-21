export const EmailRegExp = new RegExp(
    '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
);

export const PasswordRegExp = new RegExp(
    '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
);