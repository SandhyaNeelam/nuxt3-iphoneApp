//named middleware

export default defineNuxtRouteMiddleware(() => {
    const auth = useAuth();
    console.log("middleware");
    return auth.value.isAuthenticated;
})