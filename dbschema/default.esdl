module default {

    type User {
    required property username -> str {
        constraint exclusive
    };
    property score -> int16;
};

}
