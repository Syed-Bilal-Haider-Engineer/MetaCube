

export const isRole = (roles) => {
    let role = "";
    let roleArray;
    if (Array.isArray(roles)) {
        roleArray = roles
        if (roleArray.includes("admin")) {
            role = "admin";
        } else {
            role = "user";
        }
    } else {
        roleArray = Object.values(roles);
        if (roleArray.includes("admin")) {
            role = "admin";
        } else {
            role = "user";
        }
    }
    return role;

}