export interface RegisterRequest {
    organizationName: string;
    organizationEmail: string;
    organizationPhone: string;

    firstName: string;
    lastName: string;

    email: string;
    password: string;
}
export interface LoginRequest {
    organizationSlug: string;
    email: string;
    password: string;
}